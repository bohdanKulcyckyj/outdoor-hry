import { Request, Response } from "express"
import { prisma } from "../.."
import { compareSync } from "bcrypt"
import * as jwt from 'jsonwebtoken'
import { BadRequestException } from "../../exceptions/badRequest"
import { ErrorCode } from "../../exceptions/root"
import { signInSchema } from "@outdoor-game/types/src/validations/requests/auth"
import { validateSchema } from "../../utils/validation"
import { NotFoundException } from "../../exceptions/notFound"
import { JWT_SECRET } from "../../secrets"

export const signIn = async (req: Request, res: Response) => {
    validateSchema(req.body, signInSchema, "SignIn input schema validation failed")

    const { username: email, password } = req.body

    let user = await prisma.user.findFirst({ where: { email } })

    if(!user) {
        throw new NotFoundException("User does not exist!", ErrorCode.USER_NOT_FOUND);
    }
    
    if(!compareSync(password, user.password)) {
        throw new BadRequestException("Incorrect password", ErrorCode.INCORRECT_PASSWORD);
    }

    const token = jwt.sign({
        userId: user.id,
        userEmail: user.email,
        userRole: user.role
    }, JWT_SECRET, { expiresIn: '1h' })

    res.status(200).json({id: user.id, email: user.email, role: user.role, token})
}
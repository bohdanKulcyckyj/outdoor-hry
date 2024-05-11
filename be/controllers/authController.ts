import { Request, Response } from "express"
import { JWT_SECRET } from "../secrets"
import { prisma } from ".."
import { hashSync, compareSync } from "bcrypt"
import * as jwt from 'jsonwebtoken'
import { BadRequestException } from "../exceptions/badRequest"
import { ErrorCode } from "../exceptions/root"
import { NotFoundException } from "../exceptions/notFound"
import { signUpSchema } from "../schema/users"

export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body

    let user = await prisma.user.findFirst({ where: { email } })

    if(!user) {
        throw new NotFoundException("User does not exist!", ErrorCode.USER_NOT_FOUND);
    }
    if(!compareSync(password, user.password)) {
        throw new BadRequestException("Incorrect password", ErrorCode.INCORRECT_PASSWORD);
    }

    const token = jwt.sign({
        userId: user.id,
        userEmail: user.email
    }, JWT_SECRET)

    res.status(200).json({user, token})
}

export const signUp = async (req: Request, res: Response) => {
    signUpSchema.parse(req.body)

    const { email, password, name } = req.body

    let user = await prisma.user.findFirst({ where: { email } })

    if(user) {
        throw new BadRequestException("User already exists!", ErrorCode.USER_ALREADY_EXISTS)
    }

    user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10)
        }
    })

    res.status(201).json(user)
}
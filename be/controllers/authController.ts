import { Request, Response } from "express"
import { JWT_SECRET } from "../secrets"
import { prisma } from ".."
import { hashSync, compareSync } from "bcrypt"
import * as jwt from 'jsonwebtoken'
import { BadRequestException } from "../exceptions/badRequest"
import { ErrorCode } from "../exceptions/root"
import { NotFoundException } from "../exceptions/notFound"
import { signUpSchema, signInSchema } from "../schema/users"
import { InternalException } from "../exceptions/internalExceptions"

export const signIn = async (req: Request, res: Response) => {
    const result = signInSchema.safeParse(req.body)
    if(!result.success) {
        let zodErrors = {}
        result.error.issues.forEach((issue) => {
            zodErrors = {...zodErrors, [issue.path[0]]: issue.message }
        })
        return res.status(422).json({errors: zodErrors})
    }

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

export const signUp = async (req: Request, res: Response) => {
    const result = signUpSchema.safeParse(req.body)
    if(!result.success) {
        let zodErrors = {}
        result.error.issues.forEach((issue) => {
            zodErrors = {...zodErrors, [issue.path[0]]: issue.message }
        })
        return res.status(422).json({errors: zodErrors})
    }

    const { email, password, name } = req.body

    let user = await prisma.user.findFirst({ where: { email } })

    if(user) {
        throw new BadRequestException("User already exists!", ErrorCode.USER_ALREADY_EXISTS)
    }

    const badge = await prisma.badge.findFirst({
        where: {
            minExperience: 0
        }
    })

    if(!badge) {
        throw new InternalException("Default Badge has not found!", ErrorCode.SERVER_LOGIC_ERROR, null)
    }

    user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10),
            badgeId: badge.id
        }
    })

    res.status(201).json(user)
}
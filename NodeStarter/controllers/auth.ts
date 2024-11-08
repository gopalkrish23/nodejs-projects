import { Request, Response } from "express"

export const googleAuth = function (req: Request, res: Response) {
    res.status(200).send("from googleAuth")
}

export const googleAuthCallback = function (req: Request, res: Response) {
    res.status(200).send("from googleAuth CB")
}

export const logout = function (req: Request, res: Response) {
    res.status(200).send("from logout")
}

export const getCurrentUser = function (req: Request, res: Response) {
    res.status(200).send("from getCurrentUser")
}
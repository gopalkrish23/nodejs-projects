import { Request, Response } from "express";

export function addMessage(req: Request, res: Response) {
    res.status(200).send("message added");
}

export function fetchMessages(req: Request, res: Response) {
    res.status(200).send("new message");
}
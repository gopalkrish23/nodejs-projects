import { NextFunction, Request, RequestHandler, Response } from "express";

type customRequest = Request & { user?: any }

const handler = function (req: customRequest, res: Response, next: NextFunction) {
    if(!req.user) {
        res.status(401).send({"Error": "You must Login"})
        return;
    }
    next();
}

export default handler
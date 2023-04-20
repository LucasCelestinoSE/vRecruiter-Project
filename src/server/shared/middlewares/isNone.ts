import { Request, Response } from "express";

export const isNone = (req: Request,res: Response) => {
    if(req.body.nome == undefined){
        return 'Insira o nome'
    }
}

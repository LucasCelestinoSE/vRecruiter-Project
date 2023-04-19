import { Request, Response } from "express";

interface iCidade{
    name: string
}
export const create = (req: Request<{},{},iCidade>,res: Response) => {
  const data = req.body
  res.status(200).json('Criado!')
} 
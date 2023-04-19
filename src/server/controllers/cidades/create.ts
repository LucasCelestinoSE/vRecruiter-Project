import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares";

interface iCidade{
    name: string,
    estado: string,
}






export const createValidation = validation((getSchema) => ({
  body: getSchema<iCidade>(yup.object().shape({
    name: yup.string().required().min(3),
    estado: yup.string().required().min(3),
  })),
}));
export const create = async (req: Request<{},{},iCidade>,res: Response) => {
  res.status(500).json({message: 'Nao implementado'})
} 
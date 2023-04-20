import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middlewares';


interface IParamProps{
  id?: number
}
interface IBodyProps{
    name: string
}
export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().min(0),
    })),
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3),
  })),
}))

export const updateById = async (req: Request<IParamProps,{},IBodyProps>, res: Response) => {
    console.log(req.params);
    console.log(req.body);
  
    return res.status(200).json({params: req.params, body: req.body});
};
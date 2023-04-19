import { RequestHandler } from "express"
import * as yup from 'yup'


type TProperty = 'body'|'header'|'params'|'query'
type TGetSchema = <T extends yup.Maybe<yup.AnyObject>>(schema: yup.ObjectSchema<T>) =>yup.ObjectSchema<T>
type TAllSchemas = Record<TProperty, yup.ObjectSchema<any>>;
type Tvalidation = (getAllSchemas: TGelAllSchemas) => RequestHandler
type TGelAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>



export const validation: Tvalidation = (getAllSchemas) => async (req,res,next) =>{
    const errosResult: Record<string,Record<string,string>> = {}
    const schemas = getAllSchemas(schema => schema)
    Object.entries(schemas).forEach(([key,schema]) => {
        try{    
            schema.validateSync(req[key as TProperty], {abortEarly: false})
            return next()
          }catch(error){
            const erros: Record<string,string> = {}
            const yupErrors = error as yup.ValidationError
            yupErrors.inner.forEach(error => {
                if (error.path === undefined) return;
                erros[error.path] = error.message;
            });
        
        
        
            errosResult[key as TProperty] = erros
    };
    })
    if (Object.entries(errosResult).length == 0){
        return next()
    }else{
        return res.status(400).json({errors: errosResult})
    }
}
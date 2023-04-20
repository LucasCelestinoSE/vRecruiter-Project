import {Router} from 'express'
import { cidadeController } from './../controllers'
import {isNone} from '../shared/middlewares/isNone'
const router = Router()
router.get('/', (req,res) => {
    return res.send('Olá, Dev!')
})
router.post('/cidades', 
cidadeController.createValidation,
cidadeController.create
)
router.get('/cidades', 
cidadeController.getAllValidation,
cidadeController.getAll
)
router.get('/cidades/:id', 
cidadeController.getByIdValidation,
cidadeController.getById
)
router.put('/cidades/:id', 
cidadeController.updateByIdValidation,isNone,
cidadeController.updateById
)
router.delete('/cidades/:id', 
cidadeController.deleteByIdValidation,
cidadeController.deleteById
)
export {router}
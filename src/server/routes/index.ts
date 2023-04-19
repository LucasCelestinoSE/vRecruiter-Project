import {Router} from 'express'
import { cidadeController } from './../controllers'
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
export {router}
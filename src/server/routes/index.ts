import {Router} from 'express'
const router = Router()
router.get('/', (req,res) => {
    return res.send('Olá, Dev!')
})
router.post('/', (req,res) => {
    return res.send(req.body)
})
export {router}
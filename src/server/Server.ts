import express from 'express'
import './shared/services/tradution'
import {router} from './routes'
import 'dotenv/config'
import cors from 'cors'
const server = express()

server.use(express.json())
server.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    server.use(cors());
    next()
})
server.use(router)


export {server}
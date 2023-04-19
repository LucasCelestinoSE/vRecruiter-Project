import express from 'express'
import './shared/services/tradution'
import {router} from './routes'
import 'dotenv/config'

const server = express()

server.use(express.json())
server.use(router)


export {server}
import express from 'express'
import './shared/services/tradution'
import {router} from './routes'
import 'dotenv/config'
const cors = require('cors')
const server = express()
server.use(cors)
server.use(express.json())
server.use(router)


export {server}
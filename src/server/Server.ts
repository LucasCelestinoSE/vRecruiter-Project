import express from 'express'
import './shared/services/tradution'
import {router} from './routes'
import 'dotenv/config'
import cors from 'cors'
const server = express()

server.use(express.json())
server.use(router)

const allowedOrigins = ['https://vrecruiterp-b4mhr.ondigitalocean.app/'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
server.use(cors(options))
export {server}
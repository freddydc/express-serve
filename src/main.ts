import bodyParser from 'body-parser'
import express from 'express'
import { routers } from './network/routers'
import cors from 'cors'
import dotenv from 'dotenv'
import connect from './db'
import http from 'http'
import { socketServer } from './socket'

dotenv.config()

connect(process.env.DATABASE_URL ?? '')

const main = express()
const port = 5000
const server = new http.Server(main)

socketServer.create(server)

main.use(cors())
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended: false }))

routers(main)

main.use('/home', express.static('app'))

server.listen(port, () => {
  console.log(`> Serve at http://localhost:${port}`)
})

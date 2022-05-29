import 'dotenv/config'
import bodyParser from 'body-parser'
import express from 'express'
import { routers } from './network/routers'
import cors from 'cors'
import connect from './db'
import http from 'http'
import { socketServer } from './socket'
import { config } from './config'

connect(config.dbUrl)

const main = express()
const port = config.port
const server = new http.Server(main)

socketServer.create(server)

main.use(cors())
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended: false }))

routers(main)

main.use(`/${config.pubRoute}`, express.static('app'))

server.listen(port, () => {
  console.log(`> Serve at ${config.host}:${port}`)
})

import bodyParser from 'body-parser'
import express from 'express'
import { routers } from './network/routers'
import dotenv from 'dotenv'
import connect from './db'

dotenv.config()

connect(process.env.DATABASE_URL ?? '')

const main = express()
const port = 5000

main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended: false }))

routers(main)

main.use('/home', express.static('app'))

main.listen(port, () => {
  console.log(`> Serve at http://localhost:${port}`)
})

import bodyParser from 'body-parser'
import express from 'express'
import { routers } from './network/routers'

const main = express()
const port = 5000

main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended: false }))

routers(main)

main.use('/home', express.static('app'))

main.listen(port, () => {
  console.log(`> Serve at http://localhost:${port}`)
})

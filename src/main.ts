import bodyParser from 'body-parser'
import express from 'express'
import { response } from './network/response'

const main = express()
const port = 5000

const router = express.Router()

main.use(bodyParser.json())
main.use(bodyParser.urlencoded({ extended: false }))
main.use(router)

router.get('/message', (req, res) => {
  console.log(req.headers)
  res.header({
    'custom-header': 'Our custom value'
  })
  response.success(req, res, 'Message list')
})

router.post('/message', (req, res) => {
  console.log(req.query)
  console.log(req.body)
  if (req.query.error == 'test') {
    response.error(req, res, 'Test error success', 400)
  } else {
    response.success(req, res, 'Added message successfully', 201)
  }
})

main.listen(port, () => {
  console.log(`> Serve at http://localhost:${port}`)
})

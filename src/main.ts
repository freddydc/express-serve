import bodyParser from 'body-parser'
import express from 'express'

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
  res.send('Message list')
})

router.post('/message', (req, res) => {
  console.log(req.query)
  console.log(req.body)
  res.send(`Added message ${req.body.text}`)
})

main.listen(port, () => {
  console.log(`> Serve at http://localhost:${port}`)
})

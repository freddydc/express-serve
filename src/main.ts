import express from 'express'

const main = express()
const port = 5000

const router = express.Router()

main.use(router)

router.get('/message', (req, res) => {
  res.send('Message list')
})

router.post('/message', (req, res) => {
  res.send('Added message')
})

main.listen(port, () => {
  console.log(`> Serve at http://localhost:${port}`)
})

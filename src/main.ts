import express from 'express'

const main = express()
const port = 5000

main.use('/', (req, res) => {
  res.send('Welcome')
})

main.listen(port, () => {
  console.log(`> Serve at http://localhost:${port}`)
})

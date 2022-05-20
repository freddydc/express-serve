import express from 'express'
import { response } from '../../network/response'

export const message = express.Router()

message.get('/', (req, res) => {
  console.log(req.headers)
  res.header({
    'custom-header': 'Our custom value'
  })
  response.success(req, res, 'Message list')
})

message.post('/', (req, res) => {
  console.log(req.query)
  console.log(req.body)
  if (req.query.error == 'test') {
    response.error(
      req,
      res,
      'An unexpected error ocurred',
      500,
      'Error details'
    )
  } else {
    response.success(req, res, 'Added message successfully', 201)
  }
})

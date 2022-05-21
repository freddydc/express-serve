import express from 'express'
import { response } from '../../network/response'
import controller from './controller'

export const message = express.Router()

message.get('/', (req, res) => {
  console.log(req.headers)
  res.header({
    'custom-header': 'Our custom value'
  })
  response.success(req, res, 'Message list')
})

message.post('/', (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then(msg => {
      response.success(req, res, msg, 201)
    })
    .catch(err => {
      response.error(req, res, 'Invalid data', 400, err)
    })
})

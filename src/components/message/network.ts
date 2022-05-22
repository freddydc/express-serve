import express from 'express'
import { response } from '../../network/response'
import controller from './controller'

export const message = express.Router()

message.get('/', (req, res) => {
  controller
    .getMessages()
    .then(msgList => {
      response.success(req, res, msgList, 200)
    })
    .catch(err => {
      response.error(req, res, 'Unexpected Error', 500, err)
    })
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

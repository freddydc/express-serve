import express from 'express'
import { response } from '../../network/response'
import controller from './controller'

export const chat = express.Router()

chat.post('/', (req, res) => {
  controller
    .addChat(req.body.users)
    .then(data => {
      response.success(req, res, data, 201)
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err)
    })
})

chat.get('/:userId', (req, res) => {
  controller
    .chatList(req.params.userId)
    .then(userChat => {
      response.success(req, res, userChat, 200)
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err)
    })
})

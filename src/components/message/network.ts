import express from 'express'
import { response } from '../../network/response'
import controller from './controller'
import multer from 'multer'
import { config } from '../../config'

export const message = express.Router()

const upload = multer({
  dest: `app/${config.fileRoute}/`
})

message.get('/', (req, res) => {
  const filterMessage = (req.query.chat as string) ?? ''
  controller
    .getMessages(filterMessage)
    .then(msgList => {
      response.success(req, res, msgList, 200)
    })
    .catch(err => {
      response.error(req, res, 'Unexpected Error', 500, err)
    })
})

message.post('/', upload.single('file'), (req, res) => {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then(msg => {
      response.success(req, res, msg, 201)
    })
    .catch(err => {
      response.error(req, res, 'Invalid data', 400, err)
    })
})

message.patch('/:id', (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then(msg => {
      response.success(req, res, msg, 200)
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err)
    })
})

message.delete('/:id', (req, res) => {
  controller
    .removeMessage(req.params.id)
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err)
    })
})

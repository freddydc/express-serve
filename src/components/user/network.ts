import express from 'express'
import { response } from '../../network/response'
import controller from './controller'

export const user = express.Router()

user.post('/', (req, res) => {
  controller
    .addUser(req.body.name)
    .then(data => {
      response.success(req, res, data, 201)
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err)
    })
})

user.get('/', (req, res) => {
  controller
    .getUsers()
    .then(users => {
      response.success(req, res, users, 200)
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err)
    })
})

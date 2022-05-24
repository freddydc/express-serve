import { Express } from 'express'
import { message } from '../components/message/network'
import { user } from '../components/user/network'

export const routers = (server: Express) => {
  server.use('/message', message)
  server.use('/user', user)
}

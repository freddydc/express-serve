import { Express } from 'express'
import { message } from '../components/message/network'

export const routers = (server: Express) => {
  server.use('/message', message)
}

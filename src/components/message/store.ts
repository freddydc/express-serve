import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Message from './model'

dotenv.config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE_URL ?? '')

type Message = {
  user: string
  message: string
  date: Date
}

function addMessage(message: Message) {
  const newMessage = new Message(message)
  newMessage.save()
}

async function getMessages() {
  const messages = await Message.find({})
  return messages
}

export const store = {
  add: addMessage,
  list: getMessages
}

import { store } from './store'

type Message = {
  user: string
  message: string
  date: Date
}

function addMessage(user: string, message: string) {
  return new Promise<Message>((resolve, reject) => {
    if (!user || !message) {
      reject('Message controller error')
      return
    }
    const newMessage = {
      user,
      message,
      date: new Date()
    }
    store.add(newMessage)
    resolve(newMessage)
  })
}

function getMessages() {
  return new Promise<Message[]>((resolve, reject) => {
    resolve(store.list())
  })
}

export default {
  addMessage,
  getMessages
}

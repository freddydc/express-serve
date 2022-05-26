import { store } from './store'

type Message = {
  user: string
  message: string
  date: Date
}

type File = {
  filename: string
}

function addMessage(chat: string, user: string, message: string, file?: File) {
  return new Promise<Message>((resolve, reject) => {
    if (!chat || !user || !message) {
      reject('Message controller error')
      return
    }

    const fileUrl = file
      ? `http://localhost:5000/home/uploads/${file.filename}`
      : ''

    const newMessage = {
      user,
      message,
      date: new Date(),
      chat,
      file: fileUrl
    }
    store.add(newMessage)
    resolve(newMessage)
  })
}

function getMessages(filterMessage: string) {
  return new Promise<Message[]>((resolve, reject) => {
    resolve(store.list(filterMessage))
  })
}

function updateMessage(id: string, message: string) {
  return new Promise<Message>((resolve, reject) => {
    if (!id || !message) {
      reject('Invalid Data')
      return
    }
    store
      .updateText(id, message)
      .then(updatedMessage => resolve(updatedMessage))
  })
}

function removeMessage(id: string) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Invalid Data')
      return
    }
    store
      .remove(id)
      .then(() => {
        resolve('Deleted Message')
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  addMessage,
  getMessages,
  updateMessage,
  removeMessage
}

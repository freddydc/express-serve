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
    resolve(newMessage)
  })
}

export default {
  addMessage
}

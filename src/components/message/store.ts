type Message = {
  user: string
  message: string
  date: Date
}

const messages = [] as Message[]

function addMessage(message: Message) {
  messages.push(message)
}

function getMessages() {
  return messages
}

export const store = {
  add: addMessage,
  list: getMessages
}

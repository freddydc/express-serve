import Message from './model'

type Message = {
  user: string
  message: string
  date: Date
}

function addMessage(message: Message) {
  const newMessage = new Message(message)
  newMessage.save()
}

async function getMessages(filterUser: string) {
  const filter = filterUser ? { user: filterUser } : {}
  const messages = await Message.find(filter)
  return messages
}

async function updateMessage(id: string, message: string): Promise<Message> {
  const oldMessage = await Message.findById(id)
  oldMessage.message = message
  const updatedMessage = await oldMessage.save()
  return updatedMessage
}

function removeMessage(msgId: string) {
  return Message.deleteOne({
    _id: msgId
  })
}

export const store = {
  add: addMessage,
  list: getMessages,
  updateText: updateMessage,
  remove: removeMessage
}

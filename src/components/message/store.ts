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

function getMessages(filterMessage: string) {
  return new Promise<Message[]>((resolve, reject) => {
    const filter = filterMessage ? { user: filterMessage } : {}
    Message.find(filter)
      .populate('user')
      .exec((err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(data as Message[])
      })
  })
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

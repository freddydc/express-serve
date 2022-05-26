import Chat from './model'

type User = {
  name: string
}

type Chat = {
  users: User[]
}

function addChat(chat: Chat) {
  const newChat = new Chat(chat)
  return newChat.save()
}

function chatList(userId: string): Promise<Chat> {
  return new Promise((resolve, reject) => {
    const filter = userId ? { users: userId } : {}
    Chat.find(filter)
      .populate('users')
      .exec((err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(data as unknown as Chat)
      })
  })
}

export const store = {
  add: addChat,
  list: chatList
}

import { store } from './store'

type User = {
  name: string
}

type Chat = {
  users: User[]
}

function addChat(users: Chat): Promise<Chat> {
  if (!users || !Array.isArray(users)) {
    return Promise.reject('Invalid data list')
  }

  const newChat = {
    users
  }
  return store.add(newChat)
}

function chatList(userId: string) {
  return store.list(userId)
}

export default {
  addChat,
  chatList
}

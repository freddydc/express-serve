import { store } from './store'

type User = {
  name: string
}

function addUser(name: string): Promise<User> {
  if (!name) {
    return Promise.reject('Invalid Data')
  }

  const newUser = {
    name
  }

  return store.add(newUser)
}

function getUsers() {
  return store.list()
}

export default {
  addUser,
  getUsers
}

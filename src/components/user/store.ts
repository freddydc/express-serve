import User from './model'

type User = {
  name: string
}

function addUser(user: User) {
  const newUser = new User(user)
  return newUser.save()
}

export const store = {
  add: addUser
}

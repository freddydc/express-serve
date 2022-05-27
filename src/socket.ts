import { Server } from 'socket.io'

type Socket = {
  io: Server
}

export const socket = {} as Socket

function create<T>(server: T) {
  socket.io = new Server(server)
}

export const socketServer = {
  create
}

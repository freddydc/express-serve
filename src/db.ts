import mongoose from 'mongoose'

mongoose.Promise = global.Promise

export default async function connect(url: string) {
  await mongoose.connect(url)
  console.log('> [ DB ] = connected')
}

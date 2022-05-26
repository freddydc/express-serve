import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'Chat'
  },
  message: {
    type: String,
    required: true
  },
  date: Date
})

export default mongoose.models.Message ??
  mongoose.model('Message', messageSchema)

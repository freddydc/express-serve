import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true
  },
  date: Date
})

export default mongoose.models.Message ??
  mongoose.model('Message', messageSchema)

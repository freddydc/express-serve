import mongoose, { Schema } from 'mongoose'

const chatSchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
})

export default mongoose.models.Chat ?? mongoose.model('Chat', chatSchema)

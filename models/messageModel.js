import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
  text: String,
  chatId: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: {
    type: String,
    // default: Date.now,
    required: true,
  },
  updatedAt: {
    type: String,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;

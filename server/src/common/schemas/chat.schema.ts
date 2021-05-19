import * as mongoose from 'mongoose';

const { Number, String, Date } = mongoose.Schema.Types;

const ChatSchema = new mongoose.Schema({
  roomId: Number,
  sender: String,
  message: String,
  time: Date,
});

export default ChatSchema;

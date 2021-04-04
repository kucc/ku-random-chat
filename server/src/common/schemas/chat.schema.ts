import * as mongoose from 'mongoose';

const { ObjectId, String } = mongoose.Schema.Types;

const ChatSchema = new mongoose.Schema({
  roomId: { type: ObjectId, ref: 'Room' },
  userName: String,
  message: String,
});

export default ChatSchema;

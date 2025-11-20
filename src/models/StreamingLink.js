import mongoose from 'mongoose';

const StreamingLinkSchema = new mongoose.Schema({
  platform: { type: String },
  url: { type: String },
  isFree: { type: Boolean, default: false }
}, { _id: false }); // opcional: evita crear _id para cada subdocumento

export default StreamingLinkSchema;

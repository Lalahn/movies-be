import mongoose from 'mongoose';
import { ReviewSchema } from "./Review.js";
import { StreamingLinkSchema } from "./StreamingLink.js";
const { Schema } = mongoose;

const MovieSchema = new Schema({
  title: { type: String, required: true },
  synopsis: { type: String },
  releaseYear: { type: Number },
  genres: { type: [String], default: [] },
  posterURL: { type: String },
  trailerURL: { type: String },

  actorIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Actor'
  }],

  // documentos anidados
  streamingLinks: {
    type: [StreamingLinkSchema],
    default: []
  },

  reviews: {
    type: [ReviewSchema],
    default: []
  }
}, { collection: 'movies' });

export default mongoose.model("Movie", MovieSchema);

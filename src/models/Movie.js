import mongoose from 'mongoose';
import streamingLinkSchema from './StreamingLink.js';
import reviewSchema from './Review.js';

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

  streamingLinks: {
    type: [streamingLinkSchema],
    default: []
  },

  reviews: {
    type: [reviewSchema],
    default: []
  }
}, { collection: 'movies' });

const Movie = mongoose.models.Movie || mongoose.model('Movie', MovieSchema);

export default Movie;


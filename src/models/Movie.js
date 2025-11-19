import mongoose from 'mongoose';
import streamingLinkSchema from './StreamingLink.js';
import reviewSchema from './Review.js'; 

const { Schema } = mongoose;

const movieSchema = new Schema({
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
    type: [streamingLinkSchema],
    default: []
  },

  reviews: {
    type: [reviewSchema],
    default: []
  }
}, {
  timestamps: true // opcional: agrega createdAt y updatedAt
});

// Crear el modelo una única vez
const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);

export default Movie;


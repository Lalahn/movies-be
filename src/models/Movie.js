import mongoose from 'mongoose';
import { ReviewSchema } from "./Review.js";
import { StreamingLinkSchema } from "./StreamingLink.js";
const { Schema } = mongoose;

const MovieSchema = new Schema({
  // _id es implícito en Mongoose
  title: { type: String, required: true }, // Título de la película
  synopsis: { type: String }, // Breve resumen de la trama
  releaseYear: { type: Number }, // Año de lanzamiento
  genres: { type: [String], default: [] }, // Array de Strings (Lista de géneros)
  posterURL: { type: String }, // URL del póster (Multimedia Field)
  trailerURL: { type: String }, // URL del tráiler (Multimedia Field)

  // Referencia M:N a la colección Actors (Reference Array)
  actorIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Actor'
  }],

  // Anidamiento (Embedding) de StreamingLink (Array of Documents)
  streamingLinks: {
    type: [StreamingLinkSchema],
    default: []
  },

  // Anidamiento (Embedding) de Review (Array of Documents)
  reviews: {
    type: [ReviewSchema],
    default: []
  }
});

export default mongoose.model("Movie", MovieSchema);

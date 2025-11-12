import mongoose from 'mongoose';
const { Schema } = mongoose;
import ReviewSchema from"./Review";
import StreamingLinkSchema from "./StreamingLink";

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

// Modelo
const Movie = mongoose.model('Movie', MovieSchema);

// Exportar todos los modelos
export {
  User,
  Actor,
  Movie,
  StreamingLinkSchema, // Opcional, solo si necesitas el esquema por separado
  ReviewSchema // Opcional
};

export default mongoose.model("Movie", MovieSchema);

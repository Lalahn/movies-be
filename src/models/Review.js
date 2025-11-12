import mongoose from 'mongoose';
const { Schema } = mongoose;

export const ReviewSchema = new Schema({
  // Referencia anidada al usuario que escribió la reseña (Nested Reference)
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Referencia a la colección 'Users'
    required: true
  },
  rating: { type: Number, min: 1, max: 5, required: true }, // Calificación de 1 a 5
  comment: { type: String, required: true }, // Texto del comentario
  date: { type: Date, default: Date.now } // Fecha de publicación de la reseña
}, { _id: false });

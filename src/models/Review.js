import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 0, max: 5 },
  comment: String,
  date: { type: Date, default: Date.now }
}, { _id: true }); // aquí dejamos _id para poder referenciar reseñas si hace falta

export default reviewSchema;


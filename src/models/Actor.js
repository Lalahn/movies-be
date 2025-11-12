const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActorSchema = new Schema({
  // _id es implícito en Mongoose
  fullName: { type: String, required: true }, // Nombre completo del actor
  dateOfBirth: { type: Date }, // Fecha de nacimiento
  biography: { type: String }, // Resumen biográfico
  photoURL: { type: String } // URL del contenido multimedia (foto)
});

// Modelo
const Actor = mongoose.model('Actor', ActorSchema);
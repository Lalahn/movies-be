const mongoose = require('mongoose');
const { Schema } = mongoose;

const StreamingLinkSchema = new Schema({
  platform: { type: String, required: true }, // Nombre de la plataforma (ej: "Netflix")
  url: { type: String, required: true }, // Enlace directo para ver la película
  isFree: { type: Boolean, required: true } // Indica si está disponible gratuitamente
}, { _id: false }); // Se recomienda deshabilitar _id para subdocumentos si no se necesitan consultar individualmente.

module.exports = mongoose.model("StreamingLink", StreamingLinkSchema);
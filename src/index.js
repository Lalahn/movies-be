import express from 'express';

require('dotenv').config(); // Cargar variables de entorno
const mongoose = require('mongoose'); 


const app = express();

const PORT = process.env.PORT || 3000;

// 1) Conectar a la base de datos (ejecuta la conexión definida)
import'./config/database.js';

// 2) Middleware para parsear JSON en cuerpos de petición
app.use(express.json());

// 3) Importar rutas
import userRoutes from './routes/userRoutes.js';
import actorRoutes from './routes/actorRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import mongoose from 'mongoose';

// 4) Usar rutas bajo prefijos
app.use('/api/user', userRoutes);
app.use('/api/actor', actorRoutes);
app.use('/api/movie', movieRoutes);

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto: ${PORT}`);
});


// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de conexión:', err))


// src/index.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Cargar variables de entorno
dotenv.config();

// Conexión a la base de datos
import './config/database.js';

// Rutas
import userRoutes from './routes/userRoutes.js';
import actorRoutes from './routes/actorRoutes.js';
import movieRoutes from './routes/movieRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prefijos (según tu requerimiento en singular)
app.use('/api/user', userRoutes);
app.use('/api/actor', actorRoutes);
app.use('/api/movie', movieRoutes);

app.get('/', (req, res) => res.send('API MovieDB funcionando'));

// Iniciar servidor cuando Mongoose esté conectado
mongoose.connection.once("connected", () => {
  console.log("✅ Mongoose conectado. Iniciando servidor...");
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
});




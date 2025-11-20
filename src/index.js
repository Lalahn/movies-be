// src/index.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { connectDB } from './config/database.js';

// 3) Importar rutas
import actorRoutes from './routes/actorRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT || 3000;

// 1) Conectar a la base de datos (ejecuta la conexión definida)
connectDB();

// 2) Middleware para parsear JSON en cuerpos de petición
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// 4) Usar rutas bajo prefijos
app.use('/api/users', userRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/movies', movieRoutes);

// Iniciar servidor cuando Mongoose esté conectado
mongoose.connection.once("connected", () => {
  console.log("✅ Mongoose conectado. Iniciando servidor...");
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
});

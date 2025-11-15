import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/database.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

// 1) Conectar a la base de datos (ejecuta la conexión definida)
connectDB();

// 2) Middleware para parsear JSON en cuerpos de petición
app.use(express.json());

// 3) Importar rutas
import actorRoutes from './routes/actorRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import userRoutes from './routes/userRoutes.js';

// 4) Usar rutas bajo prefijos
app.use('/api/users', userRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/movies', movieRoutes);

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto: ${PORT}`);
});

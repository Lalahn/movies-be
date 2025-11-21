import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/database.js';

import actorRoutes from './routes/actorRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/movies', movieRoutes);

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto: ${PORT}`);
});

// src/routes/movieRoutes.js
import express from 'express';
import { getMovies, getMovieById, deleteMovie, updateMovie, createMovie } from '../controllers/movieController.js';

const router = express.Router();

// Lista películas
router.get('/', getMovies);

// Obtener película por id
router.get('/:id', getMovieById);

// Actualizar pelicula
router.put('/:id', updateMovie);

// Eliminar película
router.delete('/:id', deleteMovie);

// Crear película
router.post('/', createMovie);

export default router;

 

  



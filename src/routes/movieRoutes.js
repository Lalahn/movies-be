// src/routes/movieRoutes.js
import express from 'express';
import { getMovies, getMovieById, deleteMovie, updateMovie } from '../controllers/movieController.js';

const router = express.Router();

// Lista películas
router.get('/', getMovies);

// Obtener película por id
router.get('/:id', getMovieById);

router.put('/:id', updateMovie);

// Eliminar película
router.delete('/:id', deleteMovie);

export default router;

 

  



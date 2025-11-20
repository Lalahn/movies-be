// src/routes/movieRoutes.js
import express from 'express';
import { getMovies, getMovieById, deleteMovie, updateMovie } from '../controllers/movieController.js';

const router = express.Router();

// Lista películas
router.get('/', getMovies);

// Obtener película por id
router.get('/:id', getMovieById);

// Actualizar película (PUT) -> si tu controller no tiene updateMovie, lo veremos luego
router.put('/:id', updateMovie);

// Eliminar película
router.delete('/:id', deleteMovie);

export default router;


  // Convertir actorIds a ObjectId si vienen como strings
  //if (updateData.actorIds && Array.isArray(updateData.actorIds)) {
  //  updateData.actorIds = updateData.actorIds.map(a => mongoose.Types.ObjectId(a));
  //}

 

  



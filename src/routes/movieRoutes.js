import express from 'express';
import mongoose from 'mongoose';
import Movie from '../models/Movie.js';
import { getMovieById, getMovies, deleteMovie } from '../controllers/movieController.js';
const router = express.Router();

router.get('/', getMovies);
router.get('/:id', getMovieById);

// PUT /api/movies/:id  -> actualización parcial o total
router.put ('/:id', async (req, res)); 
  const { id } = req.params;
  const updateData = { ...req.body };

  // Convertir actorIds a ObjectId si vienen como strings
  if (updateData.actorIds && Array.isArray(updateData.actorIds)) {
    updateData.actorIds = updateData.actorIds.map(a => mongoose.Types.ObjectId(a));
  }

  /*const { id } = req.params;
  const data = req.body;

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
      context: 'query'
    });

    if (!updatedMovie) return res.status(404).json({ message: 'Película no encontrada' });

    res.json({ message: 'Película actualizada', movie: updatedMovie });
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar película', error: err.message });
  }
});

// DELETE /api/movies/:id - Eliminar una película por ID
router.delete("/:id", deleteMovie);

export default router;

  



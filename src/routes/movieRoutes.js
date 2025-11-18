import express from 'express';
import { getMovieById, getMovies, deleteMovie } from '../controllers/movieController.js';
const router = express.Router();

router.get('/', getMovies);
router.get('/:id', getMovieById);

router.put('/:id', async (req, res) => {

  /*const { id } = req.params;
  const data = req.body;

  try {
    // Si quieres que campos anidados se reemplacen, este método funciona.
    // Para operaciones específicas sobre arrays (push/pull) usar $push / $pull con updateOne.
    const updatedMovie = await Movie.findByIdAndUpdate(id, data, { new: true, runValidators: true });

    if (!updatedMovie) return res.status(404).json({ message: 'Película no encontrada' });

    return res.json({ message: 'Película actualizada', movie: updatedMovie });
  } catch (err) {
    return res.status(500).json({ message: 'Error al actualizar película', error: err.message });
  }*/ console.log("Actualizar movie")
});

// DELETE /api/movies/:id - Eliminar una película por ID
router.delete("/:id", deleteMovie);

export default router;

  


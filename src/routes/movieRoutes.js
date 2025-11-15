import express from 'express';
import Movie from '../models/Movie.js';
const router = express.Router();

// GET /api/movies  -> obtener todas las películas
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener películas', error: err.message });
  }
});

// GET /api/movies/:id  -> obtener una película por ID
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener película', error: err.message });
  }
});

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

export default router;



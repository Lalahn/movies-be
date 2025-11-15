import express from 'express';
import { getMovieById, getMovies } from '../controllers/movieController.js';
const router = express.Router();

router.get('/', getMovies);
router.get('/:id', getMovieById);

router.put('/:id', async (req, res) => {

  // Rutas - Solo definen las rutas HTTP y delegan la lógica a los controllers
// GET /api/movies - Obtener todas las películas
router.get("/", movieController.getMovies);

// GET /api/movies/:id - Obtener una película por ID
router.get("/:id", movieController.getMovieById);

// POST /api/movies - Crear una nueva película
router.post("/", movieController.createMovie);

// PUT /api/movies/:id - Actualizar una película por ID
router.put("/:id", movieController.updateMovie);

// DELETE /api/movies/:id - Eliminar una película por ID
router.delete("/:id", movieController.deleteMovie);
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

module.exports = router;
export default router;

  


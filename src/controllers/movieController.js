import Movie from "../models/Movie.js";
// Obtener todas las películas
export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Error al listar películas", error });
  }
};

// Obtener una película por ID
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Película no encontrada" });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener película", error });
  }
};
// Eliminar película
export const deleteMovie = async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Película no encontrada" });
    res.json({ message: "Película eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar película", error });
  }
};

// Actualizar película (PUT)
export const updateMovie = async (req, res) => {
  try {
    const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ message: "Película no encontrada" });
    res.json({ message: "Película actualizada", movie: updated });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar película", error });
  }
};

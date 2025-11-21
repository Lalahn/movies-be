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

// Crear película (POST)
export const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: "Error al crear película", error });
  }
};
import Movie from "../models/Movie.js";
const Movie = require("../models/Movie");

// Crear película
exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({ message: "Error al crear película", error: error.message });
  }
};

// Obtener todas las películas
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Error al listar películas", error });
  }
};

// Obtener una película por ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Película no encontrada" });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener película", error });
  }
};

// Actualizar película
exports.updateMovie = async (req, res) => {
  try {
    const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Película no encontrada" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar película", error });
  }
};

// Eliminar película
exports.deleteMovie = async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Película no encontrada" });
    res.json({ message: "Película eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar película", error });
  }
};

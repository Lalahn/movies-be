import Actor from "../models/Actor.js";

export const getActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.status(200).json(actors);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener actores", error });
  }
};

export const getActorById = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    res.status(200).json(actor);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener actor", error });
  }
};
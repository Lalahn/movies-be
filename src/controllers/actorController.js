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
// Eliminar película
export const deleteActor = async (req, res) => {
  try {
    const deleted = await Actor.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Actor no encontrado" });
    res.json({ message: "Actor eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar actor", error });
  }
};

// Actualizar actor (PUT)
export const updateActor = async (req, res) => {
  try {
    const updated = await Actor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ message: "Actor no encontrado" });
    res.json({ message: "Actor actualizado", actor: updated });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar actor", error });
  }
};


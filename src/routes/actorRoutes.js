import express from 'express';
import { getActorById, getActors } from '../controllers/actorController.js';
const router = express.Router();

router.get('/', getActors);
router.get('/:id', getActorById);

router.put('/:id', async (req, res) => {
  /*const { id } = req.params;
  const data = req.body;

  try {
    const updatedActor = await Actor.findByIdAndUpdate(id, data, { new: true, runValidators: true });

    if (!updatedActor) return res.status(404).json({ message: 'Actor no encontrado' });

    return res.json({ message: 'Actor actualizado', actor: updatedActor });
  } catch (err) {
    return res.status(500).json({ message: 'Error al actualizar actor', error: err.message });
  }*/ console.log("Actualizar actor")
});

export default router;

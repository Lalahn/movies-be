import express from 'express';
import Actor from '../models/Actor.js';
import { getActorById, getActors } from '../controllers/actorController.js';
const router = express.Router();

router.get('/', getActors);
router.get('/:id', getActorById);

// PUT /api/actors/:id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedActor = await Actor.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });

    if (!updatedActor) return res.status(404).json({ message: 'Actor no encontrado' });

    res.json({ message: 'Actor actualizado', actor: updatedActor });
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar actor', error: err.message });
  }
});

export default router;


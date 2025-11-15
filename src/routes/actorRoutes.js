import express from 'express';
import Actor from '../models/Actor.js';
const router = express.Router();

// GET /api/actors  -> obtener todos los actores
router.get('/', async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener actores', error: err.message });
  }
});

// GET /api/actors/:id  -> obtener un actor por ID
router.get('/:id', async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    res.json(actor);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener actor', error: err.message });
  }
});

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

// src/routes/actorRoutes.js
import express from 'express';
import { getActors, getActorById, deleteActor, updateActor } from '../controllers/actorController.js';

const router = express.Router();

router.get('/', getActors);
router.get('/:id', getActorById);

// PUT actualizar actor (si no existe updateActor lo añadimos)
router.put('/:id', updateActor);

router.delete('/:id', deleteActor);

export default router;



// src/routes/actorRoutes.js
import express from 'express';
import { getActors, getActorById, deleteActor, updateActor, createActor } from '../controllers/actorController.js';

const router = express.Router();

router.get('/', getActors);

router.get('/:id', getActorById);

router.put('/:id', updateActor);

router.delete('/:id', deleteActor);

router.post('/', createActor);

export default router;




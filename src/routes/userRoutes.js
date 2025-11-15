import express from 'express';
import User from '../models/User.js';
const router = express.Router();

// GET /api/users  -> obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener usuarios', error: err.message });
  }
});

// GET /api/users/:id  -> obtener un usuario por ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener usuario', error: err.message });
  }
});

// PUT /api/users/:id  -> actualizar usuario por id
router.put('/:id', async (req, res) => {
  /*const { id } = req.params;         // id en la URL
  const data = req.body;             // datos enviados en el cuerpo JSON

  try {
    // findByIdAndUpdate busca por id y aplica los cambios; { new: true } devuelve el documento actualizado
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });

    if (!updatedUser) return res.status(404).json({ message: 'Usuario no encontrado' });

    return res.json({ message: 'Usuario actualizado', user: updatedUser });
  } catch (err) {
    return res.status(500).json({ message: 'Error al actualizar usuario', error: err.message });
  }*/ console.log("Actualizar usuarios")
});

export default router;
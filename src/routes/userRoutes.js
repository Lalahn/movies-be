import express from 'express';
import User from '../models/User.js';

const router = express.Router();
import { getUserById, getUsers } from '../controllers/userController.js';

router.get('/', getUsers);
router.get('/:id', getUserById);

// PUT /api/users/:id  -> actualizar usuario por id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json({ message: 'Usuario actualizado', user: updatedUser });
  } catch (err) {
    return res.status(500).json({ message: 'Error al actualizar usuario', error: err.message });
  }
});

export default router;

import express from 'express';
const router = express.Router();
//import User from '../models/User';

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
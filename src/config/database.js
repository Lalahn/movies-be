import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ Conexión exitosa a MongoDB (MovieDB)'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

export default mongoose;


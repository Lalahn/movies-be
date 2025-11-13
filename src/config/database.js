import mongoose from 'mongoose';


mongoose.connect("mongodb+srv://lalahn:9w31U12qht5cKooW@moviesdb.5feyyzm.mongodb.net/?appName=MoviesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ Conexión exitosa a MongoDB (MovieDB)'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

export default mongoose;

require('dotenv').config(); // Cargar variables de entorno
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    // La URI estará disponible aquí porque la función se llama
    // después de dotenv.config() en index.js
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`✅ Conexión exitosa a MongoDB (MovieDB): ${conn.connection.host}`);

  } catch (err) {
    console.error('❌ Error al conectar a MongoDB:', err.message);
    // Salir del proceso con un error crítico
    process.exit(1);
  }
};

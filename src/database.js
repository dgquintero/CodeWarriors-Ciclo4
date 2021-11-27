
   
import mongoose from "mongoose";

export async function connect () {
  try {
    await mongoose.connect( 'mongodb+srv://gestionproyectos-user:xgKQMdztsKQFFnJbKcMu@cluster0.waqdo.mongodb.net/gestionproyectosDB', {
      useNewUrlParser: true,
    })
    console.log('>>> DB is connected')
  } catch (error) {
    console.log('Something goes wrong!', error)
  }
}

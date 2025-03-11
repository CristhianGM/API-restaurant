import mongoose from "mongoose";

export const dbConnection = async () => {
    try { //mongodb+srv://USUARIO:CONTRASENHA@cluster0.ha5vv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la base de datos');
    }
}
// dbConnection();
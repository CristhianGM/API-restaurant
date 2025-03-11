import express from 'express';
//Validacion cruzada de dominios ¿Buscar?
import cors from 'cors';
import {createServer} from 'http';
//Cuando importamos un archivo siempre se debe de poner la extencion .js
import { userRouter } from '../routes/user.js';
import { dbConnection } from '../database/database.js';
import { categoryRouter } from '../routes/category.js';


export const startServer = () => {
    const app = express();
    //* Manejo de variables en un archivo .env || conexion a la base de datos
    const port = Number(process.env.PORT) || 4000;//funciona con la extencion dotENV

    //1. Configguracion conexion a la base de datos
    const connectToDatabase = async () => {
        await dbConnection();
    }
    connectToDatabase();
    //2. Configuracion de middlewares
    const configureMiddleware = () => {
        //Middleware
        app.use(express.json()); //manipular valores json
        app.use(cors()); //Desde que ips puede ser consumida la api
    }
    configureMiddleware();
    //3. Configuracion de rutas
    const configureRoutes = () => {
        const paths = {
            user: '/api/users',
            category: '/api/categories',
        }
        //TODO: Implementar rutas de usuarios
        app.use(paths.user, userRouter);
        app.use(paths.category, categoryRouter);
        // {} => {console.log("OLI");}
    }
    configureRoutes();
    //4. Configuracion de servidor || ¿Certificados digitales?
    const httpServer = createServer(app);
    //5. Inicializacion del servidor
    const listen = () => {
        httpServer.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    }
    listen();
}

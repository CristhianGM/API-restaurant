//Nombre del archivo debe de ser index.js como sugerencia 
//Estructura de carpetas
import {startServer} from "./server/server.js"; //Importamos la funcion startServer del archivo server.js
import  {config} from "dotenv"; //Importamos la funcion config del paquete dotenv
config(); //Ejecutamos la funcion config para cargar las variables de entorno
startServer(); //Ejecutamos la funcion de startServer

//CONFIGURACION DEL SCRIPT en package.json
// package.json cambiar "type": "module" para que se pueda importar y exportar archivos
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "run": "node index.js",
//     "start": "node --watch index.js"
//   },
// Inicializamos el servidor con el comando npm start


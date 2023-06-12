import Server from "./models/server";
import dotenv from 'dotenv'

//Configuramos las Variables de ambiente
dotenv.config();

const server = new Server();
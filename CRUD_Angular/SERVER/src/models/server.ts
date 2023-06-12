import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routeProducto from '../routes/producto';
import db from '../db/connection';  // importamos coneccion de base de datos 

class Server {
    private app: Application;
    private port: string;

    constructor(){              
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicacion Corriendo en el Puerto ${this.port}`)
            
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response ) => {
            res.json({
                msg: 'API Working'
            })
        })
        this.app.use('/api/productos', routeProducto)
    }

    midlewares() {

        //Parseamos el Body 
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }

    async  dbConnect(){

        await db.authenticate();
        console.log("Base de datos conectado");
        
    }

}

export default Server;
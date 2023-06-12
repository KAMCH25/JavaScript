import express, { Application } from  'express'; 
import routesProducts from '../routes/products';
import routesUser from '../routes/user';
import { Product } from './product';
import { User } from './user';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen(); 
        this.midlewares();  
        this.routes(); 
        this.dbConnect();  
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Aplicacion Corriendo en el Puerto', + this.port );
            
        });
    }

    routes() {
        this.app.use('/api/products', routesProducts);
        this.app.use('/api/users', routesUser);
    }

    midlewares() {
        this.app.use(express.json());
    }

    async dbConnect() {
        try {
            await Product.sync(); 
            await User.sync();                
        }catch (error){
            console.log('unable to connect to the database:', error);            
        };
        
    }
}
export default Server;
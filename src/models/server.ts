import express, {Application, Request, Response} from 'express';
import cors  from 'cors';

import routesProductos from '../routes/producto';
import db from '../db/connection';


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

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req:Request, res:Response) => {
            res.json({
                msg: "API Working"
            })

        })
        this.app.use('/api/productos', routesProductos)
    }

    midlewares() {
        //parsear el body json
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('db conectada');
        } catch(error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }
        
            
    }

}

 
export default Server;
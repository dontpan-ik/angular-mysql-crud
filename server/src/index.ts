import express, {Application} from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import clientRoutes from './routes/clientRoutes';
import suplierRoutes from './routes/suplierRoutes';
import orderRoutes from './routes/orderRoutes';
import deliveryRoutes from './routes/deliveryRoutes';
import orderDetailsRoutes from './routes/orderDetailsRoutes';

class Server{

    public app : Application;

    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
        this.app.use('/api/products',productRoutes);
        this.app.use('/api/users',userRoutes);
        this.app.use('/api/clients',clientRoutes);
        this.app.use('/api/supliers',suplierRoutes);
        this.app.use('/api/orders',orderRoutes);
        this.app.use('/api/order_details',orderDetailsRoutes);
        this.app.use('/api/delivery',deliveryRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on Port ', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();

import { Router } from "express";
import deliveryController from '../controllers/deliveryController'

class DeliveryRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', deliveryController.get_delivery_list);
        this.router.get('/:delivery_id', deliveryController.get_delivery);
        this.router.post('/', deliveryController.create_delivery);
        this.router.put('/:delivery_id',deliveryController.update_delivery);
        this.router.delete('/:delivery_id',deliveryController.delete_delivery);
    }
}

const deliveryRoutes = new DeliveryRoutes();
export default deliveryRoutes.router;
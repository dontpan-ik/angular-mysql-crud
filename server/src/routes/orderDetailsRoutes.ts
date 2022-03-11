import { Router } from "express";
import orderDetailsController from '../controllers/orderDetailsController';

class OrderDetailsRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:order_id', orderDetailsController.get_order_details);
        this.router.post('/', orderDetailsController.create_order_details);
        this.router.put('/:order_id',orderDetailsController.update_order_details);
        this.router.delete('/:order_id',orderDetailsController.delete_order_details);
    }
}

const orderDetailsRoutes = new OrderDetailsRoutes();
export default orderDetailsRoutes.router;
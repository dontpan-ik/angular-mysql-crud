import { Router } from "express";
import orderController from "../controllers/orderController";

class OrderRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', orderController.get_order_list);
        this.router.get('/:order_id', orderController.get_order);
        this.router.post('/', orderController.create_order);
        this.router.put('/:order_id',orderController.update_order);
        this.router.delete('/:order_id',orderController.delete_order);
    }
}

const orderRoutes = new OrderRoutes();
export default orderRoutes.router;
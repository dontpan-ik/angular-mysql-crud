import { Router } from "express";
import userController from "../controllers/userController";

class ProductRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', userController.get_user_list);
        this.router.get('/:user_id', userController.get_user);
        this.router.post('/', userController.create_user);
        this.router.put('/:user_id',userController.update_user);
        this.router.delete('/:user_id',userController.delete_user);
    }
}

const productRoutes = new ProductRoutes();

export default productRoutes.router;
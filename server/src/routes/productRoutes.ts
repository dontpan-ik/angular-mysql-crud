import { Router } from "express";
import productController from "../controllers/productController";


class ProductRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', productController.product_list);
        this.router.get('/:product_id', productController.get_product);
        this.router.post('/',productController.create_product);
        this.router.put('/:product_id',productController.update_product);
        this.router.delete('/:product_id',productController.delete_product);
    }
}

const productRoutes = new ProductRoutes();

export default productRoutes.router;
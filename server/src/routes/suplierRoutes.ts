import { Router } from "express";
import suplierController from "../controllers/suplierController";

class SuplierRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', suplierController.get_suplier_list);
        this.router.get('/:suplier_id', suplierController.get_suplier);
        this.router.post('/', suplierController.create_suplier);
        this.router.put('/:suplier_id',suplierController.update_suplier);
        this.router.delete('/:suplier_id',suplierController.delete_suplier);
    }
}

const suplierRoutes = new SuplierRoutes();

export default suplierRoutes.router;
import { Router } from "express";
import utilController from "../controllers/utilController";

class UtilRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/last', utilController.get_last_id);
        this.router.get('/dataset',utilController.get_dataset);
    }
}

const utilRoutes = new UtilRoutes();

export default utilRoutes.router;
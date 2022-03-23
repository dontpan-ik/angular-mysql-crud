import { Router } from "express";
import utilController from "../controllers/utilController";

class UtilRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/last', utilController.get_last_id);
    }
}

const utilRoutes = new UtilRoutes();

export default utilRoutes.router;
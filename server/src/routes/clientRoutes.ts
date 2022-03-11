import { Router } from "express";
import clientController from "../controllers/clientController";

class ClientRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', clientController.get_client_list);
        this.router.get('/:client_id', clientController.get_client);
        this.router.post('/', clientController.create_client);
        this.router.put('/:client_id',clientController.update_client);
        this.router.delete('/:client_id',clientController.delete_client);
    }
}

const clientRoutes = new ClientRoutes();

export default clientRoutes.router;
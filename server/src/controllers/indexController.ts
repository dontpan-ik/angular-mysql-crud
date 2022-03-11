import {Request, Response} from 'express';

class IndexController{
    public index (req: Request, res: Response){
        //res.send('Kgirl App is Running...');
        res.json({important: 'API is /api/games'});
    }
}
const indexController = new IndexController();
export default indexController;
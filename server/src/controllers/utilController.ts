import {Request, Response} from 'express';

import pool from '../database';

class UtilController{

    public async get_last_id (req: Request, res: Response){
        const client = await pool.query('SELECT client_id FROM clients ORDER BY client_id DESC LIMIT 1;');
        if(client.length > 0){
            return res.json(client[0]);
        };
        res.status(404).json({message:"Not and ID"});
    }

    public async get_dataset (req: Request, res: Response){
        const client = await pool.query('SELECT COUNT(*) AS total FROM products GROUP BY category_id;');
        if(client.length > 0){
            return res.json(client);
        };
        res.status(404).json({message:"Not and ID"});
    }

}

const utilController = new UtilController();
export default utilController;
import {Request, Response} from 'express';

import pool from '../database';

class DeliveryController{
    public async get_delivery_list (req: Request, res: Response){
        const delivery = await pool.query('SELECT * FROM delivery');
        res.json(delivery);
    }

    public async get_delivery (req: Request, res: Response): Promise<any>{
        const {delivery_id} = req.params;
        const delivery = await pool.query('SELECT * FROM delivery WHERE delivery_id = ?',[delivery_id]);
        if(delivery.length > 0){
            return res.json(delivery[0]);
        };
        res.status(404).json({message:"The delivery doesn't exist"});
    }

    public async create_delivery (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO delivery SET ?', [req.body]);
        res.json({message: 'Delivery created'});
    }

    public async delete_delivery (req: Request, res: Response): Promise<void>{
        const { delivery_id } = req.params;  
        await pool.query( 'DELETE FROM delivery WHERE delivery_id = ?', [delivery_id]);
        res.json({message: 'The Delivery was deleted'});
    }

    public async update_delivery (req: Request, res: Response): Promise<void> {
        const { delivery_id } = req.params;
        await pool.query( 'UPDATE delivery set ? WHERE delivery_id = ?', [req.body, delivery_id]);
        res.json({message: 'The Delivery was updated'});            
    }
}

const deliveryController = new DeliveryController();
export default deliveryController;
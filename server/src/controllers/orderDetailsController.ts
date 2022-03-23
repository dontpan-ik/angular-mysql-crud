import {Request, Response} from 'express';

import pool from '../database';

class OrderDetailsController{

    public async get_order_details (req: Request, res: Response): Promise<any>{
        const {order_id} = req.params;
        const order = await pool.query('SELECT * FROM orders o JOIN order_details od ON o.order_id=od.order_id JOIN products p ON od.product_id = p.product_id WHERE o.order_id = ?',[order_id]);
        if(order.length > 0){
            return res.json(order);
        };
        res.status(404).json({message:"The order doesn't exist"});
    }

    public async create_order_details (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO order_details SET ?', [req.body]);
        res.json({message: 'Order created'});
    }

    public async delete_order_details (req: Request, res: Response): Promise<void>{
        const { order_id } = req.params;  
        await pool.query( 'DELETE FROM order_details WHERE order_id = ?', [order_id]);
        res.json({message: 'The Order was deleted'});
    }

    public async update_order_details (req: Request, res: Response): Promise<void> {
        const { order_id } = req.params;
        await pool.query( 'UPDATE order_details set ? WHERE order_id = ?', [req.body, order_id]);
        res.json({message: 'The Order was updated'});            
    }

}

const orderDetailsController = new OrderDetailsController();

export default orderDetailsController;
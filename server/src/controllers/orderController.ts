import {Request, Response} from 'express';

import pool from '../database';

class OrderController{

    public async get_order_list (req: Request, res: Response){
        const orders = await pool.query('SELECT * FROM orders');
        res.json(orders);
    }

    public async get_order (req: Request, res: Response): Promise<any>{
        const {order_id} = req.params;
        const order = await pool.query('SELECT * FROM orders WHERE order_id = ?',[order_id]);
        if(order.length > 0){
            return res.json(order[0]);
        };
        res.status(404).json({message:"The order doesn't exist"});
    }

    public async create_order (req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO orders SET ?', [req.body]);
        res.json({message: 'Order created'});
    }

    public async delete_order (req: Request, res: Response): Promise<void>{
        const { order_id } = req.params;  
        await pool.query( 'DELETE FROM orders WHERE order_id = ?', [order_id]);
        res.json({message: 'The Order was deleted'});
    }

    public async update_order (req: Request, res: Response): Promise<void> {
        const { order_id } = req.params;
        await pool.query( 'UPDATE orders set ? WHERE order_id = ?', [req.body, order_id]);
        res.json({message: 'The Order was updated'});            
    }
}

const orderController = new OrderController();

export default orderController;
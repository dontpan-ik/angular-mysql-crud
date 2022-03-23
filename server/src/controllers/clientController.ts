import {Request, Response} from 'express';

import pool from '../database';

class ClientController{

    public async get_client_list (req: Request, res: Response){
        const clients = await pool.query('SELECT * FROM users u JOIN clients c on u.client_id=c.client_id');
        res.json(clients);
    }

    public async get_client (req: Request, res: Response){
        const {client_id} = req.params;
        const client = await pool.query('SELECT * FROM users u JOIN clients c on u.client_id=c.client_id WHERE u.client_id = ?',[client_id]);
        if(client.length > 0){
            return res.json(client[0]);
        };
        res.status(404).json({message:"The client doesn't exist"});
    }

    public async get_last_id (req: Request, res: Response){
        const client = await pool.query('SELECT * FROM clients ORDER BY client_id DESC LIMIT 1;');
        if(client.length > 0){
            return res.json(client[0]);
        };
        res.status(404).json({message:"Not and ID"});
    }

    public async create_client (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO clients SET ?', [req.body]);
        res.json({message: 'Client was created'});
    }

    public async delete_client (req: Request, res: Response): Promise<void>{
        const { client_id } = req.params;  
        await pool.query( 'DELETE FROM clients WHERE client_id = ?', [client_id]);
        res.json({message: 'The client was deleted'});
    }

    public async update_client (req: Request, res: Response): Promise<void> {
        const { client_id } = req.params;
        await pool.query( 'UPDATE clients set ? WHERE client_id = ?', [req.body, client_id]);
        res.json({message: 'The client was updated'});            
    }

}

const clientController = new ClientController();
export default clientController;
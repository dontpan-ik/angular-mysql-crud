import {Request, Response} from 'express';

import pool from '../database';

class SuplierController{

    public async get_suplier_list (req: Request, res: Response){
        const supliers = await pool.query('SELECT * FROM supliers');
        res.json(supliers);
    }

    public async get_suplier (req: Request, res: Response){
        const {suplier_id} = req.params;
        const suplier = await pool.query('SELECT * FROM supliers WHERE suplier_id = ?',[suplier_id]);
        if(suplier.length > 0){
            return res.json(suplier[0]);
        };
        res.status(404).json({message:"The suplier doesn't exist"});
    }

    public async create_suplier (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO supliers SET ?', [req.body]);
        res.json({message: 'Suplier was created'});
    }

    public async delete_suplier (req: Request, res: Response): Promise<void>{
        const { suplier_id } = req.params;  
        await pool.query( 'DELETE FROM supliers WHERE suplier_id = ?', [suplier_id]);
        res.json({message: 'The suplier was deleted'});
    }

    public async update_suplier (req: Request, res: Response): Promise<void> {
        const { suplier_id } = req.params;
        await pool.query( 'UPDATE supliers set ? WHERE suplier_id = ?', [req.body, suplier_id]);
        res.json({message: 'The suplier was updated'});            
    }
}

const suplierController = new SuplierController();
export default suplierController;
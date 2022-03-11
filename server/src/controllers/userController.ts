import {Request, Response} from 'express';

import pool from '../database';

class UserController{

    public async get_user_list (req: Request, res: Response){
        const users = await pool.query('SELECT * FROM users');
        res.json(users);
    }

    public async get_user (req: Request, res: Response){
        const {user_id} = req.params;
        const user = await pool.query('SELECT * FROM users WHERE user_id = ?',[user_id]);
        if(user.length > 0){
            return res.json(user[0]);
        };
        res.status(404).json({message:"The user doesn't exist"});
    }

    public async create_user (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO users SET ?', [req.body]);
        res.json({message: 'User was created'});
    }

    public async delete_user (req: Request, res: Response): Promise<void>{
        const { user_id } = req.params;  
        await pool.query( 'DELETE FROM users WHERE user_id = ?', [user_id]);
        res.json({message: 'The User was deleted'});
    }

    public async update_user (req: Request, res: Response): Promise<void> {
        const { user_id } = req.params;
        await pool.query( 'UPDATE users set ? WHERE user_id = ?', [req.body, user_id]);
        res.json({message: 'The User was updated'});            
    }

}

const userController = new UserController();
export default userController;
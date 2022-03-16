import {Request, Response} from 'express';

import pool from '../database';

class LoginController{
    public async login (req: Request, res: Response){
        console.log(req.body.email);
        console.log(req.body.password);  
        const email = req.body.email;
        const pass = req.body.password;
        const product = await pool.query('SELECT * FROM users WHERE email = ? AND password = ? ',[email, pass]);
        if(product.length > 0){
            return res.json(product[0].rol_id);
        };
        res.status(404).json({message:"The User doesn't exist"});
    }
}

const loginController = new LoginController();
export default loginController;
require('dotenv').config();
import {Request, Response} from 'express';
const jwt = require("jsonwebtoken");
const token = require('crypto').randomBytes(64).toString('hex');
// '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'

import pool from '../database';

class LoginController{
    public async login (req: Request, res: Response){
         
        const user = req.body.email;
        const pass = req.body.password;
        /*const product = await pool.query('SELECT * FROM users WHERE email = ? AND password = ? ',[email, pass]);
        if(product.length > 0){
            return res.json(product[0].rol_id);
        };
        res.status(404).json({message:"The User doesn't exist"});*/
        const accessToken = jwt.sign({name: user},process.env.ACCESS_TOKEN_SECRET);
        res.json({message:accessToken})
    }
}

const loginController = new LoginController();
export default loginController;
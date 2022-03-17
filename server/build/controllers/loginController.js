"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const jwt = require("jsonwebtoken");
const token = require('crypto').randomBytes(64).toString('hex');
class LoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body.email;
            const pass = req.body.password;
            /*const product = await pool.query('SELECT * FROM users WHERE email = ? AND password = ? ',[email, pass]);
            if(product.length > 0){
                return res.json(product[0].rol_id);
            };
            res.status(404).json({message:"The User doesn't exist"});*/
            const accessToken = jwt.sign({ name: user }, process.env.ACCESS_TOKEN_SECRET);
            res.json({ message: accessToken });
        });
    }
}
const loginController = new LoginController();
exports.default = loginController;

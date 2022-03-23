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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const jwt = require("jsonwebtoken");
//const token = require('crypto').randomBytes(64).toString('hex');
// '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'
const database_1 = __importDefault(require("../database"));
class LoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body.email;
            const pass = req.body.password;
            const product = yield database_1.default.query("SELECT user_id,name,last_name,email,rol_id FROM users WHERE status='ACTIVO' AND email = ? AND password = ? ", [user, pass]);
            if (product.length > 0) {
                const token = jwt.sign({ name: user }, process.env.ACCESS_TOKEN_SECRET);
                return res.json({
                    "user_id": product[0].user_id,
                    "name": product[0].name,
                    "last_name": product[0].last_name,
                    "email": product[0].email,
                    "rol_id": product[0].rol_id,
                    "access_token": token
                });
            }
            ;
            res.status(404).json({ message: "Incorrect User or Password" });
        });
    }
}
const loginController = new LoginController();
exports.default = loginController;

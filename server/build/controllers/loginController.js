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
const database_1 = __importDefault(require("../database"));
class LoginController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body.email);
            console.log(req.body.password);
            const email = req.body.email;
            const pass = req.body.password;
            const product = yield database_1.default.query('SELECT * FROM users WHERE email = ? AND password = ? ', [email, pass]);
            if (product.length > 0) {
                return res.json(product[0].rol_id);
            }
            ;
            res.status(404).json({ message: "The User doesn't exist" });
        });
    }
}
const loginController = new LoginController();
exports.default = loginController;

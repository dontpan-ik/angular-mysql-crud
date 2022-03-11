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
class UserController {
    get_user_list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM users');
            res.json(users);
        });
    }
    get_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = req.params;
            const user = yield database_1.default.query('SELECT * FROM users WHERE user_id = ?', [user_id]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            ;
            res.status(404).json({ message: "The user doesn't exist" });
        });
    }
    create_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO users SET ?', [req.body]);
            res.json({ message: 'User was created' });
        });
    }
    delete_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = req.params;
            yield database_1.default.query('DELETE FROM users WHERE user_id = ?', [user_id]);
            res.json({ message: 'The User was deleted' });
        });
    }
    update_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id } = req.params;
            yield database_1.default.query('UPDATE users set ? WHERE user_id = ?', [req.body, user_id]);
            res.json({ message: 'The User was updated' });
        });
    }
}
const userController = new UserController();
exports.default = userController;

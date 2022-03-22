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
class ClientController {
    get_client_list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clients = yield database_1.default.query('SELECT * FROM users u JOIN clients c on u.client_id=c.client_id');
            res.json(clients);
        });
    }
    get_client(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { client_id } = req.params;
            const client = yield database_1.default.query('SELECT * FROM users u JOIN clients c on u.client_id=c.client_id WHERE u.client_id = ?', [client_id]);
            if (client.length > 0) {
                return res.json(client[0]);
            }
            ;
            res.status(404).json({ message: "The client doesn't exist" });
        });
    }
    create_client(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO clients SET ?', [req.body]);
            res.json({ message: 'Client was created' });
        });
    }
    delete_client(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { client_id } = req.params;
            yield database_1.default.query('DELETE FROM clients WHERE client_id = ?', [client_id]);
            res.json({ message: 'The client was deleted' });
        });
    }
    update_client(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { client_id } = req.params;
            yield database_1.default.query('UPDATE clients set ? WHERE client_id = ?', [req.body, client_id]);
            res.json({ message: 'The client was updated' });
        });
    }
}
const clientController = new ClientController();
exports.default = clientController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = __importDefault(require("../controllers/clientController"));
class ClientRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', clientController_1.default.get_client_list);
        this.router.get('/:client_id', clientController_1.default.get_client);
        this.router.post('/', clientController_1.default.create_client);
        this.router.put('/:client_id', clientController_1.default.update_client);
        this.router.delete('/:client_id', clientController_1.default.delete_client);
    }
}
const clientRoutes = new ClientRoutes();
exports.default = clientRoutes.router;

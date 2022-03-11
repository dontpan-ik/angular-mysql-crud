"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
class ProductRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.default.get_user_list);
        this.router.get('/:user_id', userController_1.default.get_user);
        this.router.post('/', userController_1.default.create_user);
        this.router.put('/:user_id', userController_1.default.update_user);
        this.router.delete('/:user_id', userController_1.default.delete_user);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;

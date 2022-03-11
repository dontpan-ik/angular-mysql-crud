"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = __importDefault(require("../controllers/orderController"));
class OrderRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', orderController_1.default.get_order_list);
        this.router.get('/:order_id', orderController_1.default.get_order);
        this.router.post('/', orderController_1.default.create_order);
        this.router.put('/:order_id', orderController_1.default.update_order);
        this.router.delete('/:order_id', orderController_1.default.delete_order);
    }
}
const orderRoutes = new OrderRoutes();
exports.default = orderRoutes.router;

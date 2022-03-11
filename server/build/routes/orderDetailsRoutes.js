"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderDetailsController_1 = __importDefault(require("../controllers/orderDetailsController"));
class OrderDetailsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:order_id', orderDetailsController_1.default.get_order_details);
        this.router.post('/', orderDetailsController_1.default.create_order_details);
        this.router.put('/:order_id', orderDetailsController_1.default.update_order_details);
        this.router.delete('/:order_id', orderDetailsController_1.default.delete_order_details);
    }
}
const orderDetailsRoutes = new OrderDetailsRoutes();
exports.default = orderDetailsRoutes.router;

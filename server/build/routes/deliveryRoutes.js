"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deliveryController_1 = __importDefault(require("../controllers/deliveryController"));
class DeliveryRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', deliveryController_1.default.get_delivery_list);
        this.router.get('/:delivery_id', deliveryController_1.default.get_delivery);
        this.router.post('/', deliveryController_1.default.create_delivery);
        this.router.put('/:delivery_id', deliveryController_1.default.update_delivery);
        this.router.delete('/:delivery_id', deliveryController_1.default.delete_delivery);
    }
}
const deliveryRoutes = new DeliveryRoutes();
exports.default = deliveryRoutes.router;

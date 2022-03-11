"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
class ProductRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productController_1.default.get_product_list);
        this.router.get('/:product_id', productController_1.default.get_product);
        this.router.post('/', productController_1.default.create_product);
        this.router.put('/:product_id', productController_1.default.update_product);
        this.router.delete('/:product_id', productController_1.default.delete_product);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class ProductRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_1.default.index);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;

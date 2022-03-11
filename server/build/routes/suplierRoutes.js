"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const suplierController_1 = __importDefault(require("../controllers/suplierController"));
class SuplierRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', suplierController_1.default.get_suplier_list);
        this.router.get('/:suplier_id', suplierController_1.default.get_suplier);
        this.router.post('/', suplierController_1.default.create_suplier);
        this.router.put('/:suplier_id', suplierController_1.default.update_suplier);
        this.router.delete('/:suplier_id', suplierController_1.default.delete_suplier);
    }
}
const suplierRoutes = new SuplierRoutes();
exports.default = suplierRoutes.router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utilController_1 = __importDefault(require("../controllers/utilController"));
class UtilRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/last', utilController_1.default.get_last_id);
        this.router.get('/dataset', utilController_1.default.get_dataset);
    }
}
const utilRoutes = new UtilRoutes();
exports.default = utilRoutes.router;

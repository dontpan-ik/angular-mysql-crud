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
class OrderDetailsController {
    get_order_details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order_id } = req.params;
            const order = yield database_1.default.query('SELECT * FROM orders o JOIN order_details od ON o.order_id=od.order_id JOIN products p ON od.product_id = p.product_id WHERE o.order_id = ?', [order_id]);
            if (order.length > 0) {
                return res.json(order);
            }
            ;
            res.status(404).json({ message: "The order doesn't exist" });
        });
    }
    create_order_details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO order_details SET ?', [req.body]);
            res.json({ message: 'Order created' });
        });
    }
    delete_order_details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order_id } = req.params;
            yield database_1.default.query('DELETE FROM order_details WHERE order_id = ?', [order_id]);
            res.json({ message: 'The Order was deleted' });
        });
    }
    update_order_details(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order_id } = req.params;
            yield database_1.default.query('UPDATE order_details set ? WHERE order_id = ?', [req.body, order_id]);
            res.json({ message: 'The Order was updated' });
        });
    }
}
const orderDetailsController = new OrderDetailsController();
exports.default = orderDetailsController;

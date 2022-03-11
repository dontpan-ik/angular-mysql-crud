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
class DeliveryController {
    get_delivery_list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const delivery = yield database_1.default.query('SELECT * FROM delivery');
            res.json(delivery);
        });
    }
    get_delivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { delivery_id } = req.params;
            const delivery = yield database_1.default.query('SELECT * FROM delivery WHERE delivery_id = ?', [delivery_id]);
            if (delivery.length > 0) {
                return res.json(delivery[0]);
            }
            ;
            res.status(404).json({ message: "The delivery doesn't exist" });
        });
    }
    create_delivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO delivery SET ?', [req.body]);
            res.json({ message: 'Delivery created' });
        });
    }
    delete_delivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { delivery_id } = req.params;
            yield database_1.default.query('DELETE FROM delivery WHERE delivery_id = ?', [delivery_id]);
            res.json({ message: 'The Delivery was deleted' });
        });
    }
    update_delivery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { delivery_id } = req.params;
            yield database_1.default.query('UPDATE delivery set ? WHERE delivery_id = ?', [req.body, delivery_id]);
            res.json({ message: 'The Delivery was updated' });
        });
    }
}
const deliveryController = new DeliveryController();
exports.default = deliveryController;

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
class SuplierController {
    get_suplier_list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const supliers = yield database_1.default.query('SELECT * FROM supliers');
            res.json(supliers);
        });
    }
    get_suplier(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { suplier_id } = req.params;
            const suplier = yield database_1.default.query('SELECT * FROM supliers WHERE user_id = ?', [suplier_id]);
            if (suplier.length > 0) {
                return res.json(suplier[0]);
            }
            ;
            res.status(404).json({ message: "The suplier doesn't exist" });
        });
    }
    create_suplier(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO supliers SET ?', [req.body]);
            res.json({ message: 'Suplier was created' });
        });
    }
    delete_suplier(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { suplier_id } = req.params;
            yield database_1.default.query('DELETE FROM supliers WHERE suplier_id = ?', [suplier_id]);
            res.json({ message: 'The suplier was deleted' });
        });
    }
    update_suplier(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { suplier_id } = req.params;
            yield database_1.default.query('UPDATE supliers set ? WHERE suplier_id = ?', [req.body, suplier_id]);
            res.json({ message: 'The suplier was updated' });
        });
    }
}
const suplierController = new SuplierController();
exports.default = suplierController;

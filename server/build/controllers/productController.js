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
class ProductController {
    product_list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield database_1.default.query('SELECT * FROM products');
            res.json(products);
        });
    }
    get_product(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_id } = req.params;
            const product = yield database_1.default.query('SELECT * FROM products WHERE product_id = ?', [product_id]);
            if (product.length > 0) {
                return res.json(product[0]);
            }
            ;
            res.status(404).json({ message: "The product doesn't exist" });
        });
    }
    create_product(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO products SET ?', [req.body]);
            res.json({ message: 'Product created' });
        });
    }
    delete_product(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_id } = req.params;
            yield database_1.default.query('DELETE FROM products WHERE product_id = ?', [product_id]);
            res.json({ message: 'The Product was deleted' });
        });
    }
    update_product(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_id } = req.params;
            yield database_1.default.query('UPDATE products set ? WHERE product_id = ?', [req.body, product_id]);
            res.json({ message: 'The Product was updated' });
        });
    }
}
const productController = new ProductController();
exports.default = productController;

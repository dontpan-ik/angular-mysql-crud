"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        //res.send('Kgirl App is Running...');
        res.json({ important: 'API is /api/games' });
    }
}
const indexController = new IndexController();
exports.default = indexController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const suplierRoutes_1 = __importDefault(require("./routes/suplierRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const deliveryRoutes_1 = __importDefault(require("./routes/deliveryRoutes"));
const orderDetailsRoutes_1 = __importDefault(require("./routes/orderDetailsRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
        this.app.use('/api/products', productRoutes_1.default);
        this.app.use('/api/users', userRoutes_1.default);
        this.app.use('/api/clients', clientRoutes_1.default);
        this.app.use('/api/supliers', suplierRoutes_1.default);
        this.app.use('/api/orders', orderRoutes_1.default);
        this.app.use('/api/order_details', orderDetailsRoutes_1.default);
        this.app.use('/api/delivery', deliveryRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on Port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

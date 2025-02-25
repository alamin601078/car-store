"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const car_router_1 = __importDefault(require("./module/car/car.router"));
const order_router_1 = __importDefault(require("./module/order/order.router"));
// const express = require('express')
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', car_router_1.default);
app.use('/api', order_router_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, require: true },
    // car:{ type: ObjectId , require: true},
    quantity: { type: Number, require: true },
    totalPrice: { type: Number, require: true },
});
const Order = (0, mongoose_1.model)('Order', orderSchema);
exports.default = Order;

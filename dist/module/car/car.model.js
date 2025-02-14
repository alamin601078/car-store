"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    brand: { type: String, require: true },
    model: { type: String, require: true },
    year: { type: Number, require: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    quantity: { type: Number, require: true },
    inStock: { type: Boolean, require: true }
}, {
    timestamps: true
});
const Car = (0, mongoose_1.model)('Car', carSchema);
exports.default = Car;

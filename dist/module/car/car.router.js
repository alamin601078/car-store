"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_controller_1 = require("./car.controller");
const carRouter = (0, express_1.Router)();
carRouter.post('/cars', car_controller_1.carController.createCar);
exports.default = carRouter;

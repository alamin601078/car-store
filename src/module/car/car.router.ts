
import { Router } from "express";
import { carController } from "./car.controller";


const carRouter = Router()

carRouter.post('/cars', carController.createCar)
carRouter.get('/cars', carController.getCars)
carRouter.get(`/cars/:carId`, carController.getCar)
carRouter.patch('/cars/:carId', carController.carupdate)
carRouter.delete('/cars/:carId', carController.deleteCar)

export default carRouter


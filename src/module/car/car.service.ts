import { CarType } from "./car.interface"
import Car from "./car.model"

const createcar = async (payload : CarType )=>{
    const result = await Car.create(payload)
    return result
}

export const carService ={
    createcar
}
import { CarType } from "./car.interface"
import Car from "./car.model"

const createcar = async (payload : CarType )=>{
    const result = await Car.create(payload)
    return result
}
const getcars = async ()=>{
    const result = await Car.find()
    return result
}
const getcar = async (carId )=>{
    const result = await Car.findById(carId)
    return result
}
const cardelete = async (carId )=>{
    const result = await Car.findByIdAndDelete(carId)
    return result
}
const updatecar = async (id: string, data : any) => {
    const result = await Car.findByIdAndUpdate(id, data, {
      new: true,
    })
    return result
}


export const carService ={
    createcar,
    getcars,
    getcar,
    updatecar,
    cardelete,
    
}
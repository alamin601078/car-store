//req and res manages

import { Request, Response } from "express";
import Car from "./car.model";
import { carService } from "./car.service";


const createCar = async (req:Request , res:Response) =>{

    try{
        const payload = req.body

        const result = await carService.createcar(payload)
    
        res.json({
            massages:'Car created successfully',
            status:true,
            data: result,
        })

    }catch(error){
        res.json({
            status: false,
            massage:'something is wrong',
            error
        })
    }
 

}

const getCars = async (req: Request, res: Response) => {
    try {
  
      const result = await carService.getcars()
  
      res.send({
        "message": "Cars retrieved successfully",
        "status": true,
        "data": result,
      })
    } catch (error) {
      res.send({
        success: false,
        message: 'Something went wrong',
        error,
      })
    }
}

const getCar = async (req: Request, res: Response) => {
    try {
      const id = req.params.carId
      const result = await carService.getcar(id)
  
      res.send({
        "message": "Car retrieved successfully",
        "status": true,
        "data": result,
      })
    } catch (error) {
      res.send({
        success: false,
        message: 'Something went wrong',
        error,
      })
    }
}
const deleteCar = async (req: Request, res: Response) => {
  try {
    const id = req.params.carId
    const result = await carService.cardelete(id)

    res.send({
      "message": "Car deleted successfully",
      "status": true,
      "data": result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}
const carupdate = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const body = req.body
    const result = await carService.updatecar(id, body)

    res.send({
      "message": "Car updated successfully",
      "status": true,
      "data": result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

export const  carController = {
    createCar,
    getCars,
    getCar,
    carupdate,
    deleteCar,
}
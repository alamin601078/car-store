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

export const  carController = {
    createCar,
}
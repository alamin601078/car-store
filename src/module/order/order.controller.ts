//req and res manages

import { Request, Response } from "express";
import Order from "./order.model";



const createOrder = async (req:Request , res:Response) =>{
    const payload = req.body

    const result = await Order.create(payload)

    res.json({
        masseges:'Order created successfuly',
        data: result,
    })

}

export const  orderController = {
    createOrder,
}
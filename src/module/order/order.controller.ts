//req and res manages

import { Request, Response } from "express";
import Order from "./order.model";



const createOrder = async (req:Request , res:Response) =>{
    try {
        const payload = req.body

        const result = await Order.create(payload)
        res.send({
            "message": "Order created successfully",
            "status": true,
            "data": result
          })
        } catch (error) {
          res.send({
            success: false,
            message: 'Something went wrong',
            error,
          })
        }
}
const orderReveneu = async (req:Request , res:Response) =>{
   try {
    const result = await Order.aggregate([
        {
          $project: {
            totalPrice: { $multiply: ["$totalPrice", "$quantity"] }
          }
        },
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: "$totalPrice" }
          }
        }
    ]);
    const totalRevenue = result.length > 0 ? result[0].totalRevenue : 0;
    // const payload = req.body

    // const result = await Order.create(payload)

  
    res.send({
        "message": "Revenue calculated successfully",
        "status": true,
        "data": totalRevenue
      })
    } catch (error) {
      res.send({
        success: false,
        message: 'Something went wrong',
        error,
      })
    }
}

export const  orderController = {
    createOrder,
    orderReveneu,
}
import { OrderType } from "./order.interface"
import Order from "./order.model"


const createorder = async (payload : OrderType)=>{
    const result = await Order.create(payload)
    return result
}
const reveneuorder = async ()=>{
    const result = await Order.find()
    return result
}
export const orderService ={
    createorder,
    reveneuorder,
}
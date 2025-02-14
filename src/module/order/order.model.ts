import { model, Schema } from "mongoose";

const orderSchema = new Schema({
    email: { type:String , require:true},
    // car:{ type: ObjectId , require: true},
    quantity: {type:Number , require: true},
    totalPrice: { type:Number , require: true},
    
})

const Order = model('Order',orderSchema)
export default Order
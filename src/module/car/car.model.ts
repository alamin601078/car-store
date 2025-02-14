import { model, Schema } from "mongoose";

const carSchema = new Schema({
    brand: { type:String , require:true},
    model:{ type:String , require: true},
    year: {type:Number , require: true},
    price: { type:Number , require: true},
    category: {type:String,require:true},
    description:{type:String,require:true},
    quantity:{type:Number, require:true},
    inStock:{type:Boolean,require:true}
},{
    timestamps: true
})

const Car = model('Car',carSchema)
export default Car
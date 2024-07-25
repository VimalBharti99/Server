const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
    userid:{
        type:String,
        required:[true,"User Id must Required"],
    },
    productid:{
        type:String,
        required:[true,"Product Id must Required"],
    },
    name:{
        type:String,
        required:[true,"Product Name must Required"],
    },
    brand:{
        type:String,
        required:[true,"Product Brand Name must Required"],
    },
    color:{
        type:String,
        required:[true,"Product Color must Required"],
    },
    size:{
        type:String,
        required:[true,"Product Size must Required"],
    },
    price:{
        type:Number,
        required:[true,"Product Price must Required"],
    },
    qty:{
        type:Number,
        required:[true,"Product Quantity must Required"],
    },
    total:{
        type:Number,
        required:[true,"Product Total must Required"],
    },
    pic:{
        type:String,
        required:[true,"Product Pic must Required"],
    },
    
})

const Cart = new mongoose.model("Cart",CartSchema)
module.exports = Cart
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product Name must Required"],
    },
    maincategory:{
        type:String,
        required:[true,"Product Maincategory must Required"]
    },
    subcategory:{
        type:String,
        required:[true,"Product Subcategory must Required"]
    },
    brand:{
        type:String,
        required:[true,"Product Brand must Required"]
    },
    size:{
        type:String,
        required:[true,"Product Size must Required"]
    },
    color:{
        type:String,
        required:[true,"Product Color must Required"]
    },
    baseprice:{
        type:Number,
        required:[true,"Product Baseprice must Required"]
    },
    discount:{
        type:Number,
        required:[true,"Product Discount must Required"]
    },
    finalprice:{
        type:Number,
        required:[true,"Product Finalprice must Required"]
    },
    stock:{
        type:String,
        default:"In Stock"
    },
    description:{
        type:String,
        default:""
    },
    pic1:{
        type:String,
        default:""
    },
    pic2:{
        type:String,
        default:""
    },
    pic3:{
        type:String,
        default:""
    },
    pic4:{
        type:String,
        default:""
    }
})

const Product = new mongoose.model("Product",ProductSchema)
module.exports = Product
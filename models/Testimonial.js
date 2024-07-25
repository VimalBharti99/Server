const mongoose = require("mongoose")

const TestimonialSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true," Name must Required"],
    },
    profile:{
        type:String,
        required:[true,"Profile must Required"],
    },
    pic:{
        type:String,
        required:[true,"Pic must Required"],
    },
    message:{
        type:String,
        required:[true,"Message must Required"],
    },
})

const Testimonial = new mongoose.model("Testimonial",TestimonialSchema)
module.exports = Testimonial
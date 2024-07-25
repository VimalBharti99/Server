const mongoose = require("mongoose")
 


async function getConnect(){
    await mongoose.connect("mongodb+srv://rafiehayat:Hayat%402580@cluster0.zxmbpqx.mongodb.net/shoppable?retryWrites=true&w=majority")
    console.log("Database is Connected")
}
getConnect()
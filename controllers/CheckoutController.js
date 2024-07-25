const Checkout = require("../models/Checkout")
const User = require("../models/User")
const transporter = require("../mailTransporter")

async function getRecord(req,res){
    try{
        let data = await Checkout.find().sort({_id:-1})
        res.send({status:200,result:"Done",count:data.length,data:data})
    } catch(error) {
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}

async function getUserRecord(req,res){
    try{
        let data = await Checkout.find({userid:req.params.userid}).sort({_id:-1})
        res.send({status:200,result:"Done",count:data.length,data:data})
    } catch(error) {
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}

async function createRecord(req,res){
     try{
        const data = new Checkout(req.body)
        data.date = new Date()
        await data.save()
       res.send({status:200,result:"Done",data:data})

       const user = await User.findOne({_id:data.userid})
       mailOptions = {
        from: process.env.MAIL_SENDER,
        to: user.email,
        subject:"Order Is Placed : Team Kifayati",
        text:`
                Hello ${user.name}
                Thanks To shop With Us.
                Your Order Has Been Placed
                Now You Can track Your Order In Profile Section
                Team : Kifayti
               `
    }
    transporter.sendMail(mailOptions,((error)=>{
        if(error){
            console.log(error)
            //res.send({ status: 401, result: "failed", message: "Invalid Email Address"})
        }
    }))
     } catch (error){
         if(error.errors.userid)
        res.send({status:400,result:"failed",message:error.errors.userid.message})
        else if(error.errors.subtotal)
        res.send({status:400,result:"failed",message:error.errors.subtotal.message})
        else if(error.errors.shipping)
        res.send({status:400,result:"failed",message:error.errors.shipping.message})
        else if(error.errors.total)
        res.send({status:400,result:"failed",message:error.errors.total.message})
        else
        res.send({status:500,result:"failed",message:"Internal Server Error"})
     }
}

async function getSingleRecord(req,res){
    try{
        let data = await Checkout.findOne({_id:req.params._id})
        if(data)
        res.send({status:200,result:"Done",data:data})
        else
        res.send({status:404,result:"Result",message:"Record not Found"})
    } catch(error) {
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}

async function updateRecord(req,res){
    try{
        let data = await Checkout.findOne({_id:req.params._id})
        if(data){
        data.orderstatus = req.body.orderstatus??data.orderstatus
        data.paymentmode = req.body.paymentmode??data.paymentmode
        data.paymentstatus = req.body.paymentstatus??data.paymentstatus
        data.rppid = req.body.rppid??data.rppid
        await data.save()
        res.send({status:200,result:"Done",message:"Record Updated"})
       } 
        else
        res.send({status:404,result:"Result",message:"Record Not Found"})
    } catch(error) {
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}
async function deleteRecord(req,res){
    try{
        let data = await Checkout.findOne({_id:req.params._id})
        if(data){
        await data.deleteOne()
        res.send({status:200,result:"Done",message:"Record Deleted"})
        }
        else
        res.send({status:404,result:"Result",message:"Record not Found"})
    } catch(error) {
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}


module.exports = {
    getRecord:getRecord,
    getUserRecord:getUserRecord,
    createRecord:createRecord,
    getSingleRecord:getSingleRecord,
    updateRecord:updateRecord,
    deleteRecord:deleteRecord,
}
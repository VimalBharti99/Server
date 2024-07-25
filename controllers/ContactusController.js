const Contactus = require("../models/Contactus")

async function getRecord(req,res){
    try{
        let data = await Contactus.find().sort({_id:-1})
        res.send({status:200,result:"Done",count:data.length,data:data})
    } catch(error) {
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}

async function createRecord(req,res){
     try{
        const data = new Contactus(req.body)
        data.date = new Date()
        await data.save()
       res.send({status:200,result:"Done",data:data})
     } catch (error){
       if(error.errors.name)
        res.send({status:400,result:"failed",message:error.errors.name.message})
        else if(error.errors.email)
        res.send({status:400,result:"failed",message:error.errors.email.message})
        else if(error.errors.phone)
        res.send({status:400,result:"failed",message:error.errors.phone.message})
        else if(error.errors.subject)
        res.send({status:400,result:"failed",message:error.errors.subject.message})
        else if(error.errors.message)
        res.send({status:400,result:"failed",message:error.errors.message.message})
        else
        res.send({status:500,result:"failed",message:"Internal Server Error"})
     }
}

async function getSingleRecord(req,res){
    try{
        let data = await Contactus.findOne({_id:req.params._id})
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
        let data = await Contactus.findOne({_id:req.params._id})
        if(data){
        data.active = req.body.active??data.active
        await data.save()
        res.send({status:200,result:"Done",message:"Record Updated"})
       } 
        else
        res.send({status:404,result:"Result",message:"Record Not Found"})
    } catch(error) {
        if(error.keyValue)
        res.send({status:400,result:"failed",message:"Contactus Name Already Exist"})
        else
        res.send({status:500,result:"failed",message:"Internal Server Error"})
    }
}
async function deleteRecord(req,res){
    try{
        let data = await Contactus.findOne({_id:req.params._id})
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
    createRecord:createRecord,
    getSingleRecord:getSingleRecord,
    updateRecord:updateRecord,
    deleteRecord:deleteRecord,
}
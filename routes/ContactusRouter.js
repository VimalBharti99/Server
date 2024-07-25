const contactusRouter = require("express").Router()
const {getRecord, createRecord, getSingleRecord, updateRecord, deleteRecord} = require("../controllers/ContactusController")
const { verifyAdmin } = require("../verification")

contactusRouter.get("/",verifyAdmin,getRecord)
contactusRouter.post("/",createRecord)
contactusRouter.get("/:_id",verifyAdmin,getSingleRecord)
contactusRouter.put("/:_id",verifyAdmin,updateRecord)
contactusRouter.delete("/:_id",verifyAdmin,deleteRecord)

module.exports = contactusRouter
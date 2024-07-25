const checkoutRouter = require("express").Router()
const {getRecord, createRecord, updateRecord, getSingleRecord, deleteRecord, getUserRecord} = require("../controllers/CheckoutController")
const { verifyBuyer , verifyAdmin } = require("../verification")

checkoutRouter.get("/",verifyAdmin,getRecord)
checkoutRouter.get("/user/:userid",verifyBuyer,getUserRecord)
checkoutRouter.get("/:_id",verifyAdmin,getSingleRecord)
checkoutRouter.post("/",verifyBuyer,createRecord)
checkoutRouter.put("/:_id",verifyAdmin,updateRecord)
checkoutRouter.delete("/:_id",verifyAdmin,deleteRecord)

module.exports = checkoutRouter
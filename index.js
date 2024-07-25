const express = require("express");
const cors = require("cors")
// const mongoose = require("mongoose")
require("dotenv").config()

const router = require("./routes/router")
const app = express();

app.use(express.json())
app.use(cors())
app.use("/api",router)
app.set(express.static("./public"))
app.use("/public",express.static("public"))

// async function getConnect(){
//     await mongoose.connect(process.env.MONGO_URL)
//     console.log("Database is Connected")
// }

// getConnect()

require("./dbConnect");

app.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});

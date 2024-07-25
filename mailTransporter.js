const nodemailer = require ("nodemailer")

const trasnporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PAASSWORD

    }
})
module.exports = trasnporter
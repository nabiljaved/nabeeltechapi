const nodemailer = require('nodemailer')
const { Router } = require('express');
const router = Router();
const dotenv = require('dotenv');
var express = require('express')
var app = express()
dotenv.config();



router.get('/', (req, res) => {
    res.json({"result":"true"})
})

router.post('/',  (req, res) => {

    let email = req.body.email
    let subject = req.body.subject
    let message = req.body.message
    let name = req.body.name

    const transport = nodemailer.createTransport({
        service:'gmail',
        auth : {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })

    const mailOptions = {
        from: email,
        to: 'nabeeltech360@gmail.com',
        subject: `Message from ${email}: ${subject}`,
        text:`${message} \n\n  from ${email}  \n\n Subject : ${subject} \\name ${name}`
    }

    transport.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error)
            res.json({"error":"true"})
            
        }else{
            console.log('Email Sent : '+info.response)
            res.json({"error":"false"})
            Send.sendToSender(email, subject, message)
        }
    })

})

class Send{
    static sendToSender(email, subject, message){
        console.log(email, subject ,message)
    }

    
}



module.exports = router;

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
var transport = {
    host: 'smtp.gmail.com',
    port: 587, //I used 465 after reading some of the Google Documentation
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}
var transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});
router.post('/send', (req, res, next) => {
    var name = req.body.name 
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message}`
console.log (req)
    var mail = {
        from: name,
        to: 'nickm264@gmail.com',//
        subject: 'New Message from Website',
        text: content
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({ status: 'fail' })
        } else {
            res.json({ status: 'success' })
        }
    })
})
const emailServer = express() 
emailServer.use(cors())
emailServer.use(express.json())
emailServer.use('/', router)
emailServer.listen(8080)
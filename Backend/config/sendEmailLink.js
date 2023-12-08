const { createTransport } = require('nodemailer');
require("dotenv").config();
const sendEmailLink = async(email,url)=>{
    try{

        const transporter = createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            auth: {
                user: process.env.USER,
                pass:process.env.KEY,
            },
        });
        
        
        const mailOptions = {
            from: process.env.USER,
            to: email,
            subject: 'Reset Your Password',
            text: `Please click on the link bellow to reset your password :<br> ${url}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
    })

    }catch(error){
        return error
    }
}

module.exports=sendEmailLink
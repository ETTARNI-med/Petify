const { createTransport } = require('nodemailer');
require("dotenv").config();
const sendEmail = async(email,code)=>{
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
            subject: 'Please verify Your account in petify',
            text: `Please copie this code to your verification page :<br> ${code}`
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

module.exports=sendEmail
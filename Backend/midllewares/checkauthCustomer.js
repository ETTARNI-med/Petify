const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
const Customer = require('../models/CustomerSchema')
const cookieParser = require('cookie-parser');
cookieParser();
const checkauthCustomer = async (req, res, next) => {
    
    const token = req.cookies.token;
    console.log(token)
    if (!token){
        return res.status(403).json({
            "error" : [
                {   "status": 403,
                    "message": "you don't have enough privilege" }]
       })
    }
   try {
    let customer = await JWT.verify(token, JWT_SECRET)
    console.log(token)
    // req.user to check if user ADMIN && MANAGER 
    
 req.id = customer.findId;
 req.hashedCode = customer.hashedCode;

    const customerExist = await Customer.findOne({ _id:  req.id });
    if (customerExist) {

      next();
    }
    else{
        return res.status(403).json({
            error: [
              {
                status: 403,
                message: "you don't have enough privilege",
              },
            ],
          });
    }
   } catch (error) {
    return res.status(403).json({
        "error" : [
            {
                "status": 403,
                "message": "you don't have enough privilege"
            }
        ]
    })
   }
}

module.exports = checkauthCustomer
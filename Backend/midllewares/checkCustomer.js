const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
const Customer = require('../models/CustomerSchema')
const checkCustomer = async (req, res, next) => {
        
    const token = req.header('x-auth-token') || req.cookies.token;
    console.log("token ",token)
    if (!token){
        return res.status(401).json({
            "error" : [
                {   "status": 401,
                    "message": "Missed token" }]
       })
    }
   try {
    let customer = await JWT.verify(token, JWT_SECRET)
    // req.user to check if user ADMIN && MANAGER 
    
 req.id = customer.findId;

    const customerExist = await Customer.findOne({ _id:  req.id });
    if (customerExist) {
      next();
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

module.exports = checkCustomer
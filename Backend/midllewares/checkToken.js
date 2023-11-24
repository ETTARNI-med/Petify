const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
const Customer = require('../models/CustomerSchema')

const checkToken = async (req, res, next) => {
    try {   
    const {token} =  req.params;

    if (!token){
        return res.status(401).json({
            "error" : [
                {   "status": 401,
                    "message": "invalid link" }]
       })
    }

    console.log(token)
    let customer = await JWT.verify(token, JWT_SECRET)
    // req.user to check if user ADMIN && MANAGER 

 req.id = customer.findId;

    const findCustomer = await Customer.findOne({ _id:  req.id });
    if (findCustomer) {
        
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

module.exports = checkToken
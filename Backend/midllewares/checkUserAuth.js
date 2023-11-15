const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

const checkIfUser = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token){
        return res.status(403).json({
            "error" : [
                {   "status": 403,
                    "message": "you don't have enough privilege" }]
       })
    }
   try {
    let user = await JWT.verify(token, JWT_SECRET)
    // req.user to check if user ADMIN && MANAGER 
    req.user = user.findRole;
    console.log(req.user);
    next()
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

module.exports = checkIfUser
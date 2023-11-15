const JWT = require ('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
//const UserModel = require('../models/Users')

const checkIfAdmin = async(req, res,next) => {

    const token = req.header('x-auth-token')
    
    if ( !token) {
        return res.status(403).json({
            "error" : [
                {
                    "status": 403,
                    "message": "No Token Found"
                  }
            ]
        })
    }
    
    try {
        
        let user = await JWT.verify(token ,JWT_SECRET )
        //console.log(user.findRole)
        //req.user = user.findRole
        
        //consol.log(req.user)
        //Check If The User is An Admin to Create a New User
        if (user.findRole = "1"){

            next()
        } else { 
            return res.status(403).json({
                "error" : 
                    {
                        "status": 403,
                        "message": "you don't have enough privilege 1333", 
                                                
                      }
            })
        }
              
    } catch (error) {
        return res.status(400).json({
            "error" : 
                {
                    "status": 400,
                    "message": "Bad Request"
                  }
            
        })
    }
}

module.exports = checkIfAdmin

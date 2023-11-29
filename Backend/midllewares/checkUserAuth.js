const JWT = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const User = require("../models/Users");
const checkIfUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).json({
      error: [{ status: 403, message: "you don't have enough privilege" }],
    });
  }
  try {
    let user = await JWT.verify(token, JWT_SECRET);
    // req.user to check if user ADMIN && MANAGER
    req.user = user.findRole;
    req.userId = user.findId;

    const userExist = await User.findOne({ _id: req.userId });
    if (userExist) {
      next();
    }
    else{
        return res.status(403).json({
            error: [
              {
                status: 401,
                message: "you don't have enough privilege",
              },
            ],
          });
    }
  } catch (error) {
    return res.status(403).json({
      error: [
        {
          status: 403,
          message: "you don't have enough privilege",
        },
      ],
    });
  }
};

module.exports = checkIfUser;

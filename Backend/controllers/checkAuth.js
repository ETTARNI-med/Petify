//check register customer

const customer = require ('../models/CustomerSchema');

const registerCustomer = async(req,res)=>{
    const email = req.body.email;
    const username = req.body.username;
    console.log(req.body)
   try {
    const findCustomer = await customer.findOne({email})
    if (!findCustomer) {
      const newCustomer = await customer.create(req.body)

      res.status(200).json(req.body);

    } else {
        console.log(findCustomer);
        res.json({
            msg: " This customer Already exists",
            status: false 
        })
    }  

   } catch (error) {
        console.log(error) ;
   }
    
    
}

module.exports = registerCustomer;
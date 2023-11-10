const Product = require("../models/Product");

const asyncHandler = require("express-async-handler");

//create a new product
const createNewProduct = asyncHandler(async (req, res) => {
  try {
    const { body } = req;
    const productName = req.body.product_name;
    const findProduct = await Product.findOne({ productName });
    if (!findProduct) {
      const newProduct = await Product.create(body);
      res.status(200).json(newProduct);
    }
  } catch (error) {
    throw new Error(error);
  }
});


// get all products
const allProducts = asyncHandler(async(req,res)=>{
  
})
module.exports = { createNewProduct ,allProducts};
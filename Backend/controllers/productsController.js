const Product = require("../models/Product");

const asyncHandler = require("express-async-handler");

//create a new product
const createNewProduct = asyncHandler(async (req, res) => {
  const { body } = req;
  const productName = req.body.product_name;
  try {
    const findProduct = await Product.findOne({ productName });
    if (!findProduct) {
      const newProduct = await Product.create(body);
      res.status(200).json(newProduct);
    }
  } catch (error) {
    throw new Error(error);
  }
});

//search for product
const searchForProducts = asyncHandler(async (req, res) => {
  let { query } = req.query;
  if (typeof query === "undefined") {
    try {
      const getProducts = await Product.find();
      res.json(getProducts);
    } catch (error) {
      throw new Error(error);
    }
  } else {
    try {
      query = query.toLocaleLowerCase();
      const regex = new RegExp(query, "i");

      // Find the customer based on the search query
      const products = await Product.find({
        $or: [
          { product_name: { $regex: regex } },
          { short_description: { $regex: regex } },
          { long_description: { $regex: regex } },
        ],
      });

      if (!products) {
        return res.status(404).json({ message: "products not found" });
      }

      res.json({
        products,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
});

//get product by id
const getProductsById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const ProductById = await Product.findOne({ _id:id });
    res.json(ProductById);
  } catch (error) {
    throw new Error(error);
  }
});

//products update

const updateProducts = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const updateProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

//delete product

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: id });
    if (deletedProduct) {
      res.json(`${deletedProduct.product_name} is deleted.`);
    } else {
      res.status(404).json(`Product with the entered ID is not found.`);
    }
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createNewProduct,
  updateProducts,
  getProductsById,
  searchForProducts,
  deleteProduct,
};

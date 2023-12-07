const Product = require("../models/Product");

const asyncHandler = require("express-async-handler");
const subcategories = require("../routes/subcategories");
const SubCategory = require("../models/SubCategory");

//create a new product
const createNewProduct = asyncHandler(async (req, res) => {
  const productName = req.body.product_name;
  const productSku = req.body.sku;
  const findProduct = await Product.findOne({ product_name: productName });
  const findSku = await Product.findOne({ sku: productSku });
  try {
    if (!findProduct && !findSku) {
      const newProduct = await Product.create(req.body);
      res.status(200).json(newProduct);
    } else if (findProduct) {
      res.status(401).json("this Product name already existed");
    } else {
      res.status(401).json("this sku is already existed");
    }
  } catch (error) {
    throw new Error(error);
  }
});

//search for product
const searchForProducts = asyncHandler(async (req, res) => {
  //list all products
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
      //list the products that we're quering
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
  const ProductById = await Product.findOne({ _id: id });
  try {
    if (ProductById) {
      res.json(ProductById);
    } else {
      res.status(401).json("the products does not exist");
    }
  } catch (error) {
    throw new Error(error);
  }
});

//products update
const updateProducts = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const productName = req.body.product_name;
  const productSku = req.body.sku;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(401).json("This id does not exist");
    }

    const existingProductByName = await Product.findOne({
      product_name: productName,
      _id: { $ne: id }, // Exclude the current product from the search
    });

    if (existingProductByName) {
      return res.status(401).json("This name already exists");
    }

    const existingProductBySku = await Product.findOne({
      sku: productSku,
      _id: { $ne: id }, // Exclude the current product from the search
    });

    if (existingProductBySku) {
      return res.status(401).json("The SKU already exists");
    }

    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

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

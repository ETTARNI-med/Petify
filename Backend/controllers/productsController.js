const Product = require("../models/Product");

const asyncHandler = require("express-async-handler");
const subcategories = require("../routes/subcategories");
const SubCategory = require("../models/SubCategory");
const upload = require("../midllewares/multerMiddleware");
//const multer = require('multer')
const path = require ('path')
//create a new product
// const createNewProduct = asyncHandler(async (req, res) => {
//   const { body } = req;
//   const productName = req.body.product_name;
//   const productSku = req.body.sku;
//   const findProduct = await Product.findOne({ product_name: productName });
//   const findSku = await Product.findOne({ sku: productSku });
//   try {
//     if (!findProduct && !findSku) {
//       const newProduct = await Product.create(body);
//       res.status(200).json(newProduct);
//     } else if (findProduct) {
//       res.status(401).json("this Product name already existed");
//     } else {
//       res.status(401).json("this sku is already existed");
//     }
//   } catch (error) {
//     throw new Error(error);
//   }
// });

//************TEST*************** */
const createNewProduct = asyncHandler(async(req, res) => {
  // const { body } = req;
  // const productName = req.body.product_name;
  // const productSku = req.body.sku;
  
  //---------------------------------
  //console.log(upload.getDestination)
  const productSku = req.body.productSku;
  const productImage = req.file.path;
  const productName = req.body.productName;
  //const subCateg = req.body.subcategory
  const shortDescrip = req.body.shortDescrip;
  const longDescrip = req.body.longDescrip;
  const price = req.body.price;
  const discountPr = req.body.discountPr;
  console.log(productSku);
  console.log(productImage);
  console.log(productName);


  const findProduct = await Product.findOne({ product_name: productName });
  const findSku = await Product.findOne({ sku: productSku });
  try {
    if (!findProduct && !findSku) {
            const newProduct = await Product.create({
              sku: productSku,
              product_image: productImage,
              product_name: productName,
              short_description: shortDescrip,
              long_description: longDescrip,
              price: price,
              discount_price: discountPr,
            });
            res.status(200).json(newProduct);
            console.log(newProduct)
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
  const findByName = await Product.findOne({ product_name: productName });
  const findBySku = await Product.findOne({ sku: productSku });
  const product = await Product.findById({ _id: id });
  try {
    if (product && !findByName && !findBySku) {
      const updateProduct = await Product.findByIdAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.json(updateProduct);
    } else if (!product) {
      res.status(401).json("this id does not exist");
    } else if (findByName) {
      res.status(401).json("this name already existed");
    } else {
      res.status(401).json("the Sku already existed");
    }
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

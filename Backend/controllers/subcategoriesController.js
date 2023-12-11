const { get } = require("mongoose");
const SubCategory = require("../models/SubCategory");
const asyncHandler = require("express-async-handler");

//create a New Subcategory
const createNewSubcategory = asyncHandler(async (req, res) => {
  const { subcategory_name, category_id } = req.body;
  try {
    const findSubcategory = await SubCategory.findOne({
      subcategory_name,
      category_id,
    });
    if (!findSubcategory) {
      const createSubcategory = await SubCategory.create(req.body);
      res.status(201).json(createSubcategory);
    } else {
      res.json("this name already existed");
    }
  } catch (error) {
    throw new Error(error);
  }
});
//get all Subcategories

const allSubcategories = asyncHandler(async (req, res) => {
  let { query } = req.query;

  if (typeof query === "undefined") {
    try {
      const getAll = await SubCategory.find();
      res.json(getAll);
    } catch (error) {
      throw new Error(error);
    }
  } else {
    const regex = new RegExp(query, "i");
    query = query.toLocaleLowerCase();
    try {
      const getSubcategorie = await SubCategory.find({
        $or: [
          { subcategory_name: { $regex: regex } },
          { category_id: { $regex: regex } },
        ],
      });
      if (getSubcategorie) {
        res.json(getSubcategorie);
      } else {
        res.json("Subcategory does not exist");
      }
    } catch (error) {
      throw new Error(error);
    }
  }
});

//get Subcategorie By Id
const getSubcategorieById = asyncHandler(async (req, res) => {
  const {id} = req.params;
  try {
    const findId = await SubCategory.find({category_id:id });
    if (findId) {
      res.status(201).json(findId);
    } else {
      res.json("ID not found");
    }
  } catch (error) {
    throw new Error(error);
  }
});

//update Subcategory
const updateSubcategory = asyncHandler(async (req, res) => {
  try {
    const { subcategory_name, category_id, active, subcategory_image } =
      req.body;
    const { id } = req.params;

    const subcategory = await SubCategory.findById(id);

    if (!subcategory) {
      return res.json("Subcategory ID not found");
    }

    const existingSubcategory = await SubCategory.findOne({
      subcategory_name,
      category_id: subcategory.category_id,
    });

    if (existingSubcategory && existingSubcategory._id.toString() !== id) {
      return res.json(
        "Subcategory name is already occupied by another subcategory"
      );
    }

    subcategory.subcategory_name = subcategory_name;
    subcategory.category_id = category_id;
    subcategory.active = active;
    subcategory.subcategory_image = subcategory_image;

    const updatedSubcategory = await subcategory.save();

    res.json(updatedSubcategory);
  } catch (error) {
    throw new Error(error);
  }
});

//delete the Subcategory
const deleteSubcategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const findId = await SubCategory.findById({ _id: id });
  try {
    if (findId) {
      const deleteSubcategorie = await SubCategory.findByIdAndDelete({
        _id: id,
      });
      res.json("subcategory successfully deleted");
    } else {
      res.json(" subcategory id not found");
    }
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createNewSubcategory,
  allSubcategories,
  getSubcategorieById,
  updateSubcategory,
  deleteSubcategory,
};

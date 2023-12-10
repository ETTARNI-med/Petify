const { get } = require("mongoose");
const SubCategory = require("../models/SubCategory");
const asyncHandler = require("express-async-handler");

//create a New Subcategorie
const createNewSubcategorie = asyncHandler(async (req, res) => {
  const Name = req.body.subcategory_name;
  const findName = await SubCategory.findOne({ subcategory_name: Name });
  try {
    if (!findName) {
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
  const id = req.params.id;
  try {
    const findId = await SubCategory.findById({ _id: id });
    if (findId) {
      res.status(201).json(findId);
    } else {
      res.json("ID not found");
    }
  } catch (error) {
    throw new Error(error);
  }
});

//update Subcategorie

const updateSubcategorie = asyncHandler(async (req, res) => {
  try {
    const {subcategory_name} = req.body;
    const {id} = req.params;
    const findId = await SubCategory.findOne({_id:id});
    const findName = await SubCategory.findOne({ subcategory_name });

    if (findId && !findName) {
      const updateByid = await SubCategory.findByIdAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.json(updateByid);
    } else if  (!findId){
      res.json("subcategorie id not found");
    }else  {
      res.json("subcategorie name is already existed");
    } 
  } catch (error) {
    throw new Error(error);
  }
});
//delete the Subcategorie
const deleteSubcategorie = asyncHandler(async(req,res)=>{
  const id = req.params.id;
  const findId = await SubCategory.findById({_id:id});
  try{
if(findId){
  const deleteSubcategorie = await SubCategory.findByIdAndDelete({_id:id});
  res.json("subcategory successfully deleted")
}else{
  res.json(" subcategory id not found");
}
  }catch(error){
    throw new Error(error);
  }
})
module.exports = {
  createNewSubcategorie,
  allSubcategories,
  getSubcategorieById,
  updateSubcategorie,deleteSubcategorie
};

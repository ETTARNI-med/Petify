const Category = require("../models/Category");
const asyncHandler = require("express-async-handler");

//create New Categorie function

const createNewCategorie = asyncHandler(async (req, res) => {
  const Categoriename = req.body.category_name;
  const categorie = await Category.findOne({ category_name:Categoriename });
 
  try {
    if (!categorie) {
      const createCategorie = await Category.create(req.body);
      res.status(201).json("categorie successfuly created");
    } else {
      res.json(" categorie  already exist");
    }
  } catch (error) {
    throw new Error(error);
  }
});

//list all categories and search for a categorie

const searchForCategories = asyncHandler(async (req, res) => {
  let { query } = req.query;
  if (typeof query === "undefined") {
    //list all categories
    try {
      const getCategorie = await Category.find();
      res.json(getCategorie);
    } catch (error) {
      throw new Error(error);
    }
  } else {
    try {
      query = query.toLocaleLowerCase();
      const regex = new RegExp(query, "i");

      // Find the customer based on the search query
      const categories = await Category.find({
        category_name: { $regex: regex },
      });

      if (!categories) {
        return res.status(404).json({ message: "Categorie not found" });
      }

      res.json({
        categories,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
});

// get Categorie By Id function

const getCategorieById = asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const getcategorie = await Category.findById(id);
try{
    if(getcategorie){
        res.status(201).json(getcategorie);
    }else{
        res.json("the categorie does not exist");
    }
}catch(error){
    throw new Error(error);
}
})

//update categorie function
    const updateCategorie = asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const categorieName=req.body.category_name;
<<<<<<< Updated upstream
    console.log(categorieName)
    const checkCategorie = await Category.findById({_id:id});
    try{
        if(checkCategorie && !categorieName){
=======
    const checkCategorieName = await Category.findOne({category_name:categorieName})
    const checkCategorie = await Category.findById({_id:id});
   
    try{
        if(checkCategorie && !checkCategorieName){
>>>>>>> Stashed changes
            const updateCategorie = await Category.findByIdAndUpdate({_id:id},req.body,{new:true});
            res.status(201).json("successfully updated");
        } else if (!checkCategorie){
            res.json("id does not exist")
<<<<<<< Updated upstream
        }else if(categorieName){
=======
        }else if(checkCategorieName){
>>>>>>> Stashed changes
            res.json("the categorie name already exist")
        }
    } catch(error){
        throw new Error(error);
    }
})

//delete categorie

const deleteCategorie =asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const findCategorie = await Category.findById({_id:id});
    try{
        if(findCategorie){
            const deleteCategorie = await Category.findByIdAndDelete(id);
        res.json("successfully deleted");
        } else{
            res.json("id does not exist")
        }
    }catch(error){
        throw new Error(error);
    }

}
) 

module.exports = {
  createNewCategorie,
  searchForCategories,
  getCategorieById,updateCategorie,
  deleteCategorie
};

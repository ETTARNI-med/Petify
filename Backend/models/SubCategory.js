const mongoose = require( "mongoose");

//To Import the Category ID
const ObjectId = mongoose.Types.ObjectId;

const SubCategorySchema = new mongoose.Schema(
  {
   
    subcategory_name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    category_id: {
      type: ObjectId,
      ref: "Category",
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: false,
  }
);

const SubCategory = mongoose.model("SubCategory", SubCategorySchema);

module.exports = SubCategory;

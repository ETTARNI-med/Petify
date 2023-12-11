const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema(
  {
    subcategory_image: {
      type: String,
      default: "",
    },
    subcategory_name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    category_id: {
      type: String,
      require: true,
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

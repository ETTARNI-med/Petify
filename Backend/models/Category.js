const mongoose =require( "mongoose");
const CategorySchema = new mongoose.Schema(
  {
 
    category_name: {
      type: String,
      require: true,
      unique: true,
      min: 3,
      max: 20,
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

const Category = mongoose.model("Category", CategorySchema);

module.exports= Category;

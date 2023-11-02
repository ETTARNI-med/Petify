import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    _id: Schema.Types.UUID,
    category_name: {
      type: String,
      require: true,
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

export default Category;

import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    _id: Schema.Types.UUID,
    first_name: {
      type: String,
      require: true,
      min: 2,
      max: 27,
    },
    last_name: {
      type: String,
      require: true,
      min: 2,
      max: 27,
    },
    email: {
      type: String,
      require: true,
      min: 11,
      max: 60,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 8,
    },
    creation_date: {
        type: Date,
        required: true,
      },
      last_login: {
        type: Date,
        description: "User's last login date",
      },
    valid_account: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "creation_date",
      updatedAt: "last_login",
    },
  }
);

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;

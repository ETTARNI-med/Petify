const mongoose =require( "mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    
    first_name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 27,
      description: "User's first name",
    },
    last_name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 27,
      description: "User's last name",
    },
    email: {
      type: String,
      required: true,
      minlength: 11,
      maxlength: 60,
      unique: true,
      description: "User's email",
    },
    role: {
      type: String,
      required: true,
      default: "1",
      description: "User's role",
    },
    user_name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 27,
      description: "User's username",
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      description: "User's password",
    },
    creation_date: {
      type: Date,
      
      description: "User's creation date",
    },
    user_image: {
      type: String,
    },
    last_login: {
      type: Date,
      description: "User's last login date",
    },
    last_update: {
      type: Date,
      description: "User's update date",
    },
    active: {
      type: Boolean,
      description: "User's active status",
    },
  },
  {
    timestamps: {
      createdAt: "creation_date",
      updatedAt: "last_update",
    },
  }
);

UserSchema.pre("save", function (next) {
  if (this.isModified("last_login")) {
    this.last_update = Date.now();
  }
  next();
});

UserSchema.virtual("updatedAt").get(function () {
  return this.updatedAt;
});

const User = mongoose.model("User", UserSchema);

module.exports=  User;
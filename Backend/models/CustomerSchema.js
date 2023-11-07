const mongoose = require('mongoose');
// Declare the schema of the customer
const CustomerSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            require: true,
            unique: true,
        },

        first_name:{
            type: String,
            require: true,
            min: 2,
            max: 27,
        },
        last_name:{
            type: String,
            require: true,
            min: 2,
            max: 27,
        },

        email: {
            type: String,
            require: true,
            unique: true,
            min: 11 ,
            max: 60,
        },

        password:{
            type: String,
            require: true,
            min: 8,
        },

        lastLogin: {
            type: Date,
            default: Date.now
         },

        // picture_path:{
        //     type:String,
        //     default:"",
        // },
        // sold: {
        //     type: Schema.Types.Decimal128,
        //     default: "0.00",
        // }, 
        // valid_account:{
        //     type:Boolean,
        //     default: false,
        // },

        // active:{
        //     type: Boolean,
        //     default: false,
        // },

        // role: {
                
        // },

        // timestamps: {
        //     createAt: "creation_date",
        //     updateAt: "last_login",
        // },
    }
)



const Customer = mongoose.model("Customers",CustomerSchema, "Customer")

module.exports = Customer
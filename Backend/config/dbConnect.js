const mongoose = require('mongoose')

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URI)
        console.log(" DB Connected Succesfully")
    } catch (error) {
        console.log(error);
    } 
}

module.exports= dbConnect;
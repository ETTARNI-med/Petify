const express = require('express');

// Creating the appplication
const app = express();
const dbConnect = require('./config/dbConnect');
const Dotenv = require('dotenv').config(); 
const PORT = process.env.PORT || 5700;
const customerRoutes = require('./routes/customerRoutes')
const bodyPaser = require('body-parser');
const { errorHandler ,notFound} = require('./midllewares/errorHandler');
dbConnect();

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended: false}))

// Midllewares s

app.use(express.json());
app.use('/v1', customerRoutes);
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, ()=>{
    console.log(PORT);
})
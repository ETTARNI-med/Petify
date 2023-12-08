const express = require('express');

// Creating the appplication
const app = express();
const dbConnect = require('./config/dbConnect');
const Dotenv = require('dotenv').config(); 
const PORT = process.env.PORT || 5700;
const cookieParser = require('cookie-parser');
const routers = require('./routes/router')
const bodyPaser = require('body-parser');
const session = require('express-session');
const { errorHandler ,notFound} = require('./midllewares/errorHandler');
dbConnect();
const cors= require('cors')

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended: false}))

// Midllewares s
app.use(cors());
app.use(cookieParser());
app.use(session({
    secret:"dedwdw",
    resave: false,
    saveUninitialized: true,
  }))
app.use(express.json());
app.use('/v1',routers);

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, ()=>{
    console.log(PORT);
})

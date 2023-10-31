//Importing packages
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotEnv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import bodyParser from "body-parser";
import mongoose from "mongoose";

import router from './routes/router.js'
//Setting up some configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotEnv.config();

//Creating our application
const app = express();

//Calling middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());





//Routes
app.use("/v1",router);

//Connecting to mongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //Listening to the port for in/out coming request
    const port = process.env.PORT || 3045;
    app.listen(port, () => {
      console.log("We are listening into http://localhost:" + port);
    });
  })
  .catch((e) => console.error(e));

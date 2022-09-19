import dotenv from 'dotenv';
import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import {connectDB} from './bdd/connect.js'
// ==========
// App initialization
// ==========

dotenv.config();
const {MONGO_URI, APP_PORT,APP_LOCALHOST } = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ==========
// App 
// ==========
const app = express();

// ==========
// Pug 
// ==========

app.set("view engine", "pug");

// ==========
// App routers
// ==========

// app.use("/", route);

// ==========
// App start
// ==========

const start = async() => {
    try {
        await connectDB(MONGO_URI);
        app.listen(APP_PORT, () => {
            console.log(`App listening at http://${APP_LOCALHOST}:${APP_PORT}`);
          });
    }catch(err){
        console.log(err)
    }
}

start();

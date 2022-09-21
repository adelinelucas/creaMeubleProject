import dotenv from 'dotenv';
import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import {connectDB} from './bdd/connect.js';
import authRouter from "./routes/userRouter.js";
import meubleRouter from "./routes/meublesRouter.js";
import adminRouter from "./routes/adminRouter.js";
import {auth} from './middleware/auth.js';
import session from "express-session";
import cors from 'cors';

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
app.use(express.json());

// ==========
// Cors
// ==========
app.use(cors({
    origin: process.env.ORIGIN,
  }));
// ouverture d'une session
app.use(session({
    name: 'simple',
    secret: 'simple',
    resave: false,
    saveUninitialized: true
  }))

// ==========
// App routers
// ==========

app.use("/auth", authRouter);
app.use('/meubles', meubleRouter);
app.use('/admin',auth, adminRouter);
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

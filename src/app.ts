import express from 'express';
import path from "path";
import router from './router'; 

// 1- ENTRANCE

const app = express();
console.log("__dirname:",__dirname);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 2- SESSIONS

// 3- VIEWS
app.set("views", path.join (__dirname, "views"));
app.set("views engine", "ejs");

// 4- ROUTERS
app.use("/", router);          // Middleware Design pattern

export default app;   // module.exports bilan bir xil
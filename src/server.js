import express from "express";
import configViewEngine from "./configs/ViewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();

const app = express();
const POST = process.env.POST || 8080;

configViewEngine(app);

initWebRoutes(app);


app.listen(POST, () => {
    console.log(">>> running on the port = " + POST);
});
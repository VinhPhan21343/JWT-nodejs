import express from "express";
import configViewEngine from "./configs/ViewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();
const app = express();


configViewEngine(app);

initWebRoutes(app);

const POST = process.env.POST || 8080;
app.listen(POST, () => {
    console.log(">>> running on the port = " + POST);
});
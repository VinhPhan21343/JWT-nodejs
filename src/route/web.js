import express from "express";
import HomeController from "../controller/HomeController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", HomeController.handleViewHome)
    router.get("/User", HomeController.handleViewUser)
    // router.get("/", (req, res) => {
    //     return res.send("hello world");
    // })

    return app.use("/", router);
}

export default initWebRoutes;   
import express from "express";
import router from "./router.js";

export default () => {
    var app = express();
    app.use(express.json());
    app.use(router);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        res.status(404).json({ message: "Not Found" })
    });

    // error handler
    app.use((error, req, res, next) => {
        return res.status(500).json({ error: error.toString() });
    });

    return app;
};
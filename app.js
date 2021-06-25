import dotenv from "dotenv";
import express from "./config/express.js";
import mongo from "./config/mongo.js"

if (process.env.NODE_ENV == "development") {
    const env_load = dotenv.config();
    if (env_load.error) {
        throw new Error(env_load.error.message);
    }
}

(async () => {
    await mongo();
    var app = express();

    app.listen(process.env.PORT || 3000, () => {
        console.log("Minha aplicação express.");
    });
})()
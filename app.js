import dotenv from "dotenv";
import express from "./config/express.js";
import mongo from "./config/mongo.js"

dotenv.config();

mongo();
var app = express();

app.listen(3000, () => {
    console.log("Minha aplicação express.");
});
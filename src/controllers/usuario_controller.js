import { Router } from "express";
import mongoose from "mongoose";

/**
 * 
 * @param {Router} router 
 */
export default function (router) {
    router.get("/usuario/:id", (req, res) => {
        res.json({ nome: "José da Silva", data_nasc: "2002-05-04" });
    });

    router.post("/usuario", async (req, res) => {
        const Usuario = mongoose.model('Usuario', { nome: String });
        const user = new Usuario(req.body);
        res.json(await user.save());
    });

    router.put("/usuario/:id", (req, res) => {
        res.json({ nome: "José da Silva", data_nasc: "2002-05-04" });
    });

    router.delete("/usuario/:id", (req, res) => {
        res.json({ nome: "José da Silva", data_nasc: "2002-05-04" });
    });
}
import { Router } from "express";
import UsuarioService from "../services/UsuarioService.js";

/**
 * 
 * @param {Router} router 
 */
export default function (router) {
    router.get("/usuario/:id", async (req, res, next) => {
        try {
            const obj = await UsuarioService.findById(req.params.id);
            if (obj) {
                res.json(obj);
            } else {
                res.status(404).send();
            }
        } catch (error) {
            next(error);
        }
    });

    router.post("/usuario", async (req, res, next) => {
        try {
            res.json(await UsuarioService.inserir(req.body));
        } catch (error) {
            next(error);
        }
    });

    router.put("/usuario/:id", async (req, res, next) => {
        try {
            if (await UsuarioService.alterar(req.params.id, req.body)) {
                res.status(204).send();
            } else {
                res.status(404).send();
            }
        } catch (error) {
            next(error);
        }
    });

    router.delete("/usuario/:id", async (req, res, next) => {
        try {
            if (await UsuarioService.deletar(req.params.id)) {
                res.status(204).send();
            } else {
                res.status(404).send();
            }
        } catch (error) {
            next(error);
        }
    });
}
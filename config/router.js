import { Router } from "express";
import fs from "fs";
import path from 'path';

const baseDir = `${path.resolve()}/src/controllers`;
var router = Router();

(async () => {
    for (var file of fs.readdirSync(baseDir)) {
        if (file == "index.js") return;
        var name = file.substr(0, file.indexOf('.'));
        const module = await import(`${baseDir}/${name}.js`);
        module.default(router);
    }
})();

export default router;

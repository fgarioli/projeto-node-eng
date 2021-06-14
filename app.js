import express from "express";

var app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<html><body>Olá Mundo Express</body></html>");
});

app.get("/teste", (req, res) => {
    res.send("<html><body>Teste</body></html>");
});

app.get("/usuario", (req, res) => {
    res.json({nome: "José da Silva", data_nasc: "2002-05-04"});
});

app.post("/usuario", (req, res) => {
    req.body.endereco = "Endereço de Teste";
    res.json(req.body);
});

app.listen(3000, () => {
    console.log("Minha aplicação express.");
});
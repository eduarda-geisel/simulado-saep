const entradaModel = require("../models/entradaModel");

async function cadastrar(req, res) {

    const { produto_id, quantidade } = req.body;

    if (quantidade <= 0) {
        return res.status(400).json({
            mensagem: "Quantidade inválida."
        });
    }

    await entradaModel.cadastrar(produto_id, quantidade);

    res.json({
        mensagem: "Entrada registrada."
    });

}

module.exports = {
    cadastrar
};
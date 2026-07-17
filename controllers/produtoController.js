const produtoModel = require("../models/produtoModel");

async function listar(req, res) {

    const produtos = await produtoModel.listar();

    res.json(produtos);

}

async function cadastrar(req, res) {

    const {
        nome,
        categoria,
        unidade_medida,
        valor_unitario,
        quantidade_estoque
    } = req.body;

    if (!nome || !categoria || !unidade_medida) {
        return res.status(400).json({
            mensagem: "Preencha todos os campos."
        });
    }

    if (valor_unitario < 0) {
        return res.status(400).json({
            mensagem: "Valor inválido."
        });
    }

    if (quantidade_estoque < 0) {
        return res.status(400).json({
            mensagem: "Quantidade inválida."
        });
    }

    await produtoModel.cadastrar(req.body);

    res.status(201).json({
        mensagem: "Produto cadastrado."
    });

}

module.exports = {
    listar,
    cadastrar
};
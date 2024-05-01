const express = require('express');
const app = express();
let estoque = {};

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque[id] = { nome, qtd: parseInt(qtd) };
    res.send(`Produto ${nome} adicionado com sucesso.`);
});

app.get('/listar', (req, res) => {
    res.send(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    if (estoque[id]) {
        delete estoque[id];
        res.send(`Produto removido com sucesso.`);
    } else {
        res.send('Produto não encontrado.');
    }
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    if (estoque[id]) {
        estoque[id].qtd = parseInt(qtd);
        res.send(`Quantidade do produto atualizada com sucesso.`);
    } else {
        res.send('Produto não encontrado.');
    }
});

const PORT = 8080;
app.listen(PORT, function (){
    console.log('app rodando na porta ' + PORT);
});
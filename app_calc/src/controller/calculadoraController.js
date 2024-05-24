const calc = require('../calculadora/calculadora');

function index(req, res){
    let erro_valor = req.query.erro_valor;
    res.render('index.html', {erro_valor});
}

function resultado(req, res){
    let v1 = Number(req.body.v1);
    let v2 = Number(req.body.v2);
    let op = req.body.op;
    let v3;
    let nmOp = calc.nomeOperador(op);

    if(isNaN(v1) || isNaN(v2)){
        res.redirect('/?erro_valor=true');
    }
    else{
        v3 = calc.calcular(v1, v2, op);
        res.render('resultado.html', {v1, v2, v3, nmOp});
    }
}

module.exports = {
    index,
    resultado
}
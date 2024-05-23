function calcular(v1, v2, op){
    let resultado;
    switch (op){
        case '+':
            resultado = v1 + v2;
            break;
        case '-':
            resultado = v1 - v2;
            break;
        case '*':
            resultado = v1 * v2;
            break;
        case '/':
            resultado = v1 / v2;
            break;
    }
    return resultado;
}

function nomeOperador(op){
    let nmOperador;
    switch (op){
        case '+':
            resultado = "adição";
            break;
        case '-':
            resultado = "subtração";
            break;
        case '*':
            resultado = "multiplicação";
            break;
        case '/':
            resultado = "divisão";
            break;
    }
    return nmOperador;
}

module.exports = {
    calcular,
    nomeOperador
}
function somar (a,b) {
    return Number(a) + Number(b);
}
function subtrair (a,b) {
    return Number(a) - Number(b);
}
function multiplicar (a,b) {
    return Number(a) * Number(b);
}
function dividir (a,b) {
    return Number(a) / Number(b);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};
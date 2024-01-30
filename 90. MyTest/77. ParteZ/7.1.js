// ------------------ 7.1 ------------------
// Exportado

function calcularAreaCirculo(radio){
    var area = Math.PI * Math.pow(radio, 2);
    return area;
}

module.exports = calcularAreaCirculo;
// console.log(calcularAreaCirculo(5));    // 78.53981633974483
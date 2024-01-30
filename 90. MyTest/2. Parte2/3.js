// ------------------ N ------------------
// NaN y conversiones numéricas: Escribe una función que tome un argumento. 
// Si el argumento es un número, devuélvelo. Si no es un número, intenta convertirlo 
// a un número y devuélvelo. Si no se puede convertir, devuelve NaN.
function convertirANumero(valor) {
    // Tu código aquí
    let numero = Number(valor);
    if(isNaN(numero)){
        return NaN
    } else {
        return numero;
    }
}

console.log(convertirANumero("5"));     // 5
console.log(convertirANumero("2.1"));   // 2
console.log(convertirANumero(5));       // 5
console.log(convertirANumero("Hola"));  // NaN

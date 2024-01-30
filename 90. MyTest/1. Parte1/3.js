// ------------------ N ------------------
// Escribe una función que tome un número como argumento y devuelva su factorial.

function factorial(valor){
    var repuesta = 1;
    for (let i = 1; i <= valor; i++){
        repuesta *= i;
    }
    return repuesta;
};

console.log("Factorial de " + factorial(5));
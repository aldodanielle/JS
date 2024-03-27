// ------------------ N ------------------
// Number y operaciones avanzadas: Escribe una función que tome un número como argumento, 
// lo eleve al cuadrado y luego tome la raíz cuadrada. Debería devolver el mismo número.

function cuadradoYRaiz(n) {
    let cuadrado = Math.pow(n, 2);  //se agregan los 2 datos y NO la operacion entre ellos
    let raiz = Math.sqrt(cuadrado);
    return raiz;
}


const ingresaNumero = Number("Hola");
ingresaNumero.constructor.name;     // number

console.log(cuadradoYRaiz(5));  // 5 -> primero el cuadro de 5 (25), despues toma el 25 y le saca la raiz (5)




const ingresaNumero2 = Number("Hola");
console.log(ingresaNumero2);        // NaN



// ------------------ 2 ------------------
// Number y operaciones avanzadas: Escribe una función que tome un número como argumento, 
// lo incremente en 10 y luego lo divida por 2.
function incremento(num) {
    // Tu código aquí
    return (num * 10)/2;
}

console.log(incremento(10));    //50
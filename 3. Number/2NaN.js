// ------------------ Not is a Numero (no es un numero) ------------------
// Es usado para representar valores numericos a pesar de su significado

// Indeterminación matemática:          Por ejemplo, 0 / 0.
// Valores imposibles:                  Por ejemplo, 4 - 'a', imposible restar una letra a un número.
// Operaciones con NaN:                 Por ejemplo, NaN + 4, el primer operando es NaN.

NaN == NaN;         // false (El valor no es el mismo)
NaN === NaN;        // false (Ni el valor, ni el tipo de dato es el mismo)

Number.isNaN(NaN);  // true (Forma correcta de comprobarlo)
Number.isNaN(5);    // false (5 es un número, no es un NaN)
Number.isNaN("A");  // false ("A" es un string, no es un NaN)


const number = NaN;
typeof number;              // "number"
number.constructor.name;    // "Number"

console.log(number);
console.log(typeof number);

Boolean(NaN);   // false (convertimos a booleano)
String(NaN);    // "NaN" (convertimos a texto)
Number(NaN);    // NaN (Ya estaba en contexto numérico)

console.log(isNaN(NaN)); // true
console.log(isNaN(123)); // false


// ------------------ Ejemplo ------------------
function calcularRaizCuadrada(numero) { //tenemos nuestra funcion raiz
    return Math.sqrt(numero);           // Math.sqrt funcion que retorna la raiz de cualquier numero
}

var entradaUsuario = "16";   // Aqui se introduce lo que deseemos
//var entradaUsuario = "hola"; //no es un numero por lo cual entraria al if(isNaN(...
var resultado = calcularRaizCuadrada(entradaUsuario);

console.log(resultado); // Imprime: NaN
if (isNaN(resultado)) { // se compara si es numero o no y se manda el resultado
    console.log("Error: La entrada debe ser un número.");
}


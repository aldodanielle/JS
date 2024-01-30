// ------------------ Operadores Avanzados ------------------
//      Constructor	            Descripción
// new Number(number)	        Crea un objeto numérico a partir del número number pasado por parámetro.
// number	                    Simplemente, el número en cuestión. Notación preferida.
// number se utiliza para convertir cierto tipo de cadenas o datos a numero

// Notación literal (preferida)
const number = 4;
const decimal = 15.8;
const legibleNumber = 5_000_000;

// Notación con objetos (evitar)
const number = new Number(4);
const decimal = new Number(15.8);
const letter = new Number("A");

var a = new Number("123"); // a === 123 es false
var b = Number("123"); // b === 123 es true


// 5_000_000 === 5000000;    // true
const incorrectNumber = 482598752875287528533; // 482598752875287540000 (Diferente)
const bigNumber = 482598752875287528533n;      // 482598752875287528533n (El mismo)

console.log(incorrectNumber);
console.log(bigNumber);




// ------------------ Comprovacion numerica ------------------
// Método	                            Descripción
// Number.isFinite(number)	        Comprueba si number es un número finito.
// Number.isInteger(number)	        Comprueba si number es un número entero.
// Number.isSafeInteger(number)	    Comprueba si number es un número seguro.

// ¿Número finito?
Number.isFinite(42);          // true
Number.isFinite(551.3);       // true
Number.isFinite(Infinity);    // false, es infinito

// ¿Número entero?
Number.isInteger(5);          // true
Number.isInteger(4.6);        // false, es decimal

// ¿Número seguro?
Number.isSafeInteger(1e15);   // true (valor en la franja verde)
Number.isSafeInteger(1e16);   // false (valor en la franja amarilla)

1e309 === Infinity;           // true
Number.isSafeInteger(1e309);  // false (valor en la franja roja)



// ------------------ Representacion numerica ------------------
// para colocar con exponente o con notacion de punta fija
// Notación exponencial
(1.25).toExponential(0);     // "1e+0"
(1.25).toExponential(1);     // "1.3e+0"
(1.25).toExponential(2);     // "1.25e+0"
(1.25).toExponential(3);     // "1.250e+0"

// Notación punto fijo
(1.25).toFixed(0);           // "1"
(1.25).toFixed(1);           // "1.3"
(1.25).toFixed(2);           // "1.25"
(1.25).toFixed(3);           // "1.250"

// Cambiando precisión
(523.75).toPrecision(1);      // "5e+2"
(523.75).toPrecision(2);      // "5.2e+2"
(523.75).toPrecision(3);      // "524"
(523.75).toPrecision(4);      // "523.8"
(523.75).toPrecision(5);      // "523.75"




// ------------------ Ejemplo ------------------
// Crear un número a partir de una cadena de texto
var numero = Number("123"); // numero === 123 es true

// Crear un número a partir de un booleano
var numeroVerdadero = Number(true); // numeroVerdadero === 1 es true
var numeroFalso = Number(false); // numeroFalso === 0 es true

// Crear un número a partir de una cadena de texto no numérica
var noNumero = Number("Hola"); // noNumero es NaN




let entradaUsuario = "13"; //con "cualquierDato" nos da como resultado NaN
let resultado = Number.parseInt(entradaUsuario);
console.log(resultado);
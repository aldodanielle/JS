// ------------------ Exportar modulos ------------------


//      Forma	                Descripción
// export ...	                Declara un elemento o dato, a la vez que lo añade al módulo de exportación.
// export { name }	            Añade el elemento name al módulo de exportación.
// export { name as newName }	Añade el elemento name al módulo de exportación con el nombre newName.
// export { n1, n2, n3... }	    Añade los elementos indicados ( n1 , n2 , n3 ...) al módulo de exportación.
// export * from "./file.js"	Añade todos los elementos del módulo de file.js al módulo de exportación.
// export default ...	        Declara un elemento y lo añade como módulo de exportación por defecto.



// no se puede exportar dentro de funciones, bucles o contextos especificos

// facil de uso PERO podrias ser facil perderse en el codigo
export let numero = 100;                // Se añade la variable number al módulo
export const hello = () => "Hola";      // Se añade la función hello al módulo
export const goodbye = () => "Adios";
export class CodeBlock { };             // Se añade la clase vacía CodeBlock al módulo

// -------> Exportacion post-declaracion <-------
// primeo declaramos y despues exportamos
let number = 100;
const hola = () => "Hello";
const despedida = () => "Good Bye";
class BloqueCodigo { };

export { number };                   // Se crea un módulo y se añade number
export { hola, despedida as bye};    // Se añade saludar y despedir al módulo
export { hola as saludo };           // Se añade otroNombre al módulo


// -------> exportar de manera GLOBAL <-------
let nombre = "Daniel";
const edad = 25;
const saludo = () => "Hola";
const despedidas = () => "Adios"
class CodeBlock { };

export {
    nombre,
    edad, 
    saludo as hi,
    despedidas as goodbye
};


// -------> exportarcion externa <-------
// CASO 1: Exporta TODO lo exportado en el fichero exportacion.js (abs, min, max, random)
export * from "./exportacion.js";
import { Propiedad1, Propiedad2 } from './nombreDelArchivo';


// CASO 2: Exporta SOLO abs, min y max del fichero exportacion.js
export { abs, min, max } from "./exportacion.js";
export { valor1, valor2, valor3 } from "./exportacion.js";

import auto from "./exportacion.js";

console.log(auto.motor);

// CASO 3: Exporta todo lo exportado en el fichero exportacion.js en un objeto con nombre
export const newNumber = 42;
export * as math from "./exportacion.js";


// -------> Exportación por defecto <-------
export const age = 25;       // Declaración y exportación
//export default "Manz";       // Exportación por defecto

const modelo = 2020;
const marca = "Ford";

// export default modelo;
// export default marca;       // solo se puede exportar un valor y no multiples 

// para resolver eso 
export { modelo, marca };
export default { modelo, marca};



// -----------------> Exportación CommonJS <-----------------
const age = 34;
const lastname = "Lara";

module.exports = {
    age,
    lastname
};

console.log(lastname);
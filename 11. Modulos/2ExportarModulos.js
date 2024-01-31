// ------------------ Exportar Modulos ------------------
// el modulo de Exportacion pone a disposicion otros ficheros, datos o 
// codigo que se tiene en el fichero actual


//      Forma	                Descripción
// export ...	                Declara un elemento o dato, a la vez que lo añade al módulo de exportación.
// export { name }	            Añade el elemento name al módulo de exportación.
// export { name as newName }	Añade el elemento name al módulo de exportación con el nombre newName.
// export { n1, n2, n3... }	    Añade los elementos indicados ( n1 , n2 , n3 ...) al módulo de exportación.
// export * from "./file.js"	Añade todos los elementos del módulo de file.js al módulo de exportación.
// export default ...	        Declara un elemento y lo añade como módulo de exportación por defecto.


// -----------------> Declaracion y Exportacion <-----------------
// es la foma mas facil de exportar por que solo se añade la palabra export a la izquierda

export let number = 10;             // se añade una variable al modulo
export const hello = () => '¡Hola!';// se añade una funcion flecha al modulo
export class blockCode {};          // se añade una clase al modulo


// -----------------> Exportacion Post-Declaracion <-----------------
// en NodeJS normalmente esta declaracion se hace al final del codigo 
// resulta ser mas facil
let number = 11;
const hi = () => '¡Hola!';
const goodbye = () => '¡Adios!';
class blockCode { };

export { number };              // se crea el modulo y se añade number
export { hi, goodbye as bye };  // se añade hi, goobye y se RENOMBRA
export { hi as saludo};         // se añade hi y se RENOMBRA
export { blockCode };           // se añade blockCode

// -------> Otro Metodo <-------
// existe otro metodo en el cual se usa solo un export para todos 
// y de esta manera es mejor ver los datos que se exportaron 

// se crea el objeto y se añaden las propiedades 
export{
//    number, // solo se exporta una vez 
    hi,
    goodbye as despedida,
    hi as saludo
};


// -----------------> Exportacion externa <-----------------
// menos frecuente pero se puede usar en algunas ocaciones

// Caso 1: Se exporta todo lo qu tenga el fichero 
export * from './math.js'

// Caso 2: solo lo selecionado
// export min, max, random from './math.js';

// Caso 3: Exporta todo el fichero en un solo objeto
export const numero = 44;
export * as math from './math.js';



// -----------------> Exportacion por Defecto <-----------------
// solo puede exsistir una exportacion por modulo por defecto
export const number4 = 4;   // declaracion y exportacion
const name = 'Aldo';
export default 'Daniel';    // exportacion por defecto
// export default name;     // otra forma de hacer una exportacion

// export default 1;   // error solo puede a ver una exportacion por modulo (archivo)




// -----------------> Exportacion CommonJS <-----------------
// este tipo de exportacion es mas usada cuando estamos trabajando con NodeJS

// no es soportada (funciona) por navegadores de forma nativa
// No se aconseja utilizarlo 
let edad = 25;
const nombre = 'Don Camaron';

module.exports = {
    edad,
    nombre
};
// -------> Sub <-------

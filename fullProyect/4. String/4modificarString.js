// ------------------ Modificar y subString ------------------
//      Método	                  Descripción
// .toLowerCase()	        Devuelve el  transformado a minúsculas.
// .toUpperCase()	        Devuelve el  transformado a mayúsculas.
// .padStart(size, text) 	Devuelve el  rellenando el inicio con text hasta llegar al tamaño size.
// .padEnd(size, text) 	    Devuelve el  rellenando el final con text hasta llegar al tamaño size.
// .trimStart() 	        Devuelve el  eliminando espacios a la izquierda del texto.
// .trimEnd() 	            Devuelve el  eliminando espacios a la derecha del texto.
// .trim()	                Devuelve el  eliminando espacios a la izquierda y derecha del texto.

const frase = "Los perros son el mejor amigo del Hombre";

console.log(frase.toLowerCase());       //los perros son...
console.log(frase.toUpperCase());       //LOS PERROS SON...

// -------> Capitalizar <-------
// colocar en mayuscula la primera letra de una frase
const toCapitalize = (frase) => (frase[0]).toUpperCase() + frase.substring(1)
console.log(toCapitalize(frase));       //Los perros son..

// cada palabras inicia con Mayuscula
const toCapitalizeEveryWord = (frase) => {
    return frase.split(" ")                     // Separamos en un array cada palabra
    .map(word => toCapitalize (word))           // Aplicamos el capitalizar a cada elemento
    .join(" ");                                 // Lo volvemos a unir en un string
}

console.log(toCapitalizeEveryWord(frase));

// -------> relleno de string <-------
const sueldo = "15";

console.log(sueldo.padStart(3, "0"));       //015
console.log(sueldo.padStart(4, "0"));       //0015

console.log(sueldo.padEnd(4, "0"));         //1500
console.log(sueldo.padEnd(3, "0"));         //150



// -------> Eliminar espacios sobrantes <-------
const mensaje = "  Mama: si pagaste la luz?      "

console.log(mensaje.trim());            //elimina la todos los espacio
console.log(mensaje.trimStart());       //elimina los espacios al inicio
console.log(mensaje.trimEnd());         //elimina los espacios al final


// -------> concatenar <-------
const nombre = "Daniel";

// metodo concat
console.log(nombre.concat("i", "to"));      //Danielito
console.log(nombre.concat(2, 5));           //Daniel25
console.log(nombre.concat((2 + 5)));        //Daniel9

// usando operador +
console.log(nombre + "i" + "to");           //Danielito
console.log(nombre + 2 + 5 );               //Daniel25
console.log(nombre + (2 + 5));              //Daniel7


// -------> Join <-------
const fisrtname = "Daniel";
const secondname = "Lara";

console.log(fisrtname, join, secondname);


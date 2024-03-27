// ------------------  Alternativas para crear arrays ------------------
//          Método	                        Descripción
// ARRAY Array.from(obj) 	            Intenta convertir el obj en un array.
// ARRAY Array.from(obj, fmap) 	        Idem, pero ejecuta la función fmap por cada elemento. Equivalente a .map()
// ARRAY Array.from({ length:size})	    Crea un array a partir de un  de tamaño size, relleno de 
// ARRAY .concat(e1, e2, e3...)	        Devuelve los elementos pasados por parámetro concatenados al final del array.
// STRING .join(sep)	                Une los elementos del array mediante separadores sep en un .

// -------> Convertir a array <-------
const nombre  = "Daniel";
//nombre.constructor.name;    //String

const divideLetra = Array.from(nombre);
const numero = [...nombre];

console.log(divideLetra);       //[ 'D', 'a', 'n', 'i', 'e', 'l' ]
console.log(numero);            //[ 'D', 'a', 'n', 'i', 'e', 'l' ]

const hola1 = document.querySelectorAll("hola")
hola1.constructor.name;      //"NodeList"

const elements = Array.from(hola1);
const elements2 = [...hola1];
console.log(elements);
console.log(elements2);







const text = "12345";

const numbers = Array.from(text, (number) => Number(number));   // [1, 2, 3, 4, 5]
const numbers1 = Array.from(text, Number);                       // Equivalente al anterior
console.log(numbers);
console.log(numbers1);

// Equivalente a los dos anteriores
const numbers2 = [...text].map(Number);
console.log(numbers2);




// -------> Concatenar arrays <-------
//meodo push
const letras = ['a', 'b', 'c'];
console.log(letras.push('d', 'e', 'f'));    // devulve 6 porque ahora son ['a', 'b', 'c', 'd', 'e', 'f']
console.log(letras.push(['g', 'h', 'i']))   // devulve 7 porque ahora son ['a', 'b', 'c', 'd', 'e', 'f', ['g', 'h', 'i']]

// metodo concat()
const primeraParte = ['a', 'b', 'c'];
const segundaParte = ['d', 'e', 'f'];

console.log(primeraParte.concat(segundaParte));     // se concatena 

console.log(primeraParte.concat(1, 2, 3));      //cocatenamos con nuevo valores

console.log(segundaParte.concat(primeraParte, segundaParte, 1));    //cocatenamos y agrgamos un nuevo valor


// -----------------> name <-----------------
// -------> Separar y unir strings <-------

const vocales = ['a', 'e', 'i', 'o', 'u'];

console.log(vocales.join("->"));    //a->e->i->o->u
console.log(vocales.join(","));     //a,e,i,o,u

//separa
const separa = "Hola.Daniel.como.estas.?"
console.log(separa.split("."));     //[ 'Hola', 'Daniel', 'como', 'estas', '?' ]
console.log("a.b.c".split("."));        // Devuelve ['a', 'b', 'c']
console.log("5-4-3-2-1".split("-"));    // Devuelve ['5', '4', '3', '2', '1']

console.log("Hola mundo".split(""));
// [
//     'H', 'o', 'l', 'a',
//     ' ', 'm', 'u', 'n',
//     'd', 'o'
// ]
//es lo mismo
//[ 'H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o' ]

//metodo .join -> devuelve un STRING
//metodo .split -> devulve un ARRAY
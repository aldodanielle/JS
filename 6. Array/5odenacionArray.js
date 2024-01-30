// ------------------ Ordenacion de un ARRAY ------------------
// Ordenar el array por contenido o por criterio

// Método	                    Descripción
//  .reverse()          ⚠️	   Invierte el orden de elementos del array.
//  .toReversed()       ✅     Devuelve una copia del array, con el orden de los elementos invertido.
//  .sort()             ⚠️	   Ordena los elementos del array bajo un criterio de ordenación alfabética.
//  .sort(criterio)     ⚠️	   Idem, pero bajo un criterio de ordenación indicado por  criterio.
//  .toSorted()         ✅	  Devuelve una copia del array, con los elementos ordenados.
//  .toSorted(criterio) ✅	  Idem, pero ordenado por el criterio establecido por parámetro.

// ✅ El array original está seguro (no muta).
// ⚠️ El array original cambia (muta).

const numeros = [0,  1, 2, 3, 4, 5];
//const inversa = numeros.reverse();

console.log(numeros.reverse());      //[5, 4, 3 2, 1, 0]
//console.log(inversa === numeros);    //true
console.log(numeros);               // nuevo orden [ 5, 4, 3, 2, 1, 0 ]


//para no altera el ARRAY original
const numerosP1 = [0,  1, 2, 3, 4, 5];
const numerosInvrtidos = structuredClone(numerosP1).reverse();    //clonamos
const nuevoMetodo = numerosP1.toReversed();

console.log("original: "+ numerosP1);               //[0, ..., 5]
console.log("Invertidos: " + numerosInvrtidos);     //[5, ..., 0]
console.log(nuevoMetodo);       //no muta el original



// -----------------> El método .sort() y toSorted() <-----------------
// orden alfabeticamente
const nombre = ["Zoe", "Maximo", "Emiliano", "Alberto", "Ana", "Yael"]; //original

const ordenAlfabetico =  nombre.sort();

console.log(ordenAlfabetico);   //[ 'Alberto', 'Ana', 'Emiliano', 'Maximo', 'Yael', 'Zoe' ] 
console.log(nombre);            //altera el original 
//                                se volveria usar structuredClone

const metodoSort = structuredClone(nombre).sort();
console.log(metodoSort);        //[ 'Alberto', 'Ana', 'Emiliano', 'Maximo', 'Yael', 'Zoe' ]
//                                ya no modifica el original si no que lo clonamos para podificarlo


//no modifica el original y mas facil

const metodoMasFacil = nombre.toSorted();

console.log(metodoMasFacil);
console.log(nombre.toSorted()); //[ 'Alberto', 'Ana', 'Emiliano', 'Maximo', 'Yael', 'Zoe' ]



//que pasa con numero
const numbers = [1, 8, 2, 32, 9, 7, 4];
const sortedNumbers = numbers.toSorted();   //toSorted -> ordena a base alfabetica

console.log(sortedNumbers);   // [1, 2, 32, 4, 7, 8, 9]
console.log(numbers);         // [1, 8, 2, 32, 9, 7, 4]




// -----------------> Comparacion <-----------------
// -------> para ordenacion numerica se usa una coparacion <-------
const elementos = [9, 8, 2, 10, 20, 98, 33, 20];

const ordenAlfabeticoP1 = (a, b) => a + b;      //lo cocatena y devuelve la misma
const ordenNatural = (a, b) => a - b;           //toma los 2 argumentos y devuelve la diferencia 

const ordenAlfabe = elementos.toSorted(ordenAlfabeticoP1);
const ordenNatu = elementos.toSorted(ordenNatural);

console.log(ordenAlfabe);   //[ 9, 8, 2, 10, 20, 98, 33, 20 ]
console.log(ordenNatu);     //[ 2, 8, 9, 10, 20, 20, 33, 98 ]




// -----------------> Algoritmo de ordenación <-----------------
const elements = [3, 6, 9];

const metodoSorted = elements.toSorted();       //3, 6, 9

// Recordemos que esto es equivalente a lo siguiente:
const metodoSortedP1 = elements.toSorted(function (a, b){return a +b});     // 3, 6, 9

// Si extraemos la función de ordenación:
const alphaOrder = function(a, b) { return a + b };
const sortedElements = elements.toSorted(alphaOrder);       //3, 6, 9

// Si la cambiamos a función flecha
const alphaOrderP1 = (a, b) => a + b;
const sortedElementsP1 = elements.toSorted(alphaOrder);     //3, 6, 9





//ejemplo como usar una funcion flecha 
const minombre = (x, y) => {
    return `Hola mi nombre es: ${x} y mi edad es ${y}`;
};

const datos = {
    name: 'Daniel',
    edad: 25
};

const introduce = minombre(datos.name, datos.edad);
console.log(introduce);





const muestra = [8, 4];

const muestraDatos = (a, b) =>{
    console.log(`a(${a}) + b(${b}) = ${a+b}`);  //a(4) + b(8) = 12
    return a + b;
}
console.log(muestra.toSorted(muestraDatos));    //[ 8, 4 ]


const muestraDatos2 = (a, b) => {
    if( a > b) return 1;
    if( a < b) return -1;
    return 0;
}
console.log(muestra.toSorted(muestraDatos2));   //[ 4, 8 ]
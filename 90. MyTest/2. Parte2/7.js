// ------------------ N ------------------
// Set y operaciones con set: Crea un Set a partir de un array. 
// Añade un elemento al Set y luego convierte el Set de nuevo a un array.

let array = [1, 2, 3, 4, 5];
let set = new Set(array);   // ya aqui esta el array convertido
// Tu código aquí

array.constructor.name;     // Arraay
set.constructor.name;       // set

set.add(6);
set.add(7);     //  añade
set.add(7);     // NO añade (se repite)
set.add('a')

let nuevoArray = Array.from(set);  // se vuelve a cambia de SET -> ARRAY 
nuevoArray.constructor.name;        // Array

console.log(set); 


// ------------------ 2 ------------------
// Objetos y formato JSON: Escribe una función que tome un objeto y lo convierta en una cadena JSON.
function aJson(objeto) {
    // Tu código aquí
    return JSON.stringify(objeto);
}

const objeto = {
    name: "Daniel",
    lastname: "Lara",
    age: 25,
    genero: 'M',
}

objeto.constructor.name;   // Object
console.log(aJson(objeto));
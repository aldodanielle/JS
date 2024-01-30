// ------------------ N ------------------
// Deestructuracion de array: Crea un array con al menos tres elementos. 
// Utiliza la desestructuración para asignar los elementos del array a variables con el mismo nombre.

let array = ['primer elemento', 'elemento2', 'elemento3'];
// Tu código aquí

let [elemento1, elemento2, elemento3] = array;

array.constructor.name      // Array
elemento1.constructor.name  // String


console.log(elemento1); // primer elemento
console.log(elemento2); // elemento2
console.log(elemento3); // elemento3




// ------------------ 2 ------------------
// Set, operaciones con set, Map y operaciones de map: Escribe una función que tome un array, 
// lo convierta en un Set para eliminar duplicados, luego lo convierta en un Map donde 
// la clave es el elemento y el valor es el índice original en el array.
function arrayASetAMap(array) {
    // Tu código aquí
    let arrayASet = new Set(array);
    let setAMap = new Map();  // Map vacio

    // Convertir el Set en un Map
    arrayASet.forEach((value) => {
        setAMap.set(value, array.indexOf(value));
    });
    return setAMap;
}

//                        0         1        2     3  4  5  6  7  8  9  10    11
let arrayOriginal = ['first', 'second', 'first', 1, 1, 2, 3, 4, 4, 5, 6, 'second'];

console.log(arrayASetAMap(arrayOriginal));
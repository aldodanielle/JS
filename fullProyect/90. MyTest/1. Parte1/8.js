// ------------------ N ------------------
// Crea un Set a partir de un array con elementos repetidos y muestra cuántos elementos únicos hay.

const setDatos = new Set([10, 10, 20, 30, 30, 40]);

console.log(setDatos);
console.log(setDatos.size);




//                  0   1   2   3   4   5   6   7
const arrayDatos = [10, 10, 20, 30, 30, 40, 40, 50]

function setRepetidos(Datos){
    const set = new Set(Datos);
    console.log(set.size);      // muestra los datos unicos
    //return Array.from(set);   // muestra la cantidad de datos no repetidos
}

console.log(setRepetidos(arrayDatos));


console.log("Aqui los demas datos")
console.log(setRepetidos(arrayDatos) + "\n" + arrayDatos);
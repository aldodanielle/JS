// ------------------ N ------------------
// Deestructuracion de objetos: Crea un objeto con al menos tres propiedades. 
// Utiliza la desestructuración para asignar las propiedades del objeto a variables con el mismo nombre.

let auto = {
    marca: 'Toyota',
    modelo: 'Corolla', 
    ano: 2020,
    color: 'Negro',
    encender: function(){
        console.log("El carro enciende");
    }
};


// Tu código aquí
const {marca} = auto;   // uno X uno
const {modelo} = auto;  // uno X uno

let {marca, modelo, ano, color, encender} = auto;   // todos a la vez

console.log(marca.constructor.name);


// ------------------ 2 ------------------
// Buscar un elemento en un array
function buscarEnArray(array, elemento) {
    // Tu código aquí
    for (let i = 0; i < array.length; i++){
        if(array [i] === elemento){
            return i;
        }
    }
    return -1;
}


//                   0  1  2  3  4
let arrayOriginal = [1, 2, 3, 4, 5];
let elemento = 5;
arrayOriginal.constructor.name;     // Array

let indice = buscarEnArray(arrayOriginal, elemento);

if (indice !== -1){
    console.log(`El elemento ${elemento} se encontro en el indice ${indice} del array`);
}else{
    console.log(`El elemento ${elemento} no se encontro en el array`);
}

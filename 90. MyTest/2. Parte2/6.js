// ------------------ N ------------------
// Arrays y búsqueda de elementos: Escribe una función que tome un array y un elemento, 
// y devuelva true si el elemento está en el array, y false si no.

function contiene(array, elemento) {
    // Tu código aquí
    for(let i = 0; i < array.length; i++){
        const buscado = array[i];
        if(buscado === elemento){
            return true;
        }
    }
    return false;
}
const array = ['a', 'b', 'c', 1, 2, 3];

console.log(contiene(array, 'a'));  // true
console.log(contiene(array, 2));    // true
console.log(contiene(array, 5));    // false
console.log(contiene(array, 'z'));  // false


const busqueda = (array, elemento) =>{
    for (let i = 0; i < array.length; i++){
        const caracter = array[i];
        if (caracter === elemento){
            return true;
        }
    }
    return false;
}

const array2 = ['a', 'b', 'c', 1, 2, 3];
console.log(busqueda(array2, 3));       // true
console.log(busqueda(array2, 'c'));     // true
console.log(busqueda(array2, 6));       // false


// ------------------ 2 ------------------
// Búsqueda y reemplazo, modificar cadenas: Escribe una función que tome una cadena y 
// reemplace todas las ocurrencias de una palabra específica.
function reemplazarPalabra(cadena, viejaPalabra, nuevaPalabra) {
    // Tu código aquí
    let nuevaCadena = cadena.split(viejaPalabra).join(nuevaPalabra);
    return nuevaCadena;
}

let cadena = "Me encanta el Futbol";
let viejaPalabra = "Futbol";
let nuevaCadena = "Beisbol";

let cadenaModificada = reemplazarPalabra(cadena, viejaPalabra, nuevaCadena);
console.log(cadenaModificada);



console.log(reemplazarPalabra("Me encanta el futbol", "futbol", "Beisbol"));
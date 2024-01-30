// ------------------ N ------------------
// Objectos y formato JSON: Crea un objeto con al menos tres propiedades. 
// Convierte el objeto a una cadena JSON.

let objeto = {
    // Tu código aquí
    color: 'Rojo',
    peso: '25 k',
    modelo: 'Mkdir',
    propiedades:{
        precio: 30,
        modelo: 2016
    }
}

let cadenaJSON = JSON.stringify(objeto);

console.log(cadenaJSON.constructor.name);
console.log(cadenaJSON);




console.log("Como Objeto");
console.log(objeto.propiedades);
console.log(objeto.propiedades.modelo);



// ------------------ 2 ------------------
// String, posiciones y substring: Escribe una función que tome una cadena y 
// devuelva los primeros 5 caracteres.
function primerosCinco(cadena) {
    return cadena.substring(0, 7);
}

console.log(primerosCinco("Hola Mundo"));   // Hola Mu
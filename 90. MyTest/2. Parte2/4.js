// ------------------ N ------------------
// String y posiciones: Escribe una función que tome una cadena y un carácter, 
// y devuelva la posición del carácter en la cadena.

// const posicion = (cadena, caracter) => {
//     let posicion =[];
//     for(let i = 0; i < cadena.lenght; i++){
//         if(cadena [i] == caracter){
//             posicion.push[i];
//         }
//     }
//     return posicion;
// }

function encontrarPosiciones(cadena, caracter) {
    let posiciones = [];
    for(i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            posiciones.push(i);
        }
    }
    return posiciones;
}

// uso
let cadena1 = "Hola, ¿cómo estás?";
let caracter1 = 'o';
console.log(encontrarPosiciones(cadena1, caracter1));



// ------------------ 2 ------------------
// Math y BigInt: Escribe una función que calcule el factorial de un número usando BigInt.
function factorialBigInt(n) {
    // Tu código aquí
    n = BigInt(n);    
    let resultado = BigInt(1);
    for (let i = BigInt(2); i <= n; i++){
        resultado *=i;
    }
    return resultado;
}

console.log(factorialBigInt(5));

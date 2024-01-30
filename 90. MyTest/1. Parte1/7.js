// ------------------ N ------------------
// Escribe una función que tome un array de números y devuelva el número más grande.
let array = [11, 28, 30, 45, 50, 61, 77, 89, 95];

function numeroMayor(array){
    var mayor = 0;
    for( i = 0; i < array.lenght; i++){
        if (array[i] > mayor){
            mayor = array[i];
        };
    }
}

//console.log(numeroMayor(array));
console.log(array.constructor.name);    //Array
console.log(typeof array);  // object


// una mejor
function numeroMayorMejor(array){
    return Math.max(...array);
}

console.log(numeroMayorMejor(array));   // 95

function numeroMenor(array){
    return Math.min(...array);
}

console.log(numeroMenor(array));    // 11
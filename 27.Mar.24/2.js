// 2° parte

// Números primos
function esPrimo(numero){
    for(let i = 2; i < numero; i++)
    if(numero % i === 0) return false;
    return numero > 1;
}
console.log(esPrimo(7));


// Cambio de monedas: 
// Escribe una función que, dado un monto y un array de denominaciones de monedas,
// devuelva la cantidad mínima de monedas necesarias para dar ese monto.
function cambioMonedas(monto, monedas){
    //monedas.sort((a, b) => a - b);
    monedas.sort((a, b) => b - a);
    let resultado = 0;
    for(let i = 0; i < monedas.length; i++){
        while (monto >= modenas [i]){
            monto -= monedas[i];
            resultado++;
        }
    }
    return resultado;
}
const monedas = [1, 2, 3, 4, 5];
console.log(cambioMonedas(10, monedas));


// Números romanos:
function aRomanos(num) {
    const valores = { M:1000, CM:900, D:500, CD:400, 
        C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, 
        IV:4, I:1};
    let romano = '';
    for (let i in valores) {
    while (num >= valores[i]) {
        romano += i;
        num -= valores[i];
    }}
    return romano;
}
console.log(aRomanos(7));


// Potencia de un número
// sin Math.pow ni **
function potenciaConMath(num){
    return Math.pow(num);
}
console.log(potenciaConMath(5));

function potenciaConAteriscos(num){
    return num*num*num;
}
console.log(potenciaConAteriscos(5));


function potencia(base, exponente){
    let resultado = 1;
    for (let i = 0; i < exponente; i++){
        resultado *= base;
    }
    return resultado;
}
console.log(5, 5);


// Ordenar palabras por longitud 
function ordenarLongitud(palabras){
    if (Array.isArray(palabras)) {
        return palabras.sort((a, b) => a.length - b.length);
    } else {
        console.log('palabras no es un array');
        return null;
    }
}
console.log(ordenarLongitud(["aldo", "daniel", "lara", 'emiliano']));


// Frecuencia de caracteres
function frecuenciaCaracteres(cadena){
    let frecuencia = {};
    for (let i = 0; i < cadena.length; i++){
        if(frecuencia[cadena[i]]){
            frecuencia[cadena[i]]++;
        }else{
            frecuencia[cadena[i]] = 1;
        }
    }
    return frecuencia;
}
console.log(frecuenciaCaracteres('emiliano'));
// { e: 1, m: 1, i: 2, l: 1, a: 1, n: 1, o: 1 }


// Eliminar elementos de un array 
function eliminarElementoArray(array, elemento){
    let indice = array.indexOf(elemento);
    if (indice !== -1){
        array.splice(indice, 1);
    }
    return array;
}
console.log(eliminarElementoArray([1, 5, 7, 9,1, 2, 1], 1))


// Rotación de un array
function rotarArray(array, n){
    return array.slice(n).concat(array.slice(0, n));
}
const arrayLetras = ['a', 'b', 'c', 'd'];
console.log(rotarArray(arrayLetras, 'c'));


// Combinaciones de una cadena
function combinaciones(cadena) {
    let resultado = [];
    for (let i = 0; i < cadena.length; i++) {
    for (let j = i + 1; j <= cadena.length; j++) {
        resultado.push(cadena.slice(i, j));
    }
    }
    return resultado;
}
console.log(combinaciones('cadenita'));
// [
//     'c',      'ca',     'cad',     'cade',
//     'caden',  'cadeni', 'cadenit', 'cadenita',
//     'a',      'ad',     'ade',     'aden',
//     'adeni',  'adenit', 'adenita', 'd',
//     'de',     'den',    'deni',    'denit',
//     'denita', 'e',      'en',      'eni',
//     'enit',   'enita',  'n',       'ni',
//     'nit',    'nita',   'i',       'it',
//     'ita',    't',      'ta',      'a'
// ]



// Numero palidromo
function numPalidromo (num){
    let numeroInvertido = String(num).split('').reverse().join('');
    return num === Number(numeroInvertido);
}
console.log(numPalidromo(1551));    // true
console.log(numPalidromo(7778));    // false
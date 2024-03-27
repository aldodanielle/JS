// 1° Parte

// Hola Mundo
console.log("Hola mundillo");


// Suma de dos números 
function suma(a, b){
    return a + b;
}
console.log(suma(3, 4));


// Convertir minutos a segundos
function minutosASegundos (minutos){
    return minutos * 60;
}
console.log(minutosASegundos(3) + " seg");


// Área de un triángulo 
function areaTriangulo(base, altura){
    return (base * altura) / 2 ;
}
let base = 3;
let altura = 5;
console.log(areaTriangulo(base, altura));


// Número par o impar
function numeroParImpart (numero){
    if(numero % 2 === 0){
        console.log("Par");
    }else{
        console.log("Impar");
    }
}
numeroParImpart(5); // Impar

function numeroParImpar(numero){
    return numero % 2 === 0 ? "Par" : "Impar";
}
console.log(numeroParImpar(4)); // Par


// Longitud de una cadena
function longitudCadena(cadena){
    return cadena.length;
}
console.log(longitudCadena("Aldo"));


// Contar elementos en un array
function elementosArray(array){
    return array.length;
}
const array = [1, 'Hola', 4.5, true, 'Aldo'];
console.log(elementosArray(array));


// Mayúsculas y minúsculas 
function aMayusulas(cadena){
    return cadena.toUpperCase();
}
function aMinuscula(cadena){
    return cadena.toLowerCase();
}

console.log(aMayusulas(' solo mayusculas'));
console.log(aMinuscula(' SOLO MINUSCULAS'));


// El mayor de tres números
function mayorTres (a, b, c){
    return Math.max(a, b, c);
}
console.log(mayorTres(3, 5, 9));


// Array inverso
function arrayInverso(dato){
    return dato.reverse();
}
const array1 = [9, 8, 7, 6, 5, ];   // [ 5, 6, 7, 8, 9 ]
const array2 = [0, 1, 2, 3, 4, 5];  // [ 5, 4, 3, 2, 1, 0 ]

console.log(arrayInverso(array2));
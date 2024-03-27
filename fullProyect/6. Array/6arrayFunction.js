// ------------------ ARRAY functions ------------------
// son metodos que tiene cualquier variable que sea de tipo ARRAY
// estos permiter realizar una operacion con todos los elementos
// depende del metodo pero en general se pasan por un function callback

// Método	        Descripción
// .forEach(ƒ)	    Ejecuta la función definida en ƒ por cada uno de los elementos del array.
//  
// Coprobacion
// Trasformadores y filtros
// Busqueda
// Acomuladores
// Para ver cada uno de ellos -> https://lenguajejs.com/javascript/arrays/array-functions/ 



// -----------------> Bucles .forEach() (Por cada uno) <-----------------
//                0    1    2    3    4
const vocales = ['a', 'e', 'i', 'o', 'u'];

// Con funciones por expresión
const f = function() {
    console.log("Por cada elemento")
}
console.log(vocales.forEach(f));    // imprime "Por cada elemento" por uno de los elemento del ARRAY

//con funcion anonima
console.log(vocales.forEach(function (){
    console.log("Un elemento");     // imprime "Un elemento" por uno de los elemento(5) del ARRAY
}));

//con funcion flecha
console.log(vocales.forEach( () => console.log("elemento")));
//imprime "elemento" por uno de los elemento(5) del ARRAY


// -----------------> agregamos parametros <-----------------
//ahora le pasamos varias funciones al callback
const letters = ['a', 'b', 'c', 'd'];

console.log(letters.forEach((element) => console.log(element)));    // a b c d

console.log(letters.forEach((element, index ) => console.log(element, index)));  
// a 0
// b 1
// c 2
// d 3

console.log(letters.forEach((element, index, array) => console.log(array[0]))); //a a a a


// -----------------> .every()<-----------------
// Método .every() (Todos)
// para comprobar si todos los elementos complen la condicion establecida

// permite comprobar si todos y cada uno de los elementos del array cumplen la 
// condicion que se especifique en la funcion ARRAY

const letter = ["a", "b", "c", "d"];
console.log(letter.every((letter) => letter.length === 1));     //true -> es un callback
// aqui lo que comprobamos si todos los valores del array cumplen con la condicion
// de que solo sea un dijito en cada valor el array 


// mismo ejemplo pero sin metodo every
const letras = ['a', 'b', "c", "d"];

const condition = function (letras){    // Esta función se ejecuta por cada elemento del array
    if(letras.length === 1){            // Si el tamaño del elemento (string) es igual a 1
        return true;
    }else{
        return false;
    }
};

console.log(letras.every(condition));   //true

// -----------------> .some() <-----------------
// Método .some() (Al menos uno)
const alMenosUno = ['a', 'bb', 'c', 'd'];

console.log(alMenosUno.some((alMenosUno) => alMenosUno.length ===2 ));  //true bb -> 2


// -----------------> .map() <-----------------
// Método .map() (Transformador)
// devuelve un nuevo array, donde cada uno de sus elementos sera lo que devuelva la funcion
const nombres = ["Ana", "Aldo", "Pablo", "Emilinao"];

const nameSize = nombres.map((name) => name.length);

console.log(nameSize);      //[ 3, 4, 5, 8 ] -> catidad de letras de cada nombre


// -----------------> .filter() <-----------------
// Método .filter() (Filtro)
const numerosSorteados = [10, 33, 64, 45, 21, 54, 69, 87, 99, 77];
const numerosPares = numerosSorteados.filter((num) => num % 2 === 0);

console.log(numerosPares);      //[ 10, 64, 54 ]

const names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nombresFiltrados = names.filter((name) => name.startsWith("P"));

console.log(nombresFiltrados);  //[ 'Pablo', 'Pedro', 'Pancracio' ]



// -----------------> .flatMap() <-----------------
// para los arry que vengan anidanos (tenga mas de un elemento) asta el nivel que tengamos
// Método .flatMap() (Aplanar)

const values = [10, [20, 20], 30, [40, 40], 50, [60, [70, 70], 80]];

console.log(values.flat(0));    //[ 10, [ 20, 20 ], 30, [ 40, 40 ], 50, [ 60, [ 70, 70 ] 80 ] ]
console.log(values.flat(2));    //[ 10, 20, 20, 30, 40, 40, 50, 60, 70, 70, 80 ] 

console.log(values.flat(Infinity));     //para aplcar todos los nieveles que tengamos


// -------> .flatMap() <-------
// este metodo es equivalente a hacer un flat(f) y Map(f)

const valores = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];
//               1    1   1      2      1               4 (elementos)
console.log(valores.flatMap(elementos => Array.isArray(elementos) ? elementos.length : 1));
//[ 1, 1, 1, 2, 1, 4 ] ->

// -----------------> .find() AND .findIndex() <-----------------
//Búsquedas .find() y .findIndex()
// .find() -> devuelv el elemento
// .findeIndex() -> devuleve la posicion del elemento

const apellidos = ["Hernandez", "Marmolejo", "Antonio", "Lopez", "Gomez", "Lara"];

console.log(apellidos.find((lastname) => lastname.length == 9));    // Hernandez
console.log(apellidos.find((lastname) => lastname.length == 4));    // Lara

console.log(apellidos.findIndex((lastname) => lastname.length == 9));   // 0 Hernadez tinee 9 letras y esta en la posicion 0
console.log(apellidos.findIndex((lastname) => lastname.length == 4));   // 5 Lara tiene 4 y esta en la posicion 5

console.log(apellidos.findIndex((lastname) => lastname.length == 7));   // 2 -> Antonio




// -----------------> .findLast() AND .findLastIndex()<----------------
//Búsquedas .findLast() y .findLastIndex()
// la bus queda de hace la derecha a izquierda  <-

const lastname = ["Hernandez", "Marmolejo", "Antonio", "Lopez", "Gomez", "Lara"];

console.log(lastname.findLast((apellido) => apellido.length === 9));    //Marmolejo

console.log(lastname.findLastIndex((apellidos) => apellidos.length === 5)); // 4 === Gomez



// -----------------> .reduce() AND reduceRight(). <-----------------
// Método .reduce() (Acumuladores)

// Ambos se encargan de recorrer todos los elementos del ARRAY e ir acomulando sus valores
// se utilizan (first, second, iteration, array) en vez de los (element, index y array)
// y solo nos devuelve le resultado final

// este metodo lo que realiza es acomular los resultado en cada iteneracion
// y los acomula para el siguiente iteneracion 


const numbers = [95, 5, 25, 10, 35];

numbers.reduce((firts, second) => {
    console.log(`F = ${firts} S =${second}`);
    return firts + second;
});
// F=95  S=5    (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
// F=100 S=25   (2ª iteración: 100 + elemento 3: 25) = 125
// F=125 S=10   (3ª iteración: 125 + elemento 4: 10) = 135
// F=135 S=25   (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160 <- resultado final



// agregandole un parametro inicial  ->0
// esta nos hace un iteneracion mas pero el resultado sigue siendo el mismo
const conParametro = [95, 5, 25, 10, 25];
conParametro.reduce((accumulator, nextElement) => {
    console.log(`F=${accumulator} S=${nextElement}`);
    return accumulator + nextElement;
}, 0);
// F=0   S=95   (iteración inicial): 0 + elemento 1: 95) = 95
// F=95  S=5    (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
// F=100 S=25   (2ª iteración: 100 + elemento 3: 25) = 125
// F=125 S=10   (3ª iteración: 125 + elemento 4: 10) = 135
// F=135 S=25   (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160




// -------> .reduceRight() <-------
// este es de metodo es de derecha a izquierda      <-

const valoresIniciale = [95, 5, 25, 10, 35];

console.log(valoresIniciale.reduce((first, second) => first - second));
// 95 - 5 - 25 - 10 - 25. Devuelve 20

console.log(valoresIniciale.reduceRight((first, second) => first - second));
// 25 - 10 - 25 - 5 - 95. Devuelve -110

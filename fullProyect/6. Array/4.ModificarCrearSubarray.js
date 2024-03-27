// ------------------ Modificar o Craer SUBARRAYS ------------------
// dependiendo el contexto algunas veces necesitamos modificar o crear algunos arrays 
// en base al original para modificarlo, es decir, crear un subARRAY

//          Método	                        Descripción
// ARRAY .slice(start, end) ✅	               Devuelve los elementos desde la posición start hasta end (excluído).
// ARRAY .splice(start, size) ⚠️	            Devuelve los size siguientes elementos desde la posición start.
// ARRAY .splice(start, size, e1, e2...) ⚠️	    Idem. Además, luego inserta e1, e2... en la posición start.
// ARRAY .toSpliced(start, size)  ✅	           Idem a splice(start, size), pero sin mutar el array original.
// ARRAY .toSpliced(st, sz, e1, e2...)  ✅	   Idem a splice(st, sz, e1, e2..), pero sin mutar el array original.
// ARRAY .copyWithin(pos, start, end)  ⚠️	    Muta el array, cambiando en pos y copiando desde start a end.
// ARRAY .fill(element, start, end)  ⚠️	        Cambia los elementos del  por element desde start hasta end.
// ARRAY .with(index, item)  ✅	                Devuelve una copia del original, con el elemento index modificado.
// ✅ El array original está seguro (no muta).
// ⚠️ El array original cambia (muta

// -------> Crear fragmento con .slice() <-------
// devuleve los elementos desde el inical al final

const letras = ['A', 'B', 'C', 'D', 'E', 'F'];

console.log(letras.slice(2));   // ['C', 'D', 'E', 'F']
console.log(letras.slice(4));   // ['E', 'F']

console.log(letras.slice(3, 5));    //[ 'D', 'E' ]
console.log(letras.slice(-3));      //[ 'D', 'E', 'F' ] -> cuenta de derecha a izquierda


// -------> Crear fragmento con .splice() o .toSpliced() <-------
// Método .slice(): Obtiene un subarray desde una posición inicial a una final
// Método .splice(): Obtiene un subarray desde una posición inicial, con un tamaño concreto

const metodoAltera = ["a", "b", "c", "d", "e"];

console.log(metodoAltera.splice(0, 2));       // Crea y devuelve [ 'a', 'b' ]
console.log(metodoAltera)                     // Altera el array original: [ 'c', 'd', 'e' ]

console.log(metodoAltera.splice(2, 1));       // Crea y devuelve [ 'e' ]
console.log(metodoAltera);                     // Altera el array original [ 'c', 'd' ]

//.tosSpliced -> no altera
// devuelve como queda el arreglo final pero NO lo que EXTRAEMOS

//I don´t get it
const noAltera = ['A', 'B', 'C', 'D', 'E'];
console.log(noAltera.toSpliced(0, 2));      //Crea y devuelve [ 'C', 'D', 'E' ]
console.log(noAltera);                      //El array original no cambia [ 'A', 'B', 'C', 'D', 'E' ]

console.log(noAltera.toSpliced(2, 1));      //[ 'A', 'B', 'D', 'E' ]
console.log(noAltera);                      //[ 'A', 'B', 'C', 'D', 'E' ]




//                0    1    2    3    4
const letters = ["a", "b", "c", "d", "e"];

// .slice() no modifica el array
console.log(letters.slice(2, 4));             // Devuelve ['c', 'd']. El array no se modifica.

// .splice() si modifica el array
console.log(letters.splice(2, 2));            // Devuelve ['c', 'd']. Ahora array = ['a', 'b', 'e']
console.log(letters.splice(1, 0, "z", "x"));  // Devuelve []. Ahora array = ['a', 'z', 'x', 'b', 'e']
console.log(letters);                         //[ 'a', 'z', 'x', 'b', 'e' ]



// Utilizando .slice() y .concat() (no se muta el array original)
// Utilizando .splice() y desestructuración (se muta el array original
const numerosP1 = [1, 2, 3, 4];
const numerosP2 = [5, 6];
const numerosP3 = [7, 8, 9, 0];

const p1 = numerosP1.slice(0, 2)    //1,2
const p2 = numerosP1.slice(1, 4);   //1,2,3

console.log(p1 + "//" + p2);

console.log(numerosP1.concat(numerosP2));   //[ 1, 2, 3, 4, 5, 6 

const concatena = numerosP1.concat(numerosP2, numerosP3);
console.log(concatena);     //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]



// -------> Repetir fragmento con .copyWithin(pos, start, end) <-------
// modifica el array original
//                    0    1    2    3    4    5
const metodcopiar = ['A', 'B', 'C', 'D', 'E', 'f'];

console.log(metodcopiar.copyWithin(3, 0, 3));
console.log(metodcopiar.copyWithin(1, 3));

console.log(metodcopiar[0]);    //A

//          0    1    2    3    4    5
const a = ["A", "B", "C", "D", "E", "F"];
console.log (a.copyWithin(1, 4, 6));                                // ["A", "E", "F", "D", "E", "F"]

const b = ["A", "B", "C", "D", "E", "F"];
console.log (a.slice(0, 1).concat(a.slice(4, 6), a.slice(1+6-4)));  // ["A", "E", "F", "D", "E", "F"]



// -------> Reducir el tamaño de un array <-------
// Mediante slice()
//               0  1  2  3  4  5  6  7
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const newNumbers = numbers.slice(0, 4);

console.log(newNumbers);    // [1, 2, 3, 4], numbers no cambia



// Mediante .length
//                0  1  2  3  4  5  6  7
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
numbers1.length = 4;

console.log(numbers1);       // [1, 2, 3, 4], numbers cambia



// -------> Rellenar un array con .fill() <-------
const letrasPF = ["a", "b", "c", "d", "e", "f"];

// Estos métodos modifican el array original

letrasPF.fill("Z", 0, 5);             // ["Z", "Z", "Z", "Z", "Z", "f"]
letrasPF.fill("AA", 0, 2);            // ["AA", "AA", "Z", "Z", "Z", "f"]
letrasPF.fill(1);                     // [1, 1, 1, 1, 1]
new Array(5).fill(5);                // [5, 5, 5, 5, 5]




// -----------------> with <-----------------
//un solo with
const elements = ["A", "B", "C", "D", "E"];
console.log(elements);
elements[0] = "a";    // Modificamos el elemento en la posición 0

console.log(elements);   // ["a", "B", "C", "D", "E"];

// Ejemplo 2: Reemplazo múltiple con with()
const elements2 = ["A", "B", "C", "D", "E"];
console.log(elements2.with(0, "a")
                        .with(2, "c")
                        .with(4, "e"));  // ["a", "B", "c", "D", "e"]



// -------> Rellenar un array con .fill() <-------




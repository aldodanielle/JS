// ------------------ Set ------------------
// nativo de Js -> ayuda para insertar datos pero a su vez estos no se pueden repetir
// tambien es una estructura itenerable -> se puede recorrer

const ejemploSet = new Set();      //set vacio ->Set(0) {}
const ejemploSet2 = new Set([1, 2, 3, 4, 5]);       // set de 5 elementos -> Set(5) { 1, 2, 3, 4, 5 }
const ejemploSet3 = new Set([1, 2, 2, 3, 4]);       // set de 4 elementos -> Set(4) { 1, 2, 3, 4 }

console.log(ejemploSet3);


const variosDatos = new Set(["hola", "mundo", 1, true, 1.2])
console.log(variosDatos);
// Propiedad o Método	            Descripción
// NUMBER   .size	                Propiedad que devuelve el número de elementos que tiene el conjunto.
// SET      .add(element)	        Añade un elemento al conjunto (si no está repetido) y devuelve el set. Muta
// BOOLEAN  .has(element)	        Comprueba si element ya existe en el conjunto. Devuelve si existe.
// BOOLEAN  .delete(element)	    Elimina el element del conjunto. Devuelve si lo eliminó correctamente.
//          .clear()	            Vacía el conjunto completo.

// -----------------> Propiedad .size <-----------------
// catidad de elementos parecido al length 
const propiedadSize = new Set();    // 0

const propiedadSize2 = new Set([1, 2, 3, 4, 5]);    // 5
const propiedadSize3 = new Set([1, 2, 3, 3, 4]);    // 4 -> el 3 se inserta solo una vez

console.log(propiedadSize3.size);


// -----------------> .add() <-----------------
// agregar o añadir
const metodoAnadir = new Set(["A", "l"]);

metodoAnadir.add("d");  // se añade
metodoAnadir.add("o");  // se añade
metodoAnadir.add(2);    // se añade
metodoAnadir.add(5);    // se añade
metodoAnadir.add(5);    // NO se añade se repite el 5

console.log(metodoAnadir);  //Set(5) { 'A', 'l' 'd', 'o', 2, 5 }




// -----------------> .has <-----------------
// Comprobar si existen (has) -> tiene
const tiene = new Set([1, 3, 4 , 'A', false, 1.4, "Hola"]);

console.log(tiene.has('A'));        //true
console.log(tiene.has(4));          //true
console.log(tiene.has(false));      //true
console.log(tiene.has(1.4));        //true
console.log(tiene.has("Hola"));     //true
console.log(tiene.has("B"));        //false




// -----------------> .delete() <-----------------
// Borrar elementos
const Elimina = new Set([1, 3, 4 , 'A', false, 1.4, "Hola"]);

Elimina.delete(3);      // lo elimina
Elimina.delete("A");    // lo elimina
Elimina.delete(1.5);    // NO lo elimina -> NO EXISTE

console.log(Elimina);   //Set(5) { 1, 4, false, 1.4, 'Hola' }


// -----------------> .clear() <-----------------
// Vacíar conjunto (clear)
// limpiar (eliminar) los elementos de mi set

const limpiar = new Set([1, 3, 4 , 'A', false, 1.4, "Hola"]);

limpiar.clear();
console.log("Set actualizado"+ limpiar);    //Set(0) {}



// -----------------> Convertir a Arrays <-----------------
// es muy sencillo utilizar desestructuración y convertirlo a un array (o viceversa)

const nuevoSet = new Set([1, 3, 4 , 'A', false, 1.4, "Hola"]);

console.log(nuevoSet.size);   // 7 elementos
console.log(nuevoSet.constructor.name);   //Set -> obtiene el nombre u objeto del constructor


// solo de declara como como array y se le pasan los valores
const convertirArray = [...nuevoSet];   // asi de facil
convertirArray.constructor.name;        // "Array"
console.log(convertirArray);            // [ 1, 3, 4, 'A', false, 1.4, 'Hola' ]



// -----------------> Convertir a Arrays Aa SET <-----------------
// de manera inversa
const nuevoArray = [5, 4, 3, 3, 4];
const set = new Set(nuevoArray);
set;   // Set({ 5, 4, 3 })



//para cuando se tengan datos mas complejos anidados (Array, objetos, etc)
//es mejor clonarlo para que asi no cambien o mute la informacion en ellos 
const datosAnidados = new Set([5, "A", [99, 10, 24]]);
datosAnidados.size;  // 3

const clonedArray = [...structuredClone(datosAnidados)];
const array = [...datosAnidados];

clonedArray[2][0] = "Modified";
[...datosAnidados][2][0];   // 99 (El original se mantiene intacto)

array[2][0] = "Modified";
[...datosAnidados][2][0];   // "Modified" (El original ha mutado)




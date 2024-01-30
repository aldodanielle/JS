// ------------------ Map ------------------
// estructuras de Mapas que tiene valores guardados a traves de clave identificada
// comunmente llamados como -> estructuras de dicionario mediante       clave-valor
// muy similar a un objeto porque


const usoMap = new Map();                   //Map(0) {}
const usoMap2 = new Map([[1, "uno"]]);      //Map(1) { 1 => 'uno' 
const usoMap3 = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);     //Map(3) { 1 => 'uno', 2 => 'dos', 3 => 'tres' }

console.log(usoMap3);


//se le agregan datos s nuestro Map
let nuevoMap = new Map();
// Almacenando un número
nuevoMap.set('key1', 1);
// Almacenando una cadena de texto
nuevoMap.set('key2', 'value2');
// Almacenando un objeto
nuevoMap.set('key3', { name: 'John Doe' });
// Almacenando una función
nuevoMap.set('key4', function() { console.log('Hello World'); });

console.log(nuevoMap);
// Map(4) { 'key1' => 1, 'key2' => 'value2', 'key3' => { name: 'John Doe' }, 'key4' => [Function (anonymous)] }




// -----------------> Propiedades o Métodos <-----------------
// Propiedad o Método	        Descripción
// NUMBER .size	            Devuelve el número de elementos que tiene el mapa.
// MAP .set(key, value)	    Establece o modifica la clave key con el valor value. Muta
// BOOLEAN .has(key)	    Comprueba si key ya existe en el mapa y devuelve si existe o no.
// OBJECT .get(key)	        Obtiene el valor de la clave key del mapa.
// BOOLEAN .delete(key)	    Elimina el elemento con la clave key del mapa. -> 
//                          Devuelve si lo eliminó correctamente.
// CLEAR.clear()	        Vacía el mapa completamente.


// -----------------> Propiedades o Métodos <-----------------
// -------> .size() <-------
const tamano = new Map();       // 0
const tamano2 = new Map([[1, "A"], [2, "B"]]);     // 2
const tamano3 = new Map([[1, "uno"], [2, "dos"], [1, "tres"]]);// 2 (El 1 -> "tres" sobreescibe al anterior)

console.log(tamano3.size);


// -------> con .set() <-------
const usoDeMap = new Map();

usoDeMap.set(5, "cinco");
usoDeMap.set(4, "cuatro");
usoDeMap.set(5, "sobreescribe el cinco");

console.log(usoDeMap);      //Map(2) { 5 => 'sobreescribe el cinco', 4 => 'cuatro' }
console.log(usoDeMap.size); // 2


// -------> .has() <-------
const comprobarExiste = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);

console.log(comprobarExiste.has(2));            // true
console.log(comprobarExiste.has(3, "tres"));    // true
console.log(comprobarExiste.has("uno"));        // false
console.log(comprobarExiste.has(5, "cinco"));   // false

// -------> .delete() <-------
const eliminaDato = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);

eliminaDato.delete(2);      // true
eliminaDato.delete(5);      // false

console.log(eliminaDato);   // Map(2) { 1 => 'uno', 3 => 'tres' }


// -------> .clear() <-------
// vaciar conjunto
const vaciarMap = new Map([[9, "nueve"], [0, "cero"], [1, "A"]]);

vaciarMap.clear();

console.log(vaciarMap);         // Map(0) {}
console.log(vaciarMap.size);    // 0


// -----------------> Convertir a Arrays <-----------------
const mapOriginal = new Map([[1, "A"], [2, "B"], [3, "C"], [4, "cuatro"]]);

console.log(mapOriginal.size);        // 4 elemtos
console.log(mapOriginal.constructor.name);    //map

// se crea un array y copiamos
const convertirArray = [...structuredClone(mapOriginal)];

console.log(convertirArray.length);     // 4
console.log(convertirArray.constructor.name);   //Array
console.log(convertirArray);        // [ [ 1, 'A' ], [ 2, 'B' ], [ 3, 'C' ], [ 4, 'cuatro' ] ]


console.log("Here we go");
// ARRAY a -> map
const convertidoMap = new Map(convertirArray)
convertidoMap.constructor.name    // Map

// ARRAY -> object
const convertirObject = Object.fromEntries(convertirArray);
convertirObject.constructor.name      // Object

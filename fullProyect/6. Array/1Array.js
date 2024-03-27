// ------------------  ARRAY ------------------

// un ARRAY es una variable mas sencilla que un objeto
// es una colecion o agrupacion de elementos en una misma variable

//      Constructor	                Descripción
// ARRAY -> new Array(NUMBER size)	        Crea un array vacío de tamaño size. Sus valores no están definidos, pero son .
// ARRAY -> new Array(e1, e2...)	Crea un array con los elementos indicados.
// ARRAY -> [e1, e2...]	            Simplemente, los elementos dentro de corchetes: []. Notación preferida.

const arraysTradicional = ["a", "b", "c"];
const arrayVacio = [];
const arrayMixto = ["a", 3, true];      //tiene 3 tipos de datos (String, Number, Boolean)

// Forma tradicional (no se suele usar en Javascript)
const arrayNOtradi1 = new Array("a", "b", "c");   // Array con 3 elementos
const arrayNOtradi2 = new Array(3);               // Array vacío de tamaño 3


// -----------------> Acceso a elementos del array <-----------------

// Forma	    Descripción
// .length	    Devuelve el número de elementos del array.
// [pos]	    Devuelve (o modifica) el elemento número pos del array.
// .at(pos) 	Método que devuelve el elemento en la posición pos. Números negativos en orden inverso.

const letras = ["x", "y", "z"];
console.log("arreglo original -> " + letras +"\n");

console.log(letras.length);     //3
console.log(letras[0]);         // x -> devuleve el valor en la posicion[0]
console.log(letras[2]);         //z
console.log(letras[10]);        //undefined



// -------> Modificamos un valor  <-------
console.log("\nArreglo modificado");
console.log(letras[1] = "A");
console.log(letras[4] = "Hola");        //add a new value in a casilla que NO esta definida
console.log(letras);        //aparecen los nuevos valores

// -------> Modificamos un valor sin modificar el arreglo original <-------
const nuevasLetras = ["A", "B", "C"];
console.log(nuevasLetras.with(0, "x"));     // cambiamos de A -> x
console.log(nuevasLetras.with(1, "y"));     //solo se modifcan en esta ejecucion
console.log(nuevasLetras.with(2, "z"));

console.log(nuevasLetras.with(5, "W"));     //NO existe la posicion 5



// -----------------> metodo at() <-----------------
// lo mismo que [pos] pero en este metodo se aceptan valore negativos
const numero = ["1", "2", "3"];

console.log (numero.at(0));     //1
console.log (numero.at(1));     //2
console.log (numero.at(2));     //3
console.log (numero.at(3));     //undefined
console.log (numero.at(-2));    //2
console.log (numero.at(-1));    //3


// -----------------> Añadir o eliminar elementos <-----------------

//      Método	                    Descripción
// .push(e1, e2, e3...) ⚠️	    Añade uno o varios elementos al final del array. Devuelve el tamaño del array.
// .pop() ⚠️	                Elimina el último elemento del array. Devuelve dicho elemento.
// .unshift(e1, e2, e3...) ⚠️	Añade uno o varios elementos al inicio del array. Devuelve el tamaño del array.
// .shift() ⚠️

// Los métodos .push() y .pop() insertan al final del array.
// Los métodos .unshift() y .shift() insertan al inicio del array.

const nombre = ["M", "N", "L"];

//añade al final y elimina
console.log(nombre.push("z"));  //Devuelve 4.       Ahora elements = ['M', 'N', 'L', 'z']
console.log(nombre.pop());      // Devuelve 'z'.    Ahora elements = ['M', 'N', 'L']

//añade al inicio y elimina
console.log(nombre.unshift("a"));   //Devuelve 4.       Ahora elements = ['M', 'N', 'L', 'z']
console.log(nombre.shift());        //Devuelve 'a'.    Ahora elements = ['a'. 'M', 'N', 'L']









// -----------------> ejecicios <-----------------
// -------> ejemplo problema <-------
// saluda amigos
const amigos = ["Juan",  "Ana", "Carlos", "Luisa"];

for (var i=0; i<amigos.length; i++ ){
    console.log("Hola " + amigos[i] + "!");
}

//numero mayor 
var numeros = [10, 25, 3, 7, 99, 50];
var maximo = numeros[0];

for (var i= 1; i < numeros.length; i++){
    if(numeros[i] > maximo){
        maximo = numeros[i];
    }
}

console.log(maximo);











let inventario = [
    { nombre: 'Manzanas', cantidad: 100, precio: 0.5 },
    { nombre: 'Naranjas', cantidad: 80, precio: 0.65 },
    { nombre: 'Plátanos', cantidad: 70, precio: 0.55 }
];

// Función para agregar un nuevo producto al inventario
function agregarProducto(nombre, cantidad, precio) {
    inventario.push({ nombre, cantidad, precio });
}

// Función para buscar un producto en el inventario
function buscarProducto(nombre) {
    return inventario.find(producto => producto.nombre === nombre);
}

// Agregar un nuevo producto
agregarProducto('Uvas', 120, 0.75);
agregarProducto('Melon', 25, 20);

// Buscar un producto
let productoBuscado = buscarProducto('Uvas');
console.log(productoBuscado);  // { nombre: 'Uvas', cantidad: 120, precio: 0.75 }

console.log(inventario);


//ejemplo join

const nuevoArray = [1, 2, 3, 4, 5];
const nuevoArray2 = [6];

console.log(nuevoArray);        // [ 1, 2, 3, 4, 5 ]

console.log(nuevoArray.join("2"));  // 122232425
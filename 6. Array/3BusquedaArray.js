// ------------------  Busqueda en ARRAY ------------------
// 
// Método	                            Descripción
// BOOLEAN.includes(element) 	        Comprueba si element está incluido en el array.
// BOOLEAN.includes(element, from) 	    Idem, pero partiendo desde la posición from del array.
// NUMBER.indexOf(element)	            Devuelve la posición de la primera aparición de element. Devuelve -1 si no existe.
// NUMBER.indexOf(element, from)	    Idem, pero partiendo desde la posición from del array.
// NUMBER.lastIndexOf(element)	        Devuelve la posición de la última aparición de element. Devuelve -1 si no existe.
// NUMBER.lastIndexOf(element, from)	Idem, pero partiendo desde la posición from del array.

// -------> Include ¿el elemneto existe? <-------
const elemnetoExiste = ['A', 'B', 'C', 1, 2, 3];

console.log(elemnetoExiste.includes('A'));      //true
console.log(elemnetoExiste.includes(1));        //true
console.log(elemnetoExiste.includes('c'));      //false  
console.log(elemnetoExiste.includes('B', 2));   //flase 'B' NO existe en la posicion 2
console.log(elemnetoExiste.includes('B', 1));   //true 'B' existe en la posicion 1
console.log(elemnetoExiste.includes(1, 3));     //true 1 posicion 3
console.log(elemnetoExiste.includes('A', 0));   //true 'A' en posicion 0


// -------> Buscar la posición (indexOf) <-------

const posicion = [1, 3, 4, 'A', 'B', 'Daniel', 1];

console.log(posicion.indexOf('Daniel'));    //5
console.log(posicion.indexOf(1));           //0
console.log(posicion.indexOf(5));           // -1  -> no existe

console.log(posicion.indexOf('A', 3));      //3 'A' existe en posicion 3
console.log(posicion.indexOf(1, 6));        //6 1 existe en posicion 6
console.log(posicion.indexOf(2, 1));        //-1 NO existe


// -------> Buscar al final (lastIndexOf) <-------
//cuenta de derecha a izquierda?
//hace el conteo de izquierda a derecha

const buscaFinal = [true, false, 'y', 'z', 0, 9, 8, 7];

console.log(buscaFinal.lastIndexOf(7));         // 7
console.log(buscaFinal.lastIndexOf('z'));       // 3
console.log(buscaFinal.lastIndexOf(true));      // 0
console.log(buscaFinal.lastIndexOf(99));        // -1 no existe

console.log(buscaFinal.lastIndexOf(false, 1));  // 1
console.log(buscaFinal.lastIndexOf('z', 3));    // 3
console.log(buscaFinal.lastIndexOf(7, 7));      // 7
console.log(buscaFinal.lastIndexOf(8, 5));      // -1 NO existe el 8 en la posicion 5
console.log(buscaFinal.lastIndexOf('x', 2));    // -1 no existe X en la posicion 2 ni en el arreglo



// -------> Buscar un elemento en un array <-------
const usuario = [
    {name: "Daniel", age: 25},
    {name: "Emiliano", age: 18},
    {name: "Juan", age: 18},
    {name: "Maria", age: 30},
    {name: "Sandra", age: 50},
    {name: "Jorge", age: 35},
    {name: "Bernado", age: 21},
    {name: "Sury", age: 32},
    {name: "Lionel", age: 43},
];

const buscarEdad = (array, searchedAge) => {
    for (let i = 0; i < array.length; i++){
        const elemento = array[i];
        if (elemento.age === searchedAge){
            return elemento;
        }
    }
    return -1;
};

console.log(buscarEdad(usuario, 25));   //{ name: 'Daniel', age: 25 }
console.log(buscarEdad(usuario, 21));   //{ name: 'Bernado', age: 21 }
console.log(buscarEdad(usuario, 18));   // Devuleve el primer elemento que concida con 18
                                        //{ name: 'Emiliano', age: 18 }


// -----------------> funcion find() <-----------------
//lo mismo que la otra funcion

const ReducidoBuscaEdad = (array, searchedAge) =>{
    return array.find(elemento => elemento.age === searchedAge) ?? -1;
}

console.log(ReducidoBuscaEdad(usuario, 25));    //{ name: 'Daniel', age: 25 }
console.log(ReducidoBuscaEdad(usuario, 21));    //{ name: 'Bernado', age: 21 }
console.log(ReducidoBuscaEdad(usuario, 18));    //{ name: 'Emiliano', age: 18 }
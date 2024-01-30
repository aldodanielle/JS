// ------------------   Iteneracion de Objetos ------------------

// la iteneracion son las veces que se repiten un programa

//      Método	                        Descripción
// ARRAY Object.keys(obj) 	            Itera el obj y devuelve sus propiedades o keys.
// ARRAY Object.values(obj) 	        Itera el obj y devuelve los valores de sus propiedades.
// ARRAY Object.entries(obj) 	        Itera el obj y devuelve un  con los pares [key, valor].
// OBJECT Object.fromEntries(array) 	Construye un objeto con un array de pares [key, valor].

// caulquier metodo que usemos nos da como resultado un array


// -------> Convertir un objeto a array <-------
const player = {
    name: "Leo",
    life: 10,
    power: 70,
    talk: function(){
        return "Hola";
    }
};

console.log(Object.keys(player));       //obtenemos un ARRAY con el nombre de las claves (name, life...)
console.log(Object.values(player));     //obtenemos un ARRAY de los valores de las claves (leo, 10, 70...)
console.log(Object.entries(player));    //obtenemos un ARRAY de entradas. con un ARRAY del par clave-valor
                                        // [
                                        //     [ 'name', 'Leo' ],
                                        //     [ 'life', 10 ],
                                        //     [ 'power', 70 ],
                                        //     [ 'talk', [Function: talk] ]
                                        // ]
const ObjetoArray = Object.entries(player);

console.log(ObjetoArray.talk);  //no esta definido

for(let i = 0; i < ObjetoArray.length; i++) {
    if(ObjetoArray[i][0] === "name") {
        console.log(ObjetoArray[i][1]); // Esto imprimirá "Leo" en la consola
    }
}


const animals = ["Gato", "Perro", "Burro", "Gallo", "Ratón"];
Object.keys(animals);     // [0, 1, 2, 3, 4]
Object.values(animals);   // ["Gato", "Perro", "Burro", "Gallo", "Ratón"]
Object.entries(animals);  // [[0, "Gato"], [1, "Perro"], [2, "Burro"], [3, "Gallo"], [4, "Ratón"]]


// -----------------> Convertir un array a objeto <-----------------
const keys = ["name", "life", "power", "talk"];
const values = ["Leo", 100, 35, function(){return "Hola"}];
const entries = [];

for (let i of Object.keys(keys)){       // for...of  -> estructura de datos que recorre un Objeto o Array
    const key = keys[i];
    const value = values [i];
    entries.push([key, value])
}

const user = Object.fromEntries(entries);  
console.log(user);          //{ name: 'Leo', life: 100, power: 35, talk: [Function (anonymous)] }

// -------> forma mas compacta de hacer lo <-------
const keys1 = ["name", "life", "power", "talk"];
const values1 = ["Manz", 99, 10, function() { return "Hola" }];

const entries1 = values1.map((value, index) => [keys1[index], value]);
const userr = Object.fromEntries(entries);



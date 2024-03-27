// ------------------  JSON ------------------
//          JavaScript Object Notation
// formato ligero de datos usualmente son OBJECT o ARRAYS

// ejemplo en 2ejemplo.json
// su estructura es similar a de object
const player = {
    name: "Daniel",
    life: 100,
};

console.log(player);
// -------> Metodos <-------

// Método	                                    Descripción
// 🔨 Parseo (De string a objeto)
//  JSON.parse(str)	                    Convierte el texto STRING str (si es un JSON válido) a un objeto y lo devuelve.
// 🆎 Convertir a texto (De objeto a string)
// JSON.stringify(obj)	                Convierte un objeto OBJECT obj a su representación JSON y la devuelve.
// JSON.stringify(obj, props)	        dem al anterior, pero filtra y mantiene solo las propiedades del ARRAY props.
// JSON.stringify(obj, props, spaces)	Idem al anterior, pero indenta el JSON a NUMBER spaces espacios.




// -----------------> Convertir JSON a objeto <-----------------
const json = `{
    "name": "Daniel",
    "edad": 25
}`;

const user = JSON.parse(json);
console.log(user.name, user.edad);  //Daniel 25
console.log(user);      // { name: 'Daniel', edad: 25 }
console.log(json);      // -> {
                        //     "name": "Daniel",
                        //     "edad": 25
                        // }
//.



// -----------------> Convertir objeto a JSON <-----------------
const datos = {
    name: "Daniel",
    edad: 25,
    ciudad: "México",
    talk: function (){ 
        return "hola";
    }
};

console.log(JSON.stringify(datos));     //{"name":"Daniel","edad":25} -> lo devuleve como String

console.log(JSON.stringify(datos, ["name"]));           //{"name":"Daniel"}
console.log(JSON.stringify(datos, ["name", "edad"]));   //{"name":"Daniel","edad":25}
console.log(JSON.stringify(datos, []));                 //{}
console.log(JSON.stringify(datos, null));               //{"name":"Daniel","edad":25, "ciudad": "México"}



// -----------------> tecer metodo para el usos de espacios <-----------------
const judador = {
    name: "Dani",
    life: 99
};

console.log(JSON.stringify(judador, null, 2));
  // {
  //   "name": "Dani",
  //   "life": 99
  // }
console.log(JSON.stringify(judador, null, 4));
  // {
  //     "name": "Dani",
  //     "life": 99
  // }
console.log(JSON.stringify(judador, ["name"], 1));
  // {
  //  "name": "Dani"
  // }

console.log

// -----------------> read data of a JSON with FETH <-----------------
fetch('./2ejemplo.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

import data from './2ejemplo.json.json';
console.log(data);


const json_file = require("./rutaDelArchivo.json");
const data = JSON.parse(json_file);
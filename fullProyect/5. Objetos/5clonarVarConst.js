// ------------------  Clonando variables o constantes ------------------
// de ingual manera se divide en 2

// 1. Superficial (shallow clone)   -> se realiza una copia de primer nivel y a los demas niveles se hace namas mas referencia
// 2. Profuda (deep clone)          -> realiza una clonacion de una estructura de datos completa


// tenemos la siguiente estructura de datos
const data = {
    name: "Daniel",         // Se clona en superficial y en profundidad
    tired: false,           // Se clona en superficial y en profundidad
    likes: ["css", "javascript", "html", "vue"], // Sólo en profundidad
    numbers: [4, 8, 15, 16, 23, 42]              // Sólo en profundidad
}

//para ver mas a profundida
// https://lenguajejs.com/javascript/objetos/clonar-o-copiar-elementos/ 

// ❌ Esto no realiza una clonación, es una referencia al original
const copy = data;

// ❌ Sólo superficial (Hay que crear objeto con el mismo tipo)
const copy1 = {};
Object.assign(copy, data);

// ❌ Sólo superficial
const copy2 = { ...data };      
//El ... (spread) o el Object.assign() pueden interesarnos si necesitamos un mecanismo rápido de clonación

console.log(copy2);





// -----------------> ✅✅✅✅✅✅ <-----------------
//forma correcta en realizar una clonacion 
// ✅ El truco de JSON funciona, ❌ pero estamos limitados a los tipos de JSON
const string = JSON.stringify(data);
const copy3 = JSON.parse(string);

// ✅ Con Lodash, ten en cuenta que necesitaremos descargar/parsear librería externa
import { cloneDeep } from "lodash-es";
const copy4 = cloneDeep(data);
console.log(copy4);

// ✅ Con structuredClone, ciertos tipos (funciones, DOM) devuelven excepción
const copy5 = structuredClone(data);






// -------> Subnombre <-------




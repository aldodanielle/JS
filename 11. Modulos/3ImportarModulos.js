// ------------------ Importar Modulos  ------------------

// Una vez exportados los modulos, es hora de importarlos paara usarlos en el
// modulo actual (en el archivo) para esto primero tenemos que exportar los datos


//          Forma	                                Descripción
// import { nombre } from "./file.js"	            Importa el elemento nombre de file.js.
// import { nombre as newName } from "./file.js"	I. el elemento nombre de file.js como newName. (RENOMBRA)
// import { n1, n2... } from "./file.js"	        I. los elementos indicados desde file.js.
// import nombre from "./file.js"	                I. el elemento por defecto de file.js como nombre.
// import * as name from "./file.js"	            I. todos los elementos de file.js en el objeto name.
// import "./file.js"	                            Ejecuta el código de file.js. NO importa ningún elemento.
// import { name } from "https://web.com/file.js"	Descarga el fichero e importa el elemento name de su módulo.




// -----------------> Importar Nombrada <-----------------
// esta es la forma mas facil en donde solo necesitamos el nombre el elemento exportado
import { nombre } from './file.js';             // importamos 1 elemento del modulo file.js
import { number, element } from './file.js';    // importamos 2 elementos
import { oldName as newName } from './file.js'; // importamos y renombramos

console.log(nombre);

// -----------------> Importacion por default <-----------------
// este tipo de importacion lo que hace es que buscar el elemento default 
// del archivo en cuestio y lo importa y lo renombra
// en este caso a nombre y no existe el elemento DEFAULT este lo genera como vacio
import nombre from './file.js';



// -----------------> Importacion Masiva <-----------------
// * -> nos importa todos los elementos del modulo X.js
// es obligatorio usar AS y crear el nombre del elemento
import * as module from './file.js';
console.log(module.oldName);


// -----------------> Importacion de codigo <-----------------
// no es muy usada en los framework pero si en los WEB Components
// indicamos que el navegador va a leer y procesar el codigo de ese fichero
import './file.js';


// -----------------> Importaciones Remotas <-----------------
// para acceder a un dominio y descargar o extraer infromacion de el
import { nameModulo } from "https://Aqui/va/tu/url"
// la respuesta puede estar de 3 formas
// Disponibilidad ->        Depende del servidor ya que no esta a nuestro control
// Descarga ->              Para hacer uso de el primero tenemos que descargar el archivo (lento en caso de inestavilidad)
// ECMAScript modules ->    Se hace forzosamente uso de la libreri modulos ESM


// -----------------> Metadatos de Modulos <-----------------
// con el uso se import.meta nos ayudara a saber en que fichero en cuestion nos encontramos
// file.js
import modules from './file.js';

//modules.js
console.log(import.meta);       // { url: "https://dominio.com/module.js" }



// -----------------> Bare imports <-----------------
// importaciones desnudas -> es decir no requieren algun '.','/' o 'https'
// para ser importadas si no que se llaman directamente por el paquete o carpeta 

import { Howler, Howl } from 'howler'
// en vez de utilizar el ./howler.js se manda a llamar directamente 

// cuando se hablara de bare imports
// este se buscar directamente en la carpeta instalra en NPM
// -------> Sub <-------




// -----------------> Importacion CommonJS (legacy) <-----------------
const library = require ('Library');

// este modulo es mas usado en NodeJs
// el require() y module.export -> no son soportado de forma
// nativa por navegadores
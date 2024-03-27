// ------------------ Importacion de modulos ------------------

// Para cargar elementos de MODULOS DE EXPORTACION de
// ficheros externos a el fichero actual
// static import

//              Forma	                            Descripción
// import { nombre } from "./file.js"	            Importa el elemento nombre de file.js.
// import { nombre as newName } from "./file.js"	Importa el elemento nombre de file.js como newName.
// import { n1, n2... } from "./file.js"	        Importa los elementos indicados desde file.js.
// import nombre from "./file.js"	                Importa el elemento por defecto de file.js como nombre.
// import * as name from "./file.js"	            Importa todos los elementos de file.js en el objeto name.
// import "./file.js"	                            Ejecuta el código de file.js. No importa ningún elemento.
// import { name } from "https://web.com/file.js"	Descarga el fichero e importa el elemento name de su módulo.


// -----------------> Importacion con nombre <-----------------
import { nombre } from "./4Import";                 // importamos solo un elemento desde desde el fichero
import {number, element } from "./4Import.js";      // importamos varios elementos
import {edad as newEdad } from "./4Import.js";      // importamos un elemento y lo reNOMBRAMOS

// -----------------> Importación por defecto <-----------------
import nombre from "./4Import.js";              // se importa el elemento por DEFAULT y lo reNOMBRA
//                                                 puede ser una mala practica se recomienda usar la anterior

// -----------------> Importación masiva <-----------------
import * as module from "./4Import.js";         // * indicamos que debemos cargar todos los modulos 
//                                                 de exportacion del fichero indicado

//                                                 obligatorio usar el AS para crear un onjeto y tenga todos
//                                                 los elementos importados

// -----------------> Importación de codigo <-----------------
import "./codigo.js";                           // importa y ejecuta el codigo 

// -----------------> Importación remotas <-----------------
import { ceil } from "https://url/el/dominio/y/o/fichero/a/ocupar.js"; 
//                                              // donde ceil es el nombre de la funcio que ocupamos
// en este caso, estamos descargando desde el dominio unpkg.com la librería lodash.js, 
// desde la cuál importaremos el elemento ceil de su módulo de exportación.


// -----------------> Metadatos de modulos <-----------------
import module from "./4Import.js"
console.log(import.meta);


// main.js
import module from "./module.js";
// module.js
console.log(import.meta);     // { url: "https://dominio.com/module.js" }



// -----------------> Bare imports <-----------------
// "./math.js":     El fichero math.js en la carpeta actual.
// "../math.js":    El fichero math.js en la carpeta padre.
// "/math.js":      El fichero math.js en la raíz del proyecto.
// "https://web.com/math.js": El fichero math.js está alojado en una web.

import carpetaActual from "./file.js";
import carpetaPadre from "../1. Funadmentos/1condicionales.js";
import raizProyecto from "/Users/aldo.lara/Downloads/Img/test/ex.js";
import internet from "https://ejemplo/archivo.js";


// -----------------> Bare imports <-----------------
// importacion simple/libre/bruta       o       importacion desnuda
import { Howler, Howl } from "howler";      // Bare import

// cuando hacemos uso de bare import NOS REFERIMOS  a un archivo de NPM, es decir
// un paquete previamente instaldo en npm 
// ------------------ Import dinamic ------------------

// permite cargar modulos bajo demanda en timpo de ejecucion 
// a diferencia de la statica que se carga desde el principio 
// SOLO se cargan desde que llegan al codigo 

import { nombres } from "./autores.js"  // Static import


import ("./autores.js") 
    .then(data => {
        /* 
            para esta importacion hacemos uso de una PROMESA (.then)
            por lo que podemos decir que se trata de codigo ASINCRONO
        */
    });

// -----------------> DESVENTAJAS <----------------
//     -----------------> de <-----------------
//      -------> importacion Estatica <-------
// - Queremos importar un módulo si se cumple una determinada condición -> Opcion 1
// - Queremos importar un módulo interpolando variables o constantes    -> Opcion 2
// - Queremos importar un módulo dentro de un ámbito específico         -> Opcion 3
// - Queremos importar un módulo desde un script normal (sin type="module")
// - Queremos importar un fichero javascript (sin módulo) y ejecutarlo bajo demanda


// para ello usamos import DINAMICO
// Opción 1: Se carga functions.js si se cumple la condición
if (number > 20){
    import ("./functions.js")
        .then(module => module.func());
}

// Opción 2: Se carga functions.js interpolando la constante
const filename = "function";
import (`./${filename}.js`)
    .then(module => module.func());

// Opción 3: Se carga aditional.js sólo si el usuario hace click en el botón
const button = document.querySelector("button.info");
button.addEventListener("click", () => import (".aditional.js"), { once : true });


// con import DINAMICO -> se trabaja con la promesa devuelta 
// con import STATIC   -> solo se ejecuta asta que llegue a la parte de ese codigo
//                        

















// -----------------> LN <-----------------
// -------> Sub <-------




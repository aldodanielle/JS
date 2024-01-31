// ------------------ Modulos ------------------
// JS nos permite la importacion y exportacion de facmentos de datos entre diferentes
// ficheros JS lo cual nos memite trabajar de forma mas fkexible 
// 
// Funciones -> Clases -> Ficheros (modulos)

// Declaración	Descripción	Artículo en profundidad
// export	    Pone los datos indicados (variables, funciones, clases...) a disposición de otros ficheros
// import	    Incorpora datos (variables, funciones, clases...) desde otros ficheros .js al código actual.
// import()	    Permite importar módulos de forma más flexible, en tiempo real (imports dinámicos).

// export -> para crear el modulo de exportacion, si el modulo ya esiste solo se van añadiendo mas propiedades
// EX modulos1.js
export const saludo = "¡Hola!";

// modulos2.js
export function despedido(){
    return 'Adios';
}


// import -> nos podria ayudar para leer esos elementos exportdos
import { saludo } from './modulos1.js';
import { despedida} from './modulos2.js';

console.log(saludo);        // ¡Hola!
console.log(despedida());   // ¡Adios!


// import() -> para importaciones dinamicas 

let modulo = 'modulos.js'

import(modulo)
    .then((modulo) => {
        console.log(modulo.saludo);     // ¡Hola!
    })
    .catch((err) =>{
        console.log("Ocurrio un error al tratar de cargar el modulo");
    });


// -----------------> LN <-----------------
// -------> Otro Ejemplos <-------
// fichero constante.js
export const numSuerte = 33;

//fichero index.js
import { numSuerte } from './constante.js';

console.log(numSuerte);     // 33


// -----------------> Anteriormente <-----------------
// desde del index se tenia que colocar la exportacion 
<script type="module">
    import { nombre } from "./file.js";
</script>



// si no se agrega el type="module" marca ERROr
/* <script>
    import { nombre } from "./file.js";
</script> */
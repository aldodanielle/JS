// ------------------ N ------------------

// Usados para que el codigo no solo se escriba en un solo documento (archivo)
// para dividir las funciones -> objetos -> modulos


// para usar los modulos lo podemos hacer lo de 3 formas 

// Declaración	    Descripción	
// export	    Pone los datos indicados (variables, funciones, clases...) a disposición de otros ficheros.
// import	    Incorpora datos (variables, funciones, clases...) desde otros ficheros .js al código actual.
// import()	    Permite importar módulos de forma más flexible, en tiempo real (imports dinámicos).



// export   -> modulo de exportacion que contiene datos
// import   -> para leer dichos modulos exportados


// -------> Fichero informacion.js <-------
export const magicNumber = 33;


// -------> Fichero index.js <-------
import { magicNumber } from "./informacion.js";

console.log(magicNumber);   // 33


<script type="module">
    import {nombre} from "/.file.js";
</script>





// -----------------> LN <-----------------
// -------> Sub <-------
// ------------------ Calidad de Codigo ------------------
// linter -> se encargan de examinar el codigo para reviar el codigo y detectar errores de sintaxis
//           codigo incorrecto, malas practicas e incluso a ayudarlo a seguir unas normas de estilo

// ESLint es un linter para JavaScript (personalizable mara el DEV)
// este nos ayuda a seguir unos estanderes y estilos de calidad, 
// favoreciendo la escritura de codigo correcto


// ESLint es totalmente configurable y puedes indicarle que criterios (llamados reglas)
// quieres que utilice

const object = new Object(1, 2, 3 );



// -----------------> Instlacion <-----------------

// se realiza mediate una con configuracion desde la terminal 
// npm init @eslint/config
// en donde nos va arrojando preguntas y devemos selecionar las que creamos o dependiendo de muestro proyecto
// al final nos pide instalar un archivo con la configuracion


import imagen from '../ESLint.PNG';

const imagen = require('../ESLint.PNG');




var img = document.createElement('img');
img.src = '../ESLint.PNG';
document.body.appendChild(img);
// https://lenguajejs.com/javascript/calidad-de-codigo/eslint/ 



// Y como resultado nos da un documento con la configuracion  
import imagen from '../Configuracion.PNG';



//Podemos guardar este fichero con nombre .eslintrc.js en la carpeta raíz de nuestro proyecto 
// y escribir en una terminal el siguiente comando para que nos revise los errores de nuestro 
// código (asumiendo que queremos revisar un archivo llamado index.js):
$ npx eslint src/js/index.js

// También se pueden usar globs como *.js o similares.
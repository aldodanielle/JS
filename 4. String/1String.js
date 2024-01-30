// ------------------ String ------------------
// cadena de texto o variables de texto
// las cadenas tienen 3 tipos comillas, simples ' ', doble " ", backticks ` `.

// ex
// Notación literal (preferida)
const text = "¡Hola a todo!";
const message = "Nuevo mensaje";

// Notación mediante objeto
const test1 = new String("¡Hola a todo!");
const message2 = new String("Nuevo mensaje");



// Propiedad	                Descripción
// .length	    Devuelve el número de carácteres totales del texto.
"Hola".length;    // 4
"Adiós".length;   // 5
"".length;        // 0
"¡Yeah!".length;  // 6

const holaPadrino = "hola compadre";
const saludo = "fierro";
console.log(holaPadrino.length);
console.log(holaPadrino[8]);
console.log(saludo.repeat(3))


// ------------------ Concatenaciones de String ------------------
// ateriormente
const firstWord = "frase";
const secondWord = "concatenada";
console.log("Una " + firstWord + " bien " + secondWord);   // 'Una frase bien concatenada'

// actualmente con el uso de backticks `` para no tener que crear nuevas
// variables lo que nos provocaria un desorden
console.log(`Una ${firstWord} mejor ${secondWord}`);




// ------------------ otros ejemplos ------------------
const magicalWord = `<strong>Magical Word</strong>`;
const template = `
    <div class="container">
        ${magicalWord}
    </div>
`;
// Observa que template incluye el código HTML de magicalWord, 
// algo que quizás no tiene mucho sentido aún, pero que puede cobrar 
// mucho sentido si pensamos en crear funciones reutilizables:
function makeButton (className, text){
    return `<button class="${className}">${text}</button>`;
}

makeButton("primary", "Aceptar");
makeButton("warning", "Eliminar");
console.log(makeButton("waiting", "Esperar"));
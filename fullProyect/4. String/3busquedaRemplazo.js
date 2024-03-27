// ------------------ Coprobacion Busqueda Remplazo ------------------
// Comprobacion -> la mas facil de todas solo busca si existe
// Busqueda     -> Busca y devuelve la informacion encontrada
// Remplazo     -> Busca y remplaza la infrormacion, suele ser mas costoza

// -------> Comprobacion <-------

//      Método	                    Descripción
// .startsWith(text, from) 	        Comprueba si el texto comienza por text.
// .endsWith(text, to) 	            Comprueba si el texto termina por text.
// .includes(text, from) 	        Comprueba si el texto contiene el subtexto text.

const palabra = "emiliano"; 
const frase = "el rápido zorro marrón salta sobre el perro perezoso";

console.log(palabra.startsWith("e"));   //true
console.log(palabra.startsWith("i", 1));   //false existen 2 i
console.log(palabra.endsWith("o"));     //true
console.log(palabra.endsWith("n", 2));  //flase no existe algo que termine con n
console.log(palabra.includes("no"));    //true
console.log(palabra.includes("li", 1));    //true una palabra lleva li


// -------> Busqueda <-------

//      Método	        Descripción
// .search(regexp)	    Busca un patrón que encaje con regexp y devuelve la  posición encontrada.
// .match(regexp)	    Idem a la anterior, pero devuelve las coincidencias encontradas.
// .matchAll(regexp) 	Idem a la anterior, pero devuelve un iterador para iterar por cada coincidencia.

const text = "El gato, el perro y el pato.";
const regexp = /.a.o/g;

console.log(text.search(regexp));   // 3, porque la primera coincidencia ocurre en la posición 3 (gato)
console.log(text.match(regexp));    // ["gato", "pato"], las dos coincidencias encontradas


// .matchAll() es un poco más avanzado, y permite realizar la misma acción que 
// .match() pero devolviendo un iterador, lo que nos permite recorrerlo en un bucle:
const iterator = text.matchAll(regexp);
for (let ocurrence of iterator) {
    console.log(ocurrence);
}
// ['gato', index: 3, input: 'El gato, el perro y el pato.', groups: undefined]
// ['pato', index: 23, input: 'El gato, el perro y el pato.', groups: undefined]



// -------> remplazo <-------
// Método	                        Descripción
// .replace(text, newText)	        Reemplaza la primera aparición del  text por newText.
// .replace(regexp, newText)	    Idem, pero busca a partir de una  en lugar de un .
// .replaceAll(text, newText) 	    Reemplaza todas las apariciones del texto text por newText.
// .replaceAll(regexp, newText) 	Idem, pero busca a partir de una  en lugar de un .

const texto = "Hola gato, ¿eres un perro o eres un pato?";
console.log("texto inicial\n",texto,("\n"))
// Reemplazar la primera ocurrencia
console.log(texto.replace("g", "p"));                     // "Hola pato, ¿eres un perro o eres un pato?"
console.log(texto.replace("g", "p").replace("o", "a"));   // "Hala pato, ¿eres un perro o eres un pato?"

// Reemplazar todas las ocurrencias
console.log(texto.replaceAll("e", "i"));                  // "Hola gato, ¿iris un pirro o iris un pato?"
console.log(texto.replace(/e/g, "i"));                    // "Hola gato, ¿iris un pirro o iris un pato?"



// -------> remplazo all text <-------
const remTodo = "Javascript es un gran lenguaje";

// remplazamos todas las vocas del texto por "i"
console.log(remTodo.replace(/[aeou]/g, "i"));     // 'Jiviscript is in grin lingiiji'



// -------> remplazo como funcion <-------
const tex = "Hola gato, ¿eres un perro o eres un pato?";
const replaceAction = (value) => `=>${value}<=`;

tex.replace(/.a.o/g, replaceAction);
// "Hola =>gato<=, ¿eres un perro o eres un =>pato<=?"

tex.replaceAll("un", replaceAction);
// "Hola gato, ¿eres =>un<= perro o eres =>un<= pato?"
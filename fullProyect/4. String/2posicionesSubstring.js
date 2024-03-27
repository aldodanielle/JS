// ------------------ Posiciones y subString ------------------
// la posicion en donde se encuemtra el subString se empieza a contar desde 0,1,2,2
// los subString que no son otra cosa mas que pequeños fragamentos de un String


// Método	                            Descripción
// .charAt(pos)	                Devuelve el carácter de la posición pos. Similar al operador [].
// .indexOf(text)	            Devuelve la primera posición del texto text.
// .indexOf(text, from)	        Idem al anterior, partiendo desde la posición from.
// .lastIndexOf(text)	        Devuelve la última posición del texto text.
// .lastIndexOf(text, from)	    Idem al anterior, partiendo desde from hacia el inicio.

// Ejemplo de chartArt
const mensaje = "Carnita Asadad";
console.log(mensaje.charAt(5));
console.log(mensaje.charAt());  // Toma el valor default que es 0

console.log(mensaje[5]);
//console.log(mensaje[]);         // ERROR

console.log(mensaje.indexOf("a", 1)); // hace lo opuesto del metodo anterior usando (text, from) o (caracter Desde)
console.log(mensaje.lastIndexOfindexOf("a", 1)); //lo mismo solo que del final al inicio



// ------------------ obteniendo y subString ------------------

//  Método	                        Descripción
// .repeat(num) 	            Devuelve el  repetido num veces.
// .substring(start, end)	    Devuelve el substring desde la posición start hasta end.
// .substr(start, size)	        Devuelve el substring desde la posición start hasta start+size.
// .slice(start, end)	        Idem a .substr() con leves diferencias.

const amigo = "compadre";

console.log(amigo.repeat(2));       //compadercompadre
console.log(amigo.substring(3,8));  // padre
console.log(amigo.substr(3, 5));    
console.log(amigo.slice(0,3));      //


// ------------------ dividir texto en partes o fragciones ------------------

//      Método	                    Descripción
// .split("text")	            Separa el texto en varias partes, usando  text como separador.
// .split(text, limit)	        Idem, pero crea como máximo  limit fragmentos.
// .split(regexp)	            Separa el texto usando la  regexp como separador.
// .split(regexp, limit)	    Idem, pero crea como máximo  limit fragmentos.
const afirmacion = "Fierro pariente";

console.log(afirmacion.split("e"));     //[ 'Fi', 'rro pari', 'nt', '' ]
console.log(afirmacion.split(" "));     //[ 'Fierro', 'pariente' ]
console.log(afirmacion.split(""))       //[ 'F', 'i', 'e', 'r' 'r...]
console.log(afirmacion.split("i", "1"));//[ 'F' ]

let despedida = "Hola ¿Como estas hoy?";
console.log(despedida.split(/\s+/));        //regexp 
console.log(despedida.split(/\s+/, 2));     //regexp limit

console.log("88.12,44.123".split(/[.,]/));    // ["88", "12", "44", "123"] (4 elementos));
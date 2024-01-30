// ------------------ Unicode ------------------
// es el nombre por el que se conoce al sistema moderno de codificación
// de carácteres que se usa en informática algunos ejemplos seria:


// Carácter	Unicode	Decimal	Hexadecimal	Entidad HTML	Unicode
// A	    U+0041	    65	    0x0041	    &#65;       \u{0041}
// M	    U+004d	    77	    0x004d	    &#77;	    \u{004d}
// Z	    U+005a	    90	    0x005a	    &#90;	    \u{005a}
// z	    U+007a	    122	    0x007a	    &#122;	    \u{007a}

const Unicode = "\u{0041}";
console.log(Unicode);       //A


// Método	                        Descripción
// \u{number}	                    Devuelve el carácter unicode representado por el número hexadecimal number.
// String.fromCodePoint(number)	    Devuelve el carácter representado por el número  number.
// .codePointAt(pos)	            Devuelve el valor decimal del carácter de la posición pos del texto.

// -------> Representacion de unicode a JS <-------
const fruta = "Manzana";

console.log(fruta[0]);  //M
console.log(fruta.codePointAt(0));  //77 es la representacion de M en decimal
console.log(fruta.codePointAt(0).toString(16)); // 4d (0x004d es el número hexadecimal de la "M")

console.log(fruta.codePointAt(6));  //97
console.log(fruta.codePointAt(7));  //no hay nada en la posicion 7 de la fruta

// -------> obtener un dijito a parte de decimal<-------
console.log(String.fromCodePoint(67));      //C
console.log(String.fromCodePoint(0x004d));  //M


// -------> emojis <-------
const emocion = "udcbb";
console.log(emocion);

console.log("⚡".split(""));    //[ '⚡' ]
console.log("🚗".length);       //2
console.log(["👨", "👩", "👧", "👦"].join(""));     // "👨👩👧👦"
console.log(["👨", "👩", "👧", "👦"].join(paste));  // "👨‍👩‍👧‍👦"
console.log(["👨", "👨", "👧"].join(paste));        // "👨‍👨‍👧"
console.log(["👩", "👩"].join(paste));              // "👩‍👩"
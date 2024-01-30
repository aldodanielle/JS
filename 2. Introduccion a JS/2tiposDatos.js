var text = "Hola, me llamo Manz";
var number = 42;
var boolean = true;
var notDefined;   // undefined

//--------------------- typeof para ver el tipo de dato que tengo --------------------
console.log(typeof text);       // "String"
console.log(typeof number);     // "Number"
console.log(typeof boolean);    // "Boolean"
console.log(typeof notDefined); // undefined


//--------------------- Con constructor.name podemos obtener el tipo
//--------------------- de constructor que se utiliza
console.log(text.constructor.name);       // String
console.log(number.constructor.name);     // Number
console.log(boolean.constructor.name);    // Boolean
console.log(notDefined.constructor.name); // ERROR, sólo funciona con variables definidas
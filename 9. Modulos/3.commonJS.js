// ------------------ CommonJS ------------------
// En CommonJS, puedes exportar funciones, objetos o valores directamente utilizando module.exports

// otroArchivo.js
const { miFuncion, suma, miObjeto, miValor, nombre, lastname } = require('./3.commonJSexpotacion.js');

miFuncion();
console.log(suma(2, 3));    // 5
console.log(miObjeto);
console.log(miValor);
console.log(nombre);
console.log(lastname);  // undefined -> no esta exportado en el otro archivo
// ------------------ 7 ------------------
// Módulos (Difícil): 
// Crea un módulo que exporte una función para calcular el área de un círculo. 
// Luego, importa este módulo en otro archivo y utiliza la función

//import { calcularAreaCirculo } from './7.1';  // -> marca error por que no esta soportado el import
//impor * as { calcularAreaCirculo } from './7.1';
var calcularAreaCirculo = require('./7.1');


console.log(calcularAreaCirculo(5));    // 78.53981633974483
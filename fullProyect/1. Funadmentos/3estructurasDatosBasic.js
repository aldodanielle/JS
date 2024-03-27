//--------------------- variebles ---------------------
let a;          // Declaramos una variable con nombre "a", pero no le asociamos contenido. (undefined)
let b = 0;      // Declaramos una variable con nombre "b", y le asociamos el número 0.

console.log(b); // Muestra 0 (el valor guardado en la variable "b")
console.log(a); // Muestra "undefined" (no hay valor guardado en la variable "a")

// Método 1: Declaración de variables de forma independiente
let a1 = 3;
let c1 = 1;
let d1 = 2;

// Método 2: Declaración masiva de variables en el mismo let
let a2 = 3, c2 = 1, d2 = 2;

// Método 3: Igual al anterior, pero mejorando la legibilidad del código
let a3 = 3,
    c3 = 1,
    d3 = 2;


//--------------------- reasignacion ---------------------
// Inicializamos la variable "a" al valor 40.
let z = 40; //-> iniciamos la varible con un valor

z = 50; // reasignamos un valor


//--------------------- constante ---------------------
const name = "Manz";
console.log(name);

name = "Paco";
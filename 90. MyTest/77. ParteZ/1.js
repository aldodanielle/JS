// ------------------ 1 ------------------
// Variables y Operadores (Fácil): Escribe un programa que declare dos variables, a y b, y 
// luego intercambie sus valores (es decir, el valor de a se convierte en el valor de b y viceversa).

let a = 4;
let b = 8;

console.log('Antes del intercambio A = ' + a + ', B = ' + b);

let temp = a;
a = b;
b = temp;

console.log(`Despues del intercambio A = ${a}, y B = ${b}`);

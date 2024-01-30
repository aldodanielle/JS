//--------------------- JS ---------------------
// los mas comunes son 
// Undefined--> variable que no a asi declarada 
// Booelan  --> valor logico de 2 valores (true, false)
// Number   --> valores numericos solo valores de 10^53
// String   --> cadenas de texto
// BigInt   -->para valores muy grandes co 10 ^308
// Null     --> solo tiene el valor null
// Object   -->
// Symbol   -->representa valor unico
const valueAsText = "50";
const valueAsNumber = 50;
const convertedValue = Number("50");

console.log(valueAsText);    // "50"
console.log(valueAsNumber);  // 50
console.log(convertedValue); // 50


//--------------------- Typescript ---------------------
const valueAsText1 : string = "50";
const valueAsNumber2 : number = 50;
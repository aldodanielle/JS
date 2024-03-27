// ------------------ Desestructuración de arrays ------------------
// desestructuración -> Separar una estructura
//                      en secciones mas pequeñs

// -------> Destructuración básica <-------
const elements = [5, 2];
const [first, last] = elements;     // first = 5, last = 2
console.log (first, last);          //5 2

const elementsP2 = [5, 4, 3, 2];
const [firstP2, secondP2] = elementsP2;  // first = 5, second = 4, rest = discard

const elementsP3 = [5, 4, 3, 2];
const [firstP3, , thirdP3] = elementsP3; // first = 5, third = 3, rest = discard

const elementsP4 = [4];
const [firstP4, secondP4] = elementsP4;  // first = 4, second = undefined
console.log(firstP4,secondP4);           // 4 undefined



// -------> Intercambion de variables <-------
// Sin desestructuración
let a = 10;
let b = 5;

let aux = a;
a = b;
b = aux;
console.log("Valor de a: " + a + "Valor de b: " + b);


// Con desestructuración
let x = 10;
let y = 5;

[x, y] = [y, x];    // En este caso los arrays se estan utilizando para hacer la operacion de una vez
console.log (y , x);    //y = 10, x = 5


// -------> Spread <-------
//        (Expandir)
function debug(param){
    console.log(param);
}

// O lo que es lo mismo:
const debugP1 = (param) => console.log(param);

const debugP2 = (param) => console.log(...param);
const array = (1, 2, 3, 4, 5);

debugP2(array);     //1 2 3 4 5



// -------> Rest <-------
//        (Agrupar)
const debug = (...param) => console.log(param);
debug(1, 2, 3, 4, 5);
// [1, 2, 3, 4, 5]

// ... significa los elementos que se mandan o espera resibir de tal lado
const elementsP5 = [5, 4, 3, 2];
const [firstP5, ...rest] = elementsP5;  // first = 5, rest = [4, 3, 2]

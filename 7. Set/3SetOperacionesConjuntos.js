// ------------------ Set: Operaciones de conjuntos ------------------
// 4 operaciones
// 1. Unión:        Suma de todos los elementos del conjunto A y el conjunto B.
// 2. Intersección: Es la parte común de los elementos del conjunto A y el conjunto B.
// 3. Diferencia:   Son los elementos del conjunto A QUITANDOLE los comunes del conjunto B.
// 4. Exclusión:    Son los elementos del conjunto A y el conjunto B que NO ESTAN EN AMBOS.


// -----------------> Datos primitivos <-----------------
// -------> Union <-------
const primeraParte = new Set([1, 2, 3, 4, 4, 5, 5]);
const segundaParte = new Set([3, 5, 8, 9, 0, 0]);

const union = new Set([...primeraParte, ...segundaParte]);
console.log(union);         //Set(8) { 1, 2, 3, 4, 5, 8, 9, 0 }






// -------> Interseccion <-------
const interseccion = [...primeraParte].filter(elementos => segundaParte.has(elementos));
console.log(interseccion);  // [ 3, 5 ]

const interseccion2 = new Set(interseccion);
console.log(interseccion2);  //Set(2) { 3, 5 }






// -------> Diferencia <-------
// los de A que no coicidan con B
const diferencia = [...primeraParte].filter(elementos => !segundaParte.has(elementos));
const diferencia2 = new Set(diferencia);

console.log(diferencia2);   //Set(3) { 1, 2, 4 }

// los de V que no coicidan con A
const diferencia3 = [...segundaParte].filter(elementos => !primeraParte.has(elementos));
const diferencia4 = new Set(diferencia3);

console.log(diferencia4);       //Set(3) { 8, 9, 0 }






// -------> Exclusión <-------
const solosPrimeraParte = [...primeraParte].filter(elementos => !segundaParte.has(elementos));
const soloSegundaParte = [...segundaParte].filter(elementos => !primeraParte.has(elementos));

const exclusion = new Set([...solosPrimeraParte, ...soloSegundaParte]);

console.log(exclusion);     //Set(6) { 1, 2, 4, 8, 9, 0 }







// -----------------> Con datos complejos <-----------------
// -------> Cambiamos un el NUMBER a OBJECT <-------
const lenguajesP1 = new Set([
    {name: "JavaScipt"},        // un objeto
    {name: "CSS"},              // dos objetos
    {name: "PHP"},
    {name: "HTML"},             // tres objetos
    {name: "SVG"},              // cuatro objetos
    {name: "Json"}              // cinco objetos
]);

const lenguajesP2 = new Set ([
    {name: "JavaScript", type: "Node"},     // un objeto con una propiedad
    {name: "CSS"},
    { name: "PHP" },
    { name: "Go" },
    { name: "Javascript", type: "Deno" },   // segundo objeto con una propiedad
    { name: "JSON" }
]);


const unionLengaujes = new Set([...lenguajesP1, ...lenguajesP2]);
console.log(unionLengaujes);
// en este caso si se puede hacer una union pero
// pero al ser objetos si se pueden repetir  



const commonElements = [...lenguajesP1].filter(element => lenguajesP2.has(element));
const set = new Set(commonElements);

set.size  // 0

const elements = [
    { name: "Javascript" },
    { name: "CSS" },
    { name: "HTML" },
    { name: "SVG" },
    { name: "JSON" },
    { name: "Javascript", type: "Node" },
    { name: "PHP" },
    { name: "Go" },
    { name: "Javascript", type: "Deno" }
]; 
const firstSet = new Set(elements.slice(0, 5));     // Los primeros 5 elementos
const secondSet = new Set(elements.slice(4));       // Los últimos 5 elementos

const commonElements2 = [...firstSet].filter(element => secondSet.has(element));
const set2 = new Set(commonElements);

set.size  // 1
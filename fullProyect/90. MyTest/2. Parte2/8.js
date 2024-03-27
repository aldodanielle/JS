// ------------------ N ------------------
// Map y operaciones de map: Crea un Map a partir de un array de arrays. 
// Añade un par clave-valor al Map y luego convierte el Map de nuevo a un array de arrays.

let arrayDeArrays = [['clave1', 'valor1'], ['clave2', 'valor2']];
let map = new Map(arrayDeArrays);
// Tu código aquí

arrayDeArrays.constructor.name;     // Array
map.constructor.name;       // Map

map.set('uno', 1);
map.set('uno', 10);     // sobre escribe al set anterior
map.set('dos', 2);      // añade

console.log(map);   // Map(4) { 'clave1' => 'valor1', 'clave2' => 'valor2', 'uno' => 10, 'dos' => 2 }



const nuevoMap = Array.from(map);

nuevoMap.constructor.name;  // Array


// ------------------ 2 ------------------
// Desestructuración de objetos y clonación de objetos: Escribe una función que clone un 
// objeto usando desestructuración.
function clonar(objeto) {
    // Tu código aquí
    const clonar = {...objeto};
    return clonar;
}

const objetoOriginal ={
    auto: "Camioneta",
    marca: "Ford",
    ano: 1998,
    modelo: "Ranger XLT",
};

const objetoClonado = clonarObjeto(objetoOriginal);
console.log(objetoClonado);



console.log(clonar(objetoOriginal));
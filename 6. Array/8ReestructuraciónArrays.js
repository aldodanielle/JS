// ------------------ Reestructuración de arrays ------------------
// para aprovechar los metodo y volver a reestructurar un array
// esto con el fin de recrar un array apartir de que este esta DEESTRUCTURADO


const pair = [3, 4];
// Usando desestructuración + spread
const complete = [1, 2, ...pair, 5];  // [1, 2, 3, 4, 5]

// Sin usar desestructuración
const completo = [1, 2, pair, 5];     // [1, 2, [3, 4], 5]



//ejemplo
const inyeccion = ["☠", "👽👽", '☠']
//usando desestructuracion .spread
const nuevoArray = [1, 2,  ...inyeccion, 3, 4, 5];     //continua el flujo cada dato ocupa un valor
console.log(nuevoArray);       //[1, 2, '☠', '👽👽', '☠', 3, 4, 5 ]
console.log(count  = nuevoArray.length);   //8


//si desestructuracion
const nuevoArray2 = [1, 2, inyeccion, 3, 4, 5];        //continua flujo pero estos ocupa un espacion solo
console.log(nuevoArray2);      //[ 1, 2, [ '☠', '👽👽', '☠' ], 3, 4, 5 ]





// -----------------> tecer metodo para el usos de espacios <-----------------
// -------> Subnombre <-------




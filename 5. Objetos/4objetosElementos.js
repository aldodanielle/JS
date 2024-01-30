// ------------------  Nombre funcionalidad ------------------
// contamos con 2 tipos
// -> Clonar por valor          --> Duplica el contenido
// -> Clonar por referencia     --> Hace la referencia a donde esta el contenido

// -------> C. por valor <-------
// para NUMBER, STRING y BOOLEAN
let valor = 25;

let copiaValor = valor;     //copiamos el valor

console.log(valor);         //25
console.log(copiaValor);    //25

copiaValor = 30;        //alteramos valor copiado

console.log(valor);         //25
console.log(copiaValor);    //30


// -------> C. por referencia <-------
// para ARRAY y OBJECT

let user = {
    nombre: "Daniel"
};

let copiaUser = user;//creamos una supuesta copias
console.log(user);          //{ nombre: 'Daniel' }
console.log(copiaUser);     //{ nombre: 'Daniel' }

copiaUser.nombre = "Lara";  //modificamos la copia

console.log(user);          //{ nombre: 'Lara' }
console.log(copiaUser);     //{ nombre: 'Lara' }
//esto sucede por que como tal no es una copia si no una referencia del original
//asi que al modificarlo este se altera en el original



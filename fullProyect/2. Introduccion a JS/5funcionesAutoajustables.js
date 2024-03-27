// Funciones autoajutables
// estas funciones son ayudan para cuando se ejcutan 
// solo necesitan una funcion anonima encapusalda entre parentesis 


// funcion auto ajustable
(function () {
    console.log("Hi");
    //return "Hola y adios";
})();

//funcion autoejecutable con parametros
(function (){
    //console.log(`¡Hola, ${name}!`);
    console.log('¡Hola, ' + name + '!');
})("Aldo")



// Ten en cuenta, que si la función autoejecutable devuelve algún valor 
// con return, a diferencia de las funciones por expresión, en este caso 
// lo que se almacena en la variable es el valor que devuelve la función autoejecutada:
const f = (function (name) {
    return `¡Hola, ${name}!`;
})("Manz");

  f; // '¡Hola, Manz!`
  typeof f; // 'string'
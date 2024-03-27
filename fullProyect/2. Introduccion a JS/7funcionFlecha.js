// las funciones flecha => o  Arrow functions (fat arrow)
// Básicamente, se trata de reemplazar eliminar la palabra function y añadir => antes de abrir las llaves
// algunas ventjas: 
// - Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
// - Automáticamente se hace un return de esa única línea, por lo que podemos omitir también el return.
// - En el caso de que la función no tenga parámetros, se indica como en el ejemplo anterior: () =>.
// - En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>.
// - En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
// - Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}).

const saludo = function(){
    return "funcion tradicional";
};

const flecha = () => {
    return "funcion flecha";
};


// imprime el nombre de la contante
console.log(saludo);
console.log(flecha);

// imprime lo que realiza la constante
console.log(saludo());
console.log(flecha());



// en fun2 es la simplificacion del ejemplo anterior 
const func1 = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"

const func2 = (e) => e + 1;     // 1 parámetro: Devuelve el valor de e + 1
const func3 = (a, b) => a + b;  // 2 parámetros: Devuelve el valor de a + b



console.log(func1());
console.log(func2());
console.log(func3());

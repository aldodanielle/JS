// ------------- CALLBACK -------------
// A grandes rasgos, un callback es pasar una función B por parámetro a 
// una función A, de modo que la función A puede ejecutar esa función B 
// de forma genérica desde su código, y nosotros podemos definirlas desde 
// fuera de dicha función:


// ------------- llamar a una funcion desde otra funcion -------------
// fB = Función B (callback)
const fB = function () {
    console.log("Función B ejecutada.");
};

// fError = Función Error (callback) 
const fError = function() {
    console.log("Error");
};

// fA = function A
const fA = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
};

fA(fB, fError); // Si ejecutamos varias veces, algunas darán error y otras no






// ------------- otro ejemplo de callback mas corto -------------
// fA = Función A
const fA2 = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
};

fA2(
    function () {
        console.log("Función B ejecutada.");
    },
    function () {
        console.error("Error");
    }
);




// ------------- otro ejemplo de callback -------------
// Un callback es una función que se pasa como argumento a otra función. 
// Esta función “callback” luego se invoca dentro de la función externa para completar alguna acción.
function saludo(nombre, edad, callback1, callback2) {
    let mensaje = `¡Hola, ${nombre}!`;
    let mensajeEdad = `Tengo tengo ${edad} años`;
    callback1(mensaje);
    callback2(mensajeEdad);
}

let userIngesaName = 'Daniel';
let userIngesaAge = 25

saludo(userIngesaName, userIngesaAge, function(mensaje) {
    console.log(mensaje);  
}, function(mensajeEdad){
    console.log(mensajeEdad);
});
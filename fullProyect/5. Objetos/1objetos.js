// ------------------  Object ------------------
// casi todo lo que usamos en JS son objetos
// 1.- Variable especial que posee mas varibles en su interior
const objeto = new Object();    // Evitar esta sintaxis en Javascript (no se suele usar)




// -------> Declaracion de un object <-------
const object = {}; //objeto vacio

const usuario ={
    nombre: "Daniel",       //las varibles dentro del objetos se llama: prodiedades
    apellido: "Lara",       //Obejto -> varibles ->propiedades
    edad: 25,
};

// Notación con puntos (preferida)
console.log(usuario.nombre);        //Daniel
console.log(usuario.nombre, usuario.edad);

// Notación con corchetes (NO muy usada)
console.log(usuario["nombre"]);      //Daniel

// -------> añadimos mas propiedad una vez creado <-------
// FORMA 1: A través de notación con puntos
usuario.genero = "M";       //M
usuario.telefono = 9999;    //99

// FORMA 2: A través de notación con corchetes
usuario["userID"] = 24;                     //24
usuario["correo"] = "super@usuario.com";    //


console.log(usuario.genero, usuario.telefono);
console.log(usuario.userID, usuario.correo);




// ------------------> Metodos del Objeto <-----------------
const user = {
    nombre: "Daniel",
    idiomas: {
        español: "Hhola",
        ingles: "Hi",
        italiano: "ciao",
    },
    talk: function() {return "Hola";}
};

console.log(user.idiomas.italiano);
console.log(user.talk());



// ------------------> Objeto con toString <-----------------
// toString -> para convertir un objeto a una cadena
const nuevoObjeto ={};
console.log(nuevoObjeto.toString());    //[object Object]

const number = 52;
console.log(number.toString());     //"52" -> como String y no como numero

const booleano = true;
console.log(booleano.toString());   //"true"

const number1 = 42.5;
number1.toString();          // Devuelve "42.5" (Método de variables de tipo Object)
number1.toLocaleString();    // Devuelve "42,5" (Método de variables de tipo Object)
number1.toFixed(3);          // Devuelve "42.500" (Método de variables de tipo Number)



// ------------------> Objeto con toString <-----------------
const player = {
    name: "Aldo",       // Nombre del jugador
    life: 4,            // Cantidad de vida actual
    totalLife: 6,       // Máximo de vida posible
    toString: function() {
        return `${this.name} (${this.life}/${this.totalLife})`;
    }
};

console.log("Mi personaje es: " + player);
console.log("Mi personaje es: " + player.name + " life: " + player.life + " total Life:" + player.totalLife);
// ------------------ Metodos de clase ------------------
// Los metodos no son mas que una FUNCION
// que  viven dentro de una clase

// funcion unica
function hablar (){
    return '¿Hola!';
}

// funcion corta recomendada
class Animal{
    hablar() {
        return '¡Cuak!'
    }
}

// froma larga
class Animal2 {
    hablar = function(){
        return '¡Cuack!'
    }
}


// creamos una instancia u objeto
const pato = new Animal();
console.log(pato.hablar());      // ¡Cuack!


// otra instancia u objeto
const donald = new Animal();
console.log(donald.hablar());    // ¡Cuack!



// -----------------> Contructor de clases <-----------------
// metodo que se ejecuta de manera auntomatica cuando se hace 
// una nueva instancia solo UN CONSTRUCTOR por clase

class Animal {
    constructor(){
        console.log ('HA nacido un nuevo pato. 🦆');
    }

    hablar(){
        return '¡Cuack!'
    }
}

// creacion de una instancia/objeto
const nuevoPato = new Animal();     // HA nacido un nuevo pato. 🦆 --> se ejecuta el contructor de manera implicitamente
nuevoPato.hablar();                 // ¡Cuack!


// -----------------> Metodo Estatico <-----------------
// no requieren crear una instancia
// NO es normal que se haga uno ellos 
// este metodo solo es usa elementos de que son Esaticos
class jugador{
    static despedirse(){
        console.log('¡Adios!');
    }

    hablar(){
        console.log('¡Hola!');
    }
}

// SIN instancia
jugador.despedirse();   // ¡Adios!
//jugador.hablar();       // jugador.hablar is not a function --> ERROR

// CON instancia
const nuevoJugador = new jugador();

nuevoJugador.despedirse();      // nuevoJugador.despedirse is not a function --> ERROR es static
nuevoJugador.hablar();          // HOLA



// -------> Inicializacion estatica <-------
// class static initialization block se ejecuta SE DECLARA LA VARIABLE
// contructor se ejecuta cuando se CREA el objeto


class Animal {
    static{
        console.log('Bloque inicializado');
    }

    constructor(){
        console.log('Contructor ejecutado');
    }
}
// solo ejeuctamos la clase
// <-- AQUI mandaria bloque iniciado

const nuevo = new Animal(); //AQUI ya se ejecuta el contructor



// -----------------> Metodo Estatico <-----------------
// -------> Sub <-------

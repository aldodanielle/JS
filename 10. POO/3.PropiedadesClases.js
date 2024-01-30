// ------------------ Propiedades de Clase ------------------

// Las clases siendo Estructuras para AGUARADAR y ALMACENAR infromacion
// tiene variables que viven dentro de la clase (tambien llamado estado)
// denominada PROPIEDADA o PROPIEDAD DE CLASE


class Personaje {
    name;           // Propiedad sin definir
    type = "Player";// P. definida
    lifes = 5;      // P. definida con 5 
    energy = 10;    // P. definida con 10
}

// -------> Buenas Practicas <------
// Tradicionalmente estas estan definidas dentro del contructor y no fuera de ella

// de esta forma tambien se puede encontra por que al final de cuentas cuando se
// carga la clases se ejecuta en automatico el constructor
class Personaje {
    constructor(){
        this.name;
        this.type = "Player";
        this.lifes = 5;
        this.energy = 10;
    }
}


class Personaje{
    name;
    type = "player";
    lifes = 5;
    energy = 10;

    constructor(name, lifes = this.lifes){
        this.name = name;
        this.lifes = lifes;
        console.log(`¡Bienvenido/a ${name}!`);
        console.log("Tienes: " + lifes + " vidas ");
    }
}

const mario = new Personaje("Mario");   //¡Bienvenido/a Mario!
console.log(mario)                      //Personaje { name: 'Mario', type: 'player', lifes: 5, energy: 10 }


// -----------------> Visibilida P <-----------------
// Desde donde podemos leer las propiedades (Variables)

// Nombre	    Sintaxis	            Descripción
// P.Pública	name o this.name	    Se accede a la P. desde dentro y fuera de la clase.
// P.Privada	#name o this.#name	    Se accede a la P. sólo desde dentro de la clase.


// -----------------> Visibilida P <----------------- por defecto
class personaje {
    name;
    energy = 5;

    constructor(name){
        this.name = name;
    }
}

const MarioBros = new personaje("Luigi");
console.log(MarioBros);         // personaje { name: 'Luigi', energy: 5 }

MarioBros.name;                 // Luigi -> se accede desde afuera de la clase
MarioBros.name = "Evil Luigi";  // Modificamos por que tenemos acceso
MarioBros.name;                 // Evil Luigi -> modifico desde fuera

console.log(MarioBros.name);


// -----------------> Privada <-----------------
class personaje{
    #name;
    energy = 9;

    constructor(name){
        this.#name = name;
    }
}

const player = new personaje("Princesa Peach");     // Personaje { energy: 11 }

player.name;    // undefined -> es incorrecto por que lleva #

player.#name;   // undefined Nota: la compilacion nos lo marac error (NO nos deja AVANZAR)
player.#name = "Mario Malo";    // NOTA: es privado no se puede acceder
console.log(player.#name);

mario.name = "Evil Mario";      // funciona pero no deja hemos creado esta propiedad de NAME sino que es #NAME

console.log();


// -----------------> Visibilida P <-----------------
// -------> Sub <-------
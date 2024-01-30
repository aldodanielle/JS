// ------------------ Propropiedades Ambitos de Clases ------------------

// Ambitos de Clase y Ambitos de Metodos

// el uso de let y const solo existen en el metodo en cuestion
// --------------------------- Ambito METODO ----------------------------
class Personaje {
    constructor (){
        const name = "Daniel";     // solo vive dentro el constructor
        console.log("Constructor: " + name);
    }

    method(){
        console.log("Metodo: " +name);  // no podemos acceder 
    }
}

const c = new Personaje();  // 'Constructor: Daniel'

c.name;     // undefined
c.method;   // 'Metodo: '

console.log();

// --------------------------- Ambito CLASE ----------------------------
class Personaje {
    name = "Daniel";

    constructor(){
        this.name = "Aldo";
        console.log("Constructor: " + this.name);
    }

    metodo(){
        console.log("Metodo: " + this.name);
    }
}

const player = new Personaje();  // Constructor: Aldo

console.log(player.name);       // Aldo
console.log(player.metodo());   //Aldo


// -----------------> )LN <-----------------
// -------> Sub <-------

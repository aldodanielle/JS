// ------------------ Propiedades Computadas ------------------


// -----------------> get (getters) <-----------------
// nos permite hacer pequeas modificaciones sobre propiedades ya existentes
// en lugar de volver el numero que tiene energy en NUESTRO CASO

// Getters: Los métodos getter se utilizan para acceder a las propiedades de un objeto
class Personaje{
    name;
    energy;

    constructor(name, energy = 3){
        this.name = name;
        this.energy = energy;
    }

    get status(){   // Obtiene y modifica
        return '⚡'.repeat(this.energy);
    }
}

const mario = new Personaje("Luigi");
console.log(mario.energy);  // 3
console.log(mario.status);  // ⚡⚡⚡



// -----------------> set (setters) <-----------------
// Estas propiedades computadas nos pueden venir muy bien cuando queramos modificar 
// ligeramente ciertos elementos de una forma automática y organizada.

// Setters: Los métodos setter se utilizan para cambiar los valores de un objeto
class Personaje {
    name;
    energy;

    constructor(name, energy = 10){
        this.name = name;
        this.energy = energy;
    }

    get status(){
        return '🍩'.repeat(this.energy);
    }

    set status(donas){
        this.energy = donas.length;
    }
}

const homero = new Personaje("Homero");
console.log(homero);

homero.energy;              // 10
homero.status = '🍩🍩🍩';

homero.energy;              // 6
homero.status;              // 🍩🍩🍩




// -----------------> EX <-----------------
// GET -> accede            SET -> modifica

class estudiante {
    name;
    calificacion;

    constructor(name, calificacion){
        this.name = name;
        this.calificacion = calificacion;
    }

    // getter
    get obtenerNombre(){
        return this.name;
    }

    //setter
    set nombre(nuevoNombre){
        nuevoNombre = nuevoNombre.trim();
        if(nuevoNombre === ''){
            throw 'El nombre no puede estar vacio'
        }else{
            this.name = nuevoNombre;
        }
    }
}

const newEstudiante = new estudiante("Juan", 9);
console.log(newEstudiante.calificacion, newEstudiante.name);


newEstudiante.name = 'Pedro';
newEstudiante.calificacion = 10;
console.log(newEstudiante.name, newEstudiante.calificacion);
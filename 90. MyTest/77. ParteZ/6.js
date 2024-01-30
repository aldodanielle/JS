// ------------------ 6 ------------------
// Clases y Herencia (Intermedio): Reescribe el ejercicio anterior utilizando clases de ES6.

class Animal{
    constructor(name){
        this.name = name;
    }

    saludar(){
        return `Hola soy ${this.name}`
    }
}

class Perro extends Animal{
    constructor(name, raza){
        super(name);
        this.raza = raza;
    }

    ladrar(){
        return '¡Guau guau!'
    }
}

const nuevoPerro = new Perro('Filo', 'Pastor');

console.log(nuevoPerro.saludar());  // Hola soy Filo
console.log(nuevoPerro.ladrar());   // ¡Guau guau!

console.log(nuevoPerro.Perro);
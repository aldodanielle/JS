// ------------------ 5 ------------------
// Herencia de Prototipos (Intermedio): 
// Utiliza la herencia de prototipos para crear una clase Perro que herede de una clase Animal.

// Clase Animal
function Animal(name){
    this.name = name;
}

Animal.prototype.saludar = function(){
    return 'Hola soy ' + this.name;
}

// Clase Perro
function Perro(name, raza){
    Animal.call(this, name);
    this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.ladra = function(){
    return '¡Guau guau!';
}

// Crear una nueva instancia de Perro
var miPerro = new Perro("Fibo", "Labrador");

console.log(miPerro.saludar());     // Hola soy Fibo
console.log(miPerro.ladra());       // ¡Guau guau!
// ------------------ Ejercicio 1 ------------------
// Herencia de Prototipos (Fácil)
// En JavaScript, cada objeto tiene un prototipo interno que puede ser usado para definir 
// propiedades y métodos que serán compartidos entre instancias.
function Animal (name) {
    this.name = name;
}

Animal.prototype.saludar = function(){
    return `Hola soy ${this.name}`;
}

let dog = new Animal('Don Refugio Acasio 👨');
console.log(dog.saludar());   // Hola soy Don Refugio Acasio 👨


// ------------------ Ejercicio 2 ------------------
// Herencia Pseudoclásica (Intermedio)
// Este método utiliza la propiedad PROTOTYPE de una función constructora para heredar 
// propiedades y métodos.
function Animal(name){
    this.name = name;
}

Animal.prototype.saludar = function() {
    return `Hola soy ${this.name}`;
}

function Perro (nombre, raza){
    Animal.call(this, nombre);
    this.raza = raza;
}

Perro.prototype = Object.create (Animal.prototype);

let perro = new Animal ('Rex', 'Labrador');
console.log(perro.saludar());


// -----------------> Ejercicio 3 <-----------------
// Herencia basada en Clases (Difícil)
// Con la introducción de ES6, JavaScript ahora soporta la herencia basada en clases 
// al igual que otros lenguajes de programación orientados a objetos.
class Animal{
    constructor(name){
        this.name = name;
    }

    saludar(){
        return `Hola mi nombre es: ${this.name}`;
    }
}

class Perro extends Animal{
    constructor(name, raza){
        super(name);
        this.raza = raza;
    }
}

let nuevoPerro = new Perro('Panfilo', 'Pastor Australiano');
console.log(nuevoPerro.saludar());



// -----------------> 444 <-----------------
// uso de prototype y call
function Animal(name){
    this.name = name;
}

Animal.prototype.saludar = function(){
    return `Hola soy ${this.name}`;
}

function Perro(name, raza){
    Animal.call(this, name);
    this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);

function Gato (name, color){
    Animal.call(this, name);
    this.color = color;
}

Gato.prototype = Object.create(Animal.prototype);

let newPerro = new Perro('Fox', 'Chihuahua');
console.log(newPerro.saludar());

let newGato = new Gato('Michi', 'cat');
console.log(newGato.saludar());



const name = '2';
console.log(name.indexOf);
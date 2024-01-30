// ------------------ Clases ------------------

// Se podria ver solo como una forma de ORGANIZAR el codigo de forma entendible 
// con el objetivo de SIMPLIFICAR el funcionamiento de nuestro programa

// La clase es al TIPO que pertenece
// El objeto es el elemento final

// ex 
// CLASE animal -> caracteristicas como color, patas, piel, pelo, sonido que produce, etc.
// OBJETO es pato, raton, perro, gato, etc.



// -----------------> Instanciar una clase <-----------------
// Cuando se CREA un nuevo OBJETO basado en un clase

class Animal {};            // Declaracion de una clase (vacia de momento)

const pato = new Animal();  // Instanciar la clase


// -----------------> Miembros <-----------------
// de 2 tipos Propiedades y Metodos 


// Elemento	            Descripción
//  PROPIEDAD
// Propiedad pública	    Se puede acceder desde fuera de la clase.
// Propiedad privada 	    NO se puede acceder desde fuera de la clase.
// Propiedad computada	    Función para acceder a una propiedad con modificaciones (getter/setter).
//  METODO
// Método público	        Me puede ejecutar desde dentro y fuera de la clase.
// Método privado 	        NO se puede ejecutar desde dentro de la clase.
// Constructor	            Método especial que se ejecuta automáticamente cuando se crea una instancia.
// Método estático	        Método que se ejecuta directamente desde la clase, no desde la instancia.
// Inicializador estático 	Bloque de código que se ejecuta al definir la clase, sin necesidad de instancia.



// Las propiedades: a grandes rasgos, VARIABLES dentro de clases
// Los métodos: a grandes rasgos, FUNCIONES dentro de clases

class Animal {
    //Porpiedades
    name = "Garfield";
    type = "cat";

    //metodos
    hablar(){
        return "Odio los lune"
    }
};


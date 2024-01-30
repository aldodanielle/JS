// -----------------> THIS <-----------------
// La palabra clave this se utliza MUCHO dentro de las CLASES
// para hacer REFERENCIA al OBJETO instanciado y NO A LA CLASE

// Tener en cuenta el contexto y CUIDADO de que lo ocupamos en
// donde realmente es

class Animal{
    name;       // Propiedad (variable de la clase sin valor)
//                 A este name hace referenci el this

    constructor(name){
        this.name = name;   // Hacemos referencia a la propiedad NAME del objeto instanciado
//                             y no a la clase Animal
    }
}


// -----------------> EX <-----------------
class Animal {
    name;
    type;
    sound;

    constructor(name, type, sound){     // el contructor nos ayuda para inicializar y decirque las vamos a ocupar sin el no se pueden ocupar
        this.name = name;
        this.type = type;
        this.sound = sound;
    }

    // nuevo metodo para realizar el mutrar el sonido
    makeSound(){
        console.log(this.sound);
    }
}
// -------> ADD instancias <-------
let cat = new Animal('Gato', 'Mamifero', 'Miau');
cat.name;          // Gato
cat.type;          // Mamifero
cat.makeSound();   // Miau

console.log(cat);               // Animal { name: 'Gato', type: 'Mamifero', sound: 'Miau' }



// -----------------> conexto <-----------------
function hello() {
    return this;
}

hello();                      // Window -> una funcion no un OBJETO al que se hace referencia
const object = { hello }      // Metemos la función dentro del objeto
object.hello() === object;    // true


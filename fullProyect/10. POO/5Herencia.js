// ------------------ Herencia de Clases ------------------
// se denomina HERENCIA DE CLASE cuando una CLASE HIJA hereda TODAS
// las PROPIEDADES y metodos de una CLASE PADRE

// SOLO las que necesita


// Clase padre
class Formas{
    constructor(){
        console.log('Soy una forma geometica');
    }
}

// Clase Hija
class Cuadrado extends Formas{
    constructor(){
        super();    // funcion especial que manda a LLAMAR al CONSTRUCTOR de la clase padre
        console.log("Soy un cuadrado");
    }
}

const cuadrado1 = new Cuadrado();   // Soy una forma geometica
//                                     Soy un cuadrado


// ------------------> Meodo Super <-----------------
// -------> tambien conocido domo Superclase <-------
// se encarga de LLAMARA al CONSTRUCTOR de la clase padre
// FUNCIONA en cascada primero ya ma al construtor de Padre y despues el hijo

// -------> Clase Padre <-------
class Forma {
    type = "Geometrica";
    color = "Verde";

    constructor(){
        console.log("Constructor Padre Finalizado");
    }

    show(){
        console.log(`Soy una forma de tipo ${this.type} y de color ${this.color}`);
    }

    setColor(color){
        this.color = color;     // Para usar This en esta funcion se necesiata SI o SI declara los CONSTRUCTORES 
    }
}

// -------> Clase Hija <-------
class cuadrado extends Forma{
    type = "cuadrada";

    constructor(){
        super();
        console.log("Constructor Hijo Finalizado")
    }
}

const c1 = new cuadrado();  // Constructor Padre Finalizado -> Constructor Hijo Finalizado
c1.show();                  // Soy una forma de tipo cuadrada y de color Verde

const c2 = new cuadrado();  //Constructor Padre Finalizado -> Constructor Hijo Finalizado 
c2.setColor("Rojo");
c2.show();                  // Soy una forma de tipo cuadrada y de color Rojo



// -----------------> Acceder M. Padre <-----------------
// -------> Sub <-------
class padre{
    soloPadre(){
        console.log("Tarea en el Padre...");
    }

    padreHijo(){
        console.log("Tarea en el padre......");
    }

    sobreHijo(){
        console.log("Tarea en el Padre..........")
    }
}

class hijo extends padre{
    padreHijo(){
        super.padreHijo();
        console.log("Tarea en el hijo");
    }

    soloHijo() { console.log("tarea hijo"); }
    sobreHijo() { console.log("Tatarea en hijo..."); }
}

const h1 = new hijo();
h1.padreHijo();
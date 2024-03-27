// ------------------ Visibilidad de Metodos ------------------
// al igual que las PORPIEDAD de clases existe PUblicas por defecto y Prievadas


// Nombre	        Sintaxis	                Descripción
// Método público	name() o this.name()	    Se accede al método desde DENTRO y FUERA de la clase.
// Método privado	#name() o this.#name()	    Se accede al método sólo desde DENTRO de la clase.



// -----------------> Publica <-----------------
// se accede desde DENTRO como por FUERA
class personaje {
    //name = "Mario";

    constructor(){
        this.hablar();
    }

    hablar(){
        console.log("It's me, Mario!!!");
    }
}

const nuevoP = new personaje(); // It's me, Mario!!!  ---> desde DENTRO
nuevoP.hablar();                // It's me, Mario!!!  ---> desede FUERA




// -----------------> Privada <-----------------
// se accede desde SOLO desde DENTRO
class Personaje{

    constructor(){
        this.#talk();
    }

    #talk(){
        console.log("It's me, Mario!!!");
    }

    // solo un metodo publico que tenga al elemento PRIVATE se puede hacer el llamado
    metodoPublico (){
        this.#talk;
    }
}

const mario = new Personaje();  // It's me, Mario!!! --> desde DENTRO de la clase
mario.#talk;                    // PRIVATE field '#talk' must be declared in an enclosing class
mario.talk;                     // Metodo que no existe


// -----------------> LN <-----------------
// -------> Sub <-------

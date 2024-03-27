// ------------------ Buenas Practicas ------------------



// -----------------------------> 1 <----------------------------
// Las clases se almacenan en fichero individuales y mismo nombre
// Animal.js
export class Animal {
    /* Contenido de la clase */
}

// -----------------------------> 2 <----------------------------
// Para ser uso de la clase IMPORTAMOS el fichero de la CLASE en cuestion
// Y CREAMOS el objeto

// Desde otro archivo ej -> index.js
import { Animal } from "./Animal.js";

const pato = new Animal();

// -----------------------------> 3 <----------------------------
// dependiendo de la complejidad del proyecto podemos ir utilizando
// carpetas como:

// carpeta  Clases -> archivo Animales.js

// "./ProyectoZoo/Clases/Animales.js"




// -----------------------------> 4 <----------------------------
// Nombres
// porpiedades (variables)  -> nombres en sutativos (elemntos, valores, items, etc.)
// Metodos(funciones)       -> nombres de verbos (acciones, operaciones, etc)



// -----------------------------> 5 <----------------------------

// pocas lineas, es decir la necesarias y gustas para que con el 
// futuro no se vuleva compliacado actualizar y/o dificil de realizar
// alguna modificacion

// separamos en 2 Ficheros las clases
// Personaje.js                        Personaje.js                  Vida.js
// -------------                       -------------                 --------

// - Vidas restantes (propiedad)       - Vida (propiedad) ------->   - Vidas restantes (propiedad)
// - Fuerza (propiedad)                - Fuerza (propiedad)          - Energía (propiedad)
// - Energía (propiedad)               - Hablar (método)             - Curar (método)
// - Velocidad (propiedad)             - Disparar (método)
// - Hablar (método)
// - Disparar (método)
// - Curar (método)


//explicacione
// En este ejemplo, hemos separado en una nueva clase Vida en el fichero Vida.js, 
// los conceptos Vidas restantes, Energía y Curar ya que tienen relación entre sí 
// (hacen referencia a la vida del personaje), de modo que ahora en la clase Personaje 
// simplemente tenemos una propiedad que hace referencia a un objeto de esa clase Vida, 
// con sus valores particulares.

// Esto hará que, si el fichero Personaje.js ocupaba demasiadas líneas, consigamos reducirlas, 
// puesto que hemos movido parte de su código a otro fichero, y de paso hemos mejorado mucho 
// nuestro código, ya que ahora está separado en temas más específicos, que son más pequeños y 
// más fáciles de controlar
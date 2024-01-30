// ambito lexico THIS
// This hace referencia en las funciones a lo que realizan en el contexto

const a = function (){
    console.log(this);
};

const b = () =>{
    console.log(this);
};

// console.log(a ());
// console.log(b ());

a();
b();




padre = {
    a: function () {
        console.log(this);
    },
    b: () => {
        console.log(this);
    },
};

padre.a(); // padre 
padre.b(); // Window


// Esta es una diferencia clave que hay que tener bien en cuenta 
// a la hora de trabajar con las funciones flecha. Una buena práctica 
// es utilizar funciones tradicionales como las funciones de primer 
// nivel y, luego, en su interior o en callbacks, utilizar funciones flecha.



// ---------- Ejemplo
let persona = {
    nombre: 'Juan',
    acciones: ['correr', 'saltar', 'nadar'],
    mostrarAcciones: function() {
        // Aquí, `this` se refiere al objeto `persona`
        this.acciones.forEach(function(accion) {
            // En una función normal, `this` no se refiere al objeto `persona`
            // Por lo tanto, esto dará un error
            console.log(`${this.nombre} puede ${accion}`);
        });
    },
    mostrarAccionesConFlecha: function() {
        // En una función de flecha, `this` se refiere al objeto `persona`
        this.acciones.forEach((accion) => {
            // Esto funcionará como se esperaba
            console.log(`${this.nombre} puede ${accion}`);
        });
    }
};

persona.mostrarAcciones();  // Esto dará un error
persona.mostrarAccionesConFlecha();  // Esto funcionará correctamente

let nota = 10;
//console.log("He realizado mi examen.");

// Condición IF anidado
if (nota < 5) {
    calificacion = "Insuficiente";
} else if (nota < 6) {
    calificación = "Suficiente";
} else if (nota < 8) {
    calificacion = "Bien";
} else if (nota <= 9) {
    calificacion = "Notable";
} else {
    calificacion = "Sobresaliente";
}

console.log("He obtenido un", calificacion);


// IF ternario
let nota2 = 4;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
let calificacion = nota < 5 ? "suspendido" : "aprobado";
console.log("Estoy", calificacion);





// If anidado
let notaFinal = 8;
console.log("Finaliza examen");

let calificacionFinal =
    notaFinal < 5 ? "Insuficiente" :
    notaFinal < 6 ? "Suficiente" :
    notaFinal < 8 ? "Bien" :
    notaFinal <= 9 ? "Notable" :
    "Sobresaliente";

console.log("Calificacion obtenida:", calificacionFinal);

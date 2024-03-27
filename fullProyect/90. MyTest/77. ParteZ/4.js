// ------------------ 4 ------------------
// Objetos y Arrays (Intermedio): 
// Crea un objeto estudiante con propiedades como nombre, edad y cursos.
// Luego, escribe una función que añada un nuevo curso al array de cursos del estudiante.

const estudiante = {
    nombre: 'Daniel',
    edad: 25,
    curso: ['Fisica', 'Matematica', 'Ingles']
};

// Función para añadir un nuevo curso
function anadeCurso(nuevoCurso){
    estudiante.curso.push(nuevoCurso);
}

anadeCurso('Español');

console.log(estudiante);
// {
//     nombre: 'Daniel',
//     edad: 25,
//     curso: [ 'Fisica', 'Matematica', 'Ingles', 'Español' ]
// }

function deleteCurso(eliminaCurso){
    estudiante.curso = estudiante.curso.filter(curso => curso !== eliminaCurso);
}

deleteCurso('Ingles');

console.log(estudiante);
// {
//     nombre: 'Daniel',
//     edad: 25,
//     curso: [ 'Fisica', 'Matematica', 'Español' ]
// }
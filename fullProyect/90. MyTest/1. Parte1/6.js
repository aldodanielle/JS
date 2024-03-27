// ------------------ N ------------------
// Crea un objeto que represente un coche, con propiedades como marca, modelo y año.
const autos = {
    camioneta:{
        marca: 'Ford',
        modelo: 'Ranger',
        año: 1998,
        color: 'arena',
        motor: 2.5
    },
    camioneta:{
        marca: 'Chevrolet',
        modelo: 'Lobo',
        año: 2020,
        color: 'Negro',
        motor: 3.0
    },
    auto:{
        marca: 'Nissan',
        modelo: 'T-suro',
        año: 2000,
        color: 'Blanco',
        motor: 1.8
    },
};

console.log(typeof autos);  //object

console.log(autos.auto);    // todo lo de auto
console.log(autos.camioneta.marca);     // Chevrolet

console.log(autos.auto.marca, autos.auto.año);  // Nissan 2000
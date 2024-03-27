// ------------------ N ------------------
// Crea un Map que asocie nombres de colores con sus códigos hexadecimales.


// const coloresPrimarion = new Map[[[#FF0000, 'Rojo'], [#00FF00, 'Verde'], [#0000FF, 'Azul']]];
let colores = new Map();

// colores.Map("rojo", 'FF0000')
// colores.Map("verde", '00FF00');
// colores.Map("azul", '0000FF');

colores.set("rojo", 'FF0000')
colores.set("verde", '00FF00');
colores.set("azul", '0000FF');


console.log(colores.get("azul"));
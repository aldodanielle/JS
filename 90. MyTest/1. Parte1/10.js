// ------------------ N ------------------
// Escribe una función que tome un string y devuelva un Map con el recuento de cada palabra en el string.

function contarPalabras(str) {
    let palabras = str.split(' ');
    let recuentoPalabras = new Map();

    for (let palabra of palabras) {
        if (recuentoPalabras.has(palabra)) {
            recuentoPalabras.set(palabra, recuentoPalabras.get(palabra) + 1);
        } else {
            recuentoPalabras.set(palabra, 1);
        }
    }
    return recuentoPalabras;
}

console.log(contarPalabras("Hola como esta tu dia? Alo"));


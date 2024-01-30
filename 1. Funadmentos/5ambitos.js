// Ámbito global: Existe a lo largo de todo el programa o aplicación.
// Ámbito local: Existe sólo en una pequeña región del programa.
// los podemos localizar facilmente por los {}

//--------------------- global ---------------------
console.log(e); 
let e = 40;
console.log(e);  // 40 (existe porque ya se ha inicializado en la línea anterior)


//--------------------- local ---------------------
let a = 1;
console.log(e1);  // no existe e1 por que e1 solo exist dentrp del if

if (a == 1) {
    let e1 = 40;
    console.log(e1);   // 40, existe
}
console.log(e1);  // Uncaught ReferenceError: e is not defined



// Utilizamos let
console.log("\nuso de let ");
console.log("Antes: ", p);          // En este punto, p no está definida
for (let p = 0; p < 3; p++) {
  console.log("Valor de p: ", p);   // Aquí, p estará definida como 0, 1, 2
}
console.log("Después: ", p);        // En este punto, vuelve a no estar definida


//Utilizamos var
console.log("\nuso de var ");
console.log("Antes: ", p);          // En este punto, p vale undefined
for (var p = 0; p < 3; p++) {
  console.log("Valor de p: ", p);   // Aquí, p estará definida como 0, 1, 2
}
console.log("Después: ", p);        // Después: 3 (WTF!)






var a1 = 1;
console.log(a1); // Aquí accedemos a la "a" global, que vale 1

function x() {
  console.log(a); // En esta línea el valor de "a" es undefined
  var a = 5; // Aquí creamos una variable "a" a nivel de función

  console.log(a); // Aquí el valor de "a" es 5 (a nivel de función)
  //console.log(window.a1); // Aquí el valor de "a" es 1 (ámbito global)
  console.log(globalThis.a1); // Aquí el valor de "a" es 1 (ámbito global)  
}

x(); // Aquí se ejecuta el código de la función x()
console.log(a1); // En esta línea el valor de "a" es 1
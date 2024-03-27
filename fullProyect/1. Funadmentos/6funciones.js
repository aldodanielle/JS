// Declaración de la función "saludar"
function saludar() {
    // Contenido de la función
    console.log("Hola, soy una función");
}
// Ejecución de la función
saludar();



//--------------------- Declaración de la función tablaDelUno() ---------------------
function tablaDelUno() {
    for (let i = 0; i <= 10; i++) 
    console.log("1 x", i, "=", 1 * i);
}

// Bucle que ejecuta 3 veces la función tablaDelUno()
for (intento = 0; intento < 3; intento++) tablaDelUno();
tablaDelUno();



//--------------------- funciones con parametros ---------------------
function tablaDelUno(hasta) {
    for (let i = 0; i <= hasta; i++) {
      console.log("1 x", i, "=", 1 * i);
    }
}

// Ejecución
tablaDelUno(5); // Tabla del 1 y que solo imprime hasta el numero que coloquemos (5)



//--------------------- funciones con 2 parametros ---------------------
function tablaMultiplicar(tabla, hasta) {
    for (let i = 0; i <= hasta; i++) {
      console.log(tabla, "x", i, "=", tabla * i);
    }
}

// Ejecución
tablaMultiplicar(5, 5); // Tabla del 5 hasta el 5



//--------------------- funciones con 2 parametros por defecto ---------------------
function tablaMultiplicar(tabla, hasta = 3) {
    for (let i = 0; i <= hasta; i++) {
      console.log(tabla, "x", i, "=", tabla * i);
    }
}

// Ejecución
tablaMultiplicar(2);      // Tabla del 2, del 0 al número 3
console.log("");          // imprime un salto y con \n imprime 2 saltos
tablaMultiplicar(5, 5);   // Tabla del 2, del 0 al número 5


//--------------------- devolucion de valores (return) --------------------
function suma(a,b){
    return a + b;                       //se devuelve la suma de la funcion
    console.log("Funcion finalizada");  //todo lo que esta despues del return no se ejecuta
}

const resultado = suma(4,4);
console.log("La suma es: " + resultado);
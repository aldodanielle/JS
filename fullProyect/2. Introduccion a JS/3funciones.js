// Existen 3 tipos de funciones 
// 1. Declaracion           2. Exprecion            3. Como objeto (no recomendado)
//
// tambien contamos con funciones como
// 4. Anonimas(lambda)

//--------------------- decalaracion --------------------
function saludar(){
    return "hola";
}

saludar();          //'hola'
typeof saludar();   //'function'
console.log(saludar(), "\n",typeof saludar());



//--------------------- expresion --------------------
const despedida = function saludo(){
    return "Adios";
}

console.log(despedida());   //mandamos a llamar a la variable 
console.log(saludo());      //arroga erros por que la funcion no existe si no que una variable



//--------------------- objeto --------------------
//Sin embargo, es un enfoque que no se suele utilizar en producción.
const saludar = new Function("return 'Hola como estas?';");
console.log(saludar()); // 'Hola'



//--------------------- anonima --------------------
// son un tipo de funciones que se declaran sin nombre de función 
// y se alojan en el interior de una variable

// Función anónima "saludo"
const saludo = function () {
    return "buenos dias";
};

saludo; // ƒ () { return 'Hola'; }
saludo(); // 'Hola'
console.log(saludo, saludo());
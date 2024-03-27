// ------------------ Convertir texto a numero ------------------
//para esto usamos la funcion de parceo numerico (parseInt)

// numeros enteros
Number.parseInt("42");      // 42
Number.parseInt("42€");     // 42 (descarta todo desde un carácter no numérico)
Number.parseInt("Núm. 42"); // NaN (empieza a descartar en Núm, descarta también 42)
Number.parseInt("A");       // NaN (No se puede representar como un número)
Number.parseInt("");        // NaN (No se puede representar como un número)

console.log(Number.parseInt("Num 42"));



Number.parseInt("42.5");        // 42 (descarta los decimales)
Number.parseInt("88.99€");      // 88 (descarta decimales y resto de caracteres)
Number.parseInt("Núm. 33.5");   // NaN (empieza a descartar en Núm, descarta todo)

console.log(Number.parseInt("Núm. 33.5"));




//numeros decimales
Number.parseFloat("42.5");          // 42.5 (Conserva decimales)
Number.parseFloat("42");            // 42 (El número es entero, convierte a entero)
Number.parseFloat("88.99€");        // 88.99 (Conserva decimales)
Number.parseFloat("42€");           // 42 (El número es entero, convierte a entero)
Number.parseFloat("Núm. 33.5");     // NaN (empieza a descartar en Núm, descarta todo)

console.log(Number.parseFloat("88.99€"));


// conversiones desde binario, octal y hexadecimal
Number.parseInt("11101", 2);    // 11101 en binario, es 29 en decimal
Number.parseInt("31", 8);       // 31 en octal, es 25 en decimal
Number.parseInt("FF", 16);      // FF en hexadecimal, es 255 en decimal

console.log(Number.parseInt("11101", 2)); 



//Conversiones de numero a estring
(16).toString();        // "16"     (lo convierte a string)
(42.5).toString();      // "42.5"   (lo convierte a string)
(26).toString(2);       // "11010"  (26 en decimal, es 11010 en binario)
(80).toString(8);       // "120"    (80 en decimal, es 120 en octal)
(245123).toString(16);  // "3bd83"  (245123 en decimal, es 3bd83 en hexadecimal)


let entradaUsuraio = "10";
console.log((entradaUsuraio).toString()); 


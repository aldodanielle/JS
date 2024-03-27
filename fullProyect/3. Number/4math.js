// ------------------ Math ------------------
// esta funcion o metodo nos ayuda para realizar una gran cantidad de
// operaciones matematicas sin la necesidad de usar bibliotecas externas
// https://lenguajejs.com/javascript/number/objeto-math/

//algunos ejemplo
let aleatorio = Math.random();
let min = Math.min(10, 20, 30, 40, 50)
let max = Math.max(10, 20, 30, 40, 50)
let ex = Math.exp(1)
let raiz = Math.sqrt(16)
let signo = Math.sign(-4)

console.log(aleatorio);
console.log(min);
console.log(max);
console.log(ex);
console.log(raiz);
console.log(signo);


// Constante	    Descripción	Valor
// Math.E	        Número de Euler	                            2.718281828459045
// Math.LN2	        Equivalente a Math.log(2)	                0.6931471805599453
// Math.LN10	    Equivalente a Math.log(10)	                2.302585092994046
// Math.LOG2E	    Equivalente a Math.log2(Math.E)	            1.4426950408889634
// Math.LOG10E	    Equivalente a Math.log10(Math.E)	        0.4342944819032518
// Math.PI	        Número PI o Π	                            3.141592653589793
// Math.SQRT1_2	    Equivalente a Math.sqrt(1/2).	            0.7071067811865476
// Math.SQRT2	    Equivalente a Math.sqrt(2).	                1.4142135623730951


// Método	                        Descripción	                                            Ejemplo
// Math.abs(x)	                Devuelve el valor absoluto de x.	                            |x|
// Math.sign(x) 	            Devuelve el signo del número: 1 positivo, -1 negativo
// Math.exp(x)	                Exponenciación. Devuelve el número e elevado a x.	            ex
// Math.expm1(x) 	            Equivalente a Math.exp(x) - 1.	                                ex-1
// Math.max(a, b, c...)	        Devuelve el número más grande de los indicados por parámetro.	
// Math.min(a, b, c...)	        Devuelve el número más pequeño de los indicados por parámetro.	
// Math.pow(base, exp)	        Potenciación. Devuelve el número base elevado a exp.	        baseexp
// Math.sqrt(x)	                Devuelve la raíz cuadrada de x.	                                    √x
// Math.cbrt(x) 	            Devuelve la raíz cúbica de x.	                                    √3x
// Math.imul(a, b) 	            Equivalente a a * b, pero a nivel de bits.	
// Math.clz32(x) 	            Devuelve el número de ceros a la izquierda de x en binario (32 bits).

Math.abs(-5);             // 5
Math.sign(-5);            // -1
Math.exp(1);              // e, o sea, 2.718281828459045
Math.expm1(1);            // 1.718281828459045
Math.max(1, 40, 5, 15);   // 40
Math.min(5, 10, -2, 0);   // -2
Math.pow(2, 10);          // 1024 (Equivale a 2**10)
Math.sqrt(2);             // 1.4142135623730951 (Equivale a Math.SQRT2)
Math.cbrt(2);             // 1.2599210498948732
Math.imul(0xffffffff, 7); // -7

// Ejemplo de clz32 (count leading zeros)
const x = 1;
"0".repeat(Math.clz32(x)) + x.toString(2);
// Devuelve "00000000000000000000000000000001"


// Obtenemos un número al azar entre [0, 1) con 16 decimales
let z = Math.random();
// Multiplicamos dicho número por el valor máximo que buscamos (5)
z = z * 5;
// Redondeamos inferiormente, quedándonos sólo con la parte entera
z = Math.floor(z);
console.log(z);


// Número al azar entre 0 y 5 (no incluido)
const y = Math.floor(Math.random() * 5);
// Equivalente al anterior
const y1 = ~~(Math.random() * 5);




// ------------------ redondeo ------------------
// Método	            Descripción
// Math.round(x)	    Devuelve x con redondeo (el entero más cercano)
// Math.ceil(x)	        Devuelve x con redondeo superior (el entero más alto)
// Math.floor(x)	    Devuelve x con redondeo inferior (el entero más bajo)
// Math.fround(x) 	    Devuelve x con redondeo (flotante con precisión simple)
// Math.trunc(x) 	    Trunca el número x (devuelve sólo la parte entera)

// Redondeo natural, el más cercano
Math.round(3.75);           // 4
Math.round(3.25);           // 3

// Redondeo superior (el más alto)
Math.ceil(3.75);            // 4
Math.ceil(3.25);            // 4

// Redondeo inferior (el más bajo)
Math.floor(3.75);           // 3
Math.floor(3.25);           // 3

// Redondeo con precisión
Math.round(3.123456789);    // 3
Math.fround(3.123456789);   // 3.1234567165374756

// Truncado (sólo parte entera)
Math.trunc(3.75);           // 3
Math.round(-3.75);          // -4
Math.trunc(-3.75);          // -3








//  Método	            Descripción
//  Math.sin(x)	        Seno de x
//  Math.asin(x)	    Arcoseno de x
//  Math.sinh(x) 	    Seno hiperbólico de x
//  Math.asinh(x) 	    Arcoseno hiperbólico de x
//  Math.cos(x)	        Coseno de x
//  Math.acos(x)	    Arcocoseno de x
//  Math.cosh(x) 	    Coseno hiperbólico de x
//  Math.acosh(x) 	    Arcocoseno hiperbólico de x
//  Math.tan(x)	        Tangente de x
//  Math.atan(x)	    Arcotangente de x
//  Math.tanh(x) 	    Tangente hiperbólica de x
//  Math.atanh(x) 	    Arcotangente hiperbólica de x
//  Math.atan2(x, y)	Arcotangente del conciente de x/y
//  Math.hypot(a, b..) 	Devuelve la raíz cuadrada de a2 + b2 + ...



// Librería	        Descripción	                                                GitHub
// Math.js	        Librería matemática de propósito general.	                josdejong/mathjs
// Fraction.js	    Librería matemática para trabajar con fracciones.	        infusion/Fraction.js
// Polynomial.js	Librería matemática para trabajar con polinomios.	        infusion/Polynomial.js
// Complex.js	    Librería matemática para trabajar con números complejos.	infusion/Complex.js
// Angles.js	    Librería matemática para trabajar con ángulos.	            infusion/Angles.js
// BitSet.js	    Librería matemática para trabajar con vectores de bits.	    infusion/BitSet.js
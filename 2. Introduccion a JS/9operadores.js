// ------------------ Operadores Aritmeticos ------------------

let a = 5, b = 3;
resulsuma = a + b;
resulrestra = a - b;
resulrmulti = a * b;
resulrdivision = a / b;

console.log("valor de a = 4\nvalor de b = 3\n");
console.log("suma de a + b = " , resulsuma);
console.log("resta de a + b = " , resulrestra);
console.log("muliplicaicon de a + b = " , resulrmulti);
console.log("division de a + b = " , resulrdivision);

//Modulo
//
// Módulo	        a % b	        Devuelve el resto de la división de a entre b.
//
const numbers = [10, 20, 30, 40, 50, 60, 70, 80];
for (let i = 0; i < numbers.length; i++) {
    const mod = i % 2;
    console.log(numbers[i], numbers[mod]);
}


//Esponente
const a1 = 2;
const b1 = 5;

console.log(Math.pow(a1, b1));          // 32
console.log(a1 ** b1);                  // 32
console.log(a1 * a1 * a1 * a1 * a1);    // 32



// ------------------ Operadores Asignacion ------------------

//      Nombre	                    Operador	        Descripción
// Asignación	                    c = a + b	        Asigna el valor de la parte derecha (en este ejemplo, una suma) a c.
// Suma y asignación	            a += b	            equivalente a a = a + b.
// Resta y asignación	            a -= b	            equivalente a a = a - b.
// Multiplicación y asignación	    a *= b	            equivalente a a = a * b.
// División y asignación	        a /= b	            equivalente a a = a / b.
// Módulo y asignación	            a %= b	            equivalente a a = a % b.
// Exponenciación y asignación	    a **= b	            equivalente a a = a ** b.


// ------------------ Operadores Unarios ------------------


//      Nombre	       Operador	        Descripción
// Incremento	        a++	        Usa el valor de a y luego lo incrementa.
// Decremento	        a--	        Usa el valor de a y luego lo decrementa.
// Incremento previo	++a	        Incrementa el valor de a y luego lo usa.
// Decremento previo	--a	        Decrementa el valor de a y luego lo usa.
// Resta unaria	        -a	        Cambia de signo (niega) a a.

let z = 0;

while ( z < 5 ){
    //console.log(z, z++, z);
    console.log(z);
    z++;
}



// ------------------ Operadores Comparcion ------------------

// Nombre	                            Operador
// Operador de igualdad ==	            a == b
// Operador de desigualdad !=	        a != b	  
// Operador mayor que >	                a > b	  
// Operador mayor/igual que >=	        a >= b	  
// Operador menor que <	                a < b	  
// Operador menor/igual que <=	        a <= b
// Operador de identidad ===	        a === b	  
// Operador no idéntico !==	            a !== b

let x = 5, y = 5;

if (x != y){
    console.log("true");
}else{
    console.log("false");
}






// ------------------ Operadores Binarios ------------------
// en JavaScript no son muy usados pero existe 

//          Nombre	                Operador
// Operador AND	                    a & b
// Operador OR	                    a | b
// Operador XOR (OR exclusivo)	    a ^ b
// Operador NOT (unario)	        ~a
// Operador LEFT SHIFT	            a << b
// Operador RIGHT SHIFT	            a >> b
// Operador RIGHT SHIFT sin signo	a >>> b
// ------------------ Operadores Avanzados ------------------
// 1. String                2. Logicos                  3. Otros


//  ------------------ String ------------------
// este operador nos ayuda para concatenar numero con texto, datos, ect. cualquier cosa que deseemos

// Ejemplo       Resultado                       Explicación
// ---------     ----------                      ------------
// 2 + 2         // 4      (Número + número)     2 + 2
// "2" + "2"     // "22"   (String + string)     String(2) + String(2)
// "2" + 2       // "22"   (String + número)     String(2) + 2
// 2 + "2"       // "22"   (Número + string)     2 + String(2)
// "a" + 2       // "a2"   (String + número)     String("a") + 2

let a = 5;
let b = "5";
let c = 5;

resultado1 = a + b;
resultado2 = a + c;

console.log("Valor de a: ", a, "Valor de b: ", b, "Valor de c: ", c);
console.log("suma de a + c :", resultado2);
console.log("concatenacion de a + b :", resultado1);

//  ------------------ Operador de suma unaria
// +5              // 5      (El valor ya era numérico y positivo)
// +-5             // -5     (El valor ya era numérico y negativo)
// +"5"            // 5      (El valor era string y pasa a ser numérico)
// +"-5"           // -5     (El valor era string y pasa a ser numérico)
// +"a"            // NaN    (El valor era string pero no es un número)



//  ------------------ Operador logicos ------------------


//              Nombre	                        Operador	                 Descripción
// Operador lógico AND	                        a && b	        Devuelve a si es false, sino devuelve b.
// Operador ternario ?:	                        a ? b : c	    Si a es true, devuelve b, sino devuelve c.
// Operador lógico OR	                        a || b	        Devuelve a si es true, sino devuelve b.
// Operador lógico Nullish coalescing	        a ?? b	        Devuelve b si a es null o undefined, sino devuelve a.
// Operador de asignación lógica nula ??=	    a ??= b	        Es equivalente a a ?? (a = b)
// Operador de encadenamiento opcional ?.	    data?.name	    Permite intentar acceder a una propiedad, aunque su padre no exista.
// Operador unario lógico NOT	                !a	            Invierte el valor. Si es true devuelve false y viceversa.


let x = 3, y = 3, z = 5;
console.log("\n","\n");
console.log("------------------------------------------------------");
console.log("------------------ Operador logicos ------------------");
console.log("------------------------------------------------------");
console.log("Valor de x: ", x, "\nValor de y: ", y, "\nValor de z: ",z, "\n");

//operador logico AND &&
if(x === 3 && y === 3 ){
    console.log("Operador logico AND funciona");
}else{
    console.log("Operador logico AND NO funciona");
}

//operador ternario ? :
const ternario = z === 5 ? "funciona ternario" : "No funciona ternaio";
console.log(ternario);

//operador OR ||
if(x === 3 || y === 3 ){
    console.log("Operador OR funciona");
}else{
    console.log("Operador OR NO funciona");
}

//operador Nullish coalescing ?? (diferente de null o undefined)
if(null ?? x ){
    console.log("Operador Nullish coalescing funciona");
}else{
    console.log("Operador  Nullish coalescing NO funciona");
}

//operador logica nula ??== 
// Sin asignación lógica nula
if (x === null || x === undefined) {
    x = 50;
}
// Con asignación lógica nula
x ??= 50;
console.log("funiona operador logico nulo  ",x);


//operador Encadenamiento opcional (investigar no se entiendo del todo)
const user = {
    name: "Daniel",
    role: "Programador",
    attrs: {
        life: 100,
        power: 25
    }
}

// console.log(user.attrs.power);     // 25
// console.log(user.attrs.life);      // 100
// console.log(user.attrs?.power);     // 25
// console.log(user.attrs?.life);      // 100


//Operador logico NOT
//es un operador unario que se utiliza para negar un valor
if (!z === 5){
    console.log("No funciona operador NOT");
}else{
    console.log("funciona operador NOT")
}
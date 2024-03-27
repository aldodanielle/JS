// ------------------ BigInt ------------------
// para representar numero muy grandes 

const number = 2 ** 53;
number.constructor.name;    // "Number" (Es de tipo Number)
number;       // 9007199254740992
number + 1;   // 9007199254740992
number + 5;   // 9007199254740996
number + 40;  // 9007199254741032
console.log(number);


const number1 = 2n ** 53n;
//number1.constructor.name;    // "BigInt" (Es de tipo BigInt)
//number1;       // 9007199254740992n
//number1 + 1n;  // 9007199254740993n
//number1 + 5n;  // 9007199254740997n
number1 + 40n; // 9007199254741032n
console.log(number1);



// ------------------ BigInt ------------------
const number2 = 5 + 5n;          // ERROR: Cannot mix BigInt and other types, use explicit conversions
const number3 = BigInt(5) + 5n   // 10n (Ok, convierte a BigInt y realiza la operación)
const number4 = 5 + Number(5n);  // 10 (Ok, convierte a Number y realiza la operación)




5n === 5;     // false (el valor es igual, el tipo de dato no)
5n == 5;      // true (el valor es igual)

String(2n ** 53n);        // "9007199254740992" (le quita la n)
(2n ** 53n).toString();   // "9007199254740992" (le quita la n)



// ------------------ Metodos de BigInt ------------------

//          Método	                        Descripción
// BigInt.asIntN(bits, bigNumber)	        Ajusta  bigNumber a  bits (devuelve entero con signo).
// BigInt.asUintN(bits, bigNumber)	        Ajusta  bigNumber a  bits (devuelve entero sin signo).

// Con 2 bits con signo puedes representar desde (-2 hasta 1)
BigInt.asIntN(2, -3n);  // -3n (Representa el -3 con 2 bits) ❌
BigInt.asIntN(2, -2n);  // -2n (Representa el -2 con 2 bits) ✅ 10
BigInt.asIntN(2, -1n);  // -1n (Representa el -1 con 2 bits) ✅ 11
BigInt.asIntN(2, 0n);   // 0n (Representa el 0 con 2 bits) ✅ 00
BigInt.asIntN(2, 1n);   // 1n (Representa el 1 con 2 bits) ✅ 01
BigInt.asIntN(2, 2n);   // -2n (Representa el 2 con 2 bits) ❌
BigInt.asIntN(2, 3n);   // -1n (Representa el 3 con 2 bits) ❌


// Con 2 bits sin signo puedes representar desde (0 hasta 4)
BigInt.asUintN(2, -2n);  // 2n (Representa el -2 con 2 bits) ❌
BigInt.asUintN(2, -1n);  // 3n (Representa el -1 con 2 bits) ❌
BigInt.asUintN(2, 0n);   // 0n (Representa el 0 con 2 bits) ✅ 00
BigInt.asUintN(2, 1n);   // 1n (Representa el 1 con 2 bits) ✅ 01
BigInt.asUintN(2, 2n);   // 2n (Representa el 2 con 2 bits) ✅ 10
BigInt.asUintN(2, 3n);   // 3n (Representa el 3 con 2 bits) ✅ 11
BigInt.asUintN(2, 4n);   // 0n (Representa el 4 con 2 bits) ❌


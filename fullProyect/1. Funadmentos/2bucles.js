//************************* while *************************
console.log("while");
let w = 0;
console.log("valor de la varible =" + w);

// Condición: Mientras la variable contador sea menor de 5
while (w < 5) {
    console.log("Valor de w:", w);
    w = w + 1;
}


//************************* do while *************************
console.log("\ndo...while");
let d = 5;
console.log("valor de la varible =", d);

while (d < 5) {
    console.log("Hola a todos");
    d = d + 1;
}
console.log("Bucle finalizado");


let kilodeCarne = 0;
do{
    console.log("se hizo la carnita asada padrino");
}while( kilodeCarne > 1)

while (kilodeCarne > 1){
    console.log("se hizo la carnita asada padrino");
}console.log("No hizo la carnita asada carita triste");

//************************* for *************************
console.log("\nfor");

for (let f = 0; f < 5; f++) {
    console.log("Goku fase:", f);
}


//************************* Decremento *************************
console.log("\nDecremento");
console.log("\nTengo 5 pesos");

for (let dec = 5; dec > 0; dec--) {
    console.log("Tengo: " + dec + " pesos");
}


//************************* Incremenro multiple *************************
let i2 = 0;
let j2 = 5;

for (i2 = 0, j2 = 5; i2 < 5; i2++, j2--) {
    console.log("Valor de i2 y j2:", i2, j2);
}

//el siguiente codigo es exactamente lo mismo que el de arriba
while (i2 < 0 && j2 < 5) {
    console.log("Valor de i2: ", i2);
    console.log("Valor de j2: ", j2);

    i2++;
    j2--;
}


//************************* salto en iteracion *************************
console.log("\nSalto en Iteracion");
console.log("No muestra el 3");
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log("Valor de i:", i);
}



//************************* interupcion de iteracion *************************
console.log("\nInterupcion de Iteracion");
console.log("cuando es igual a 2");
let II = 0;

while (II < 5) {
    if (II == 2) {
        break;
    }
    console.log("Iteración número ", II);
    II = II + 1;
}

console.log("Bucle finalizado.")
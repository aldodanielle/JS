// una clausura o cierre se define como una función que «encierra» 
// variables en su propio ámbito (y que continúan existiendo aún habiendo terminado la función)

//Clausura: funcion incremento
const incremento = (function (){
    let num = 0;
    return function (){
        num++;
        return num;
    }
})();

console.log(typeof incremento);
console.log(incremento()); //1 = acaba en 1
console.log(incremento()); //2 = como el aterior acaba en 1 pero todavia existe asi que hace un incremento y ahora el reultado es 2
console.log(incremento()); //3 = como el aterior acaba en 2 pero todavia existe asi que hace un incremento y ahora el reultado es 3
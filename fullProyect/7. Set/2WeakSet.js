// ------------------ WeakSet ------------------
// son otro tipo de estructura de conjuntos, muy similar a Set 
// (también impide introducir elementos duplicados)

// SET -> permiten cual quier tipo de datos (estructura de datos poco restrictiva)
// WeakSet -> No permite datos primitivos 

// -------> .set() <-------
const set = new Set([1, 'A', true]);       //ok
const otroset = new Set(['B', 2, { name: "Daniel" }, [2, 30]]);   //ok
console.log(otroset);       //Set(4) { 'B', 2, { name: 'Daniel' }, [ 2, 30 ] }

// -------> WeakSet() <-------
const weakSet = new WeakSet ([1, "A", true]);
console.log(weakSet);   
//                      ERROR: Uncaught TypeError: Invalid value used in weak set
//                      No acepta este tipo dedatos


const weakSet2 = new WeakSet([{ name: "Manz" }, [2, 30]]);      // OK
console.log(weakSet2);


// -----------------> otras caracteristica<-----------------
// si este no estar referenciado ---> sera eliminado para liberar espacio de memoria
let element = { name: "Manz" };

const set2 = new WeakSet([element]);
set2;    // WeakSet({ { name: "Manz" } })

element = null;
set2;    // WeakSet({})



// -----------------> Diferencias <-----------------

//      Característica	                            Set	WeakSet
// Se pueden insertar elementos repetidos	        ❌	❌
// Se pueden insertar elementos primitivos	        ✅	❌
// Si no se usa el elemento, se elimina del set	    ❌	✅
// Se puede convertir a array (es iterable)	        ✅	❌
// Propiedad .size	                                ✅	❌
// Método .add()	                                ✅	✅
// Método .has()	                                ✅	✅
// Método .delete()	                                ✅	✅
// Método .clear()	                                ✅	❌
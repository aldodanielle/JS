// ------------------ WeakMap ------------------
// realiza el CASI el mismo que el MAP pero con algunas pequeñas diferencias
// WeakMap -> NO permite datos primitivos (BOOLEAN, STRING NUMBER)

// -------> Map <-------
const map = new Map([[1, "A"]]);        // ok -->  Map(1) { 1 => 'A' }
const map1 = new Map([[1, "A"], [2, "dos"]]);       // ok -> si funciona
const map2 = new Map([[{id: 1, type: "number"}, "uno"]]);   //ok -> si funciona
const map3 = new Map([[{id: 1, type: "number"}, "uno"], [2, "dos"]]);   //ok
// Map(1) { { id: 1, type: 'number' } => 'uno' }
// Map(2) { { id: 1, type: 'number' } => 'uno', 2 => 'dos' }
console.log(map);


// -------> WeakMap <-------
const weakMap = new WeakMap([[1, "A"]]);    // no Error
const weakMap1 = new WeakMap([[{id: 1, type: "number"}, "uno"]]);   //OK


console.log(weakMap1);


// -----------------> Diferencias <-----------------

//      Característica	                            Map	WeakMap	Object
// Se pueden insertar claves repetidas	            ❌	❌	❌
// Se pueden insertar claves con tipos primitivos	✅	❌	Sólo STRING o SYMBOL
// Si no se usa el elemento, se elimina del map	    ❌	✅	❌
// Se puede convertir a array (es iterable)	        ✅	❌	❌ Object.entries(obj)
// Pueden colisionar algunas claves *	            ❌	❌	✅
// Las claves garantizan un orden por inserción	    ✅	✅	❌
// Propiedad .size	                                ✅	❌	❌ Object.keys(obj).length
// Método .set()	                                ✅	✅	❌ Se usa asignación por clave
// Método .get()	                                ✅	✅	❌ Se usa acceso a la clave
// Método .has()	                                ✅	✅	❌ Object.keys(obj).includes(key)
// Método .delete()	                                ✅	✅	❌
// Método .clear()	                                ✅	❌	❌


// -----------------> Object <-----------------
const nuevoObject = {};
nuevoObject.toString = 42;
console.log(nuevoObject.toString());    // error


// este es otro codigo diferente al de arriba
const ejemploMap = new Map([["toString", 5]]);
console.log(ejemploMap.toString());     // [object Map]
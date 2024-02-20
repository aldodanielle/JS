// ------------------ Metodos tracionales ------------------
// son aqullos que existen en JS lo cual nos dicen que son menos potentes y mas sencillos
// se recomienda usar el getElementById


// Métodos de búsqueda	                    Descripción
// ELEMENT .getElementById(id)	            B. el elemento HTML por su id.
// ARRAY   .getElementsByClassName(class)	B. elementos con la clase class.
// ARRAY   .getElementsByName(value)	    B. elementos con el atributo name a value.
// ARRAY   .getElementsByTagName(tag)	    B. etiquetas HTML tag.



// -------> getElementById <-------
// nos buscar el elemnto porel ID
// una buena pagina bien construida no deberia tenera mas de un ID

const page = document.getElementById("nempleado"); // <input type="text" name="nempleado" id="nempleado"/>


// -------> getElementByClassName <-------
// busqueda por el nombre de la clase 
// puede aver mas de un elemento con el mismo nombre de la clase

const items = getElementByClassName("items");    // [div, div, div]

// si los imprimimos devemos tener esto 
console.log(items[0]);          // Primer item encontrado: <div class="item"></div>
console.log(items.length);      // 3 -> la catidad de items 



// -------> getElementByName <-------
// se encarga de encontrar el elemnto por su nombre 
// pudes aver mas de un elemento
const nicknames = document.getElementsByName("nickname");  // [input]


// -------> getElementByTagName <-------
// se encarga de enontrar el elemento por nombre de la etiquetas 
// puede aver mas de un elemento 
const divs = document.getElementsByTagName("div");         // [div, div, div]


// NOTA:
//      Element -> solo un elemento
//      Elements -> mas de un elemento 







// -----------------> LN <-----------------
// -------> Sub <-------

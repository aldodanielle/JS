// ------------------ Que es el DOM ------------------

// por sus siglas DOCUMENT OBJECT MODEL -> estructura del documento HTML
// esto porque la pagina/documento HTML tiene multiples etiquetas HTML
// anidas una con otras fromando un arbol de etiquetas entre si 

// el DOM es cuando por medio de JavaScript podemos acceder a el modificando 
// el archivo esto añadiendo nuevas etiquetas, modificando o eliminando 

// -----------------> EL objeto DOCUMENT  <-----------------
// Representa el arbol del docuemento y puede ser de 2 tipos principalmete
// element o node (puede aver mas pero principalmete es de estos 2 tipos)
//      element -> es la represetacion generica de la eiqueta HTMLElement
//      node -> puede der un element o un nodo de texto


//              Algunos ejemplos de elemntos HTML

// T. Dato genérico	Tipo específico	    Etiqueta	Descripción	                    + info
// HTMLElement	    HTMLDivElement	    <div>	    Etiqueta divisoria (en bloque).	Elemento <div>
// HTMLElement	    HTMLSpanElement	    <span>	    Etiqueta divisoria (en línea).	Elemento <span>
// HTMLElement	    HTMLImageElement	<img>	    Imagen.	                        Elemento <img>
// HTMLElement	    HTMLAudioElement	<audio>	    Contenedor de audio.	        Elemento <audio>


// -----------------> API nativa de JS <-----------------

//      Capítulo del DOM	                    Descripción
// 🔍 Buscar etiquetas	            M. para buscar elementos en el DOM como .querySelector().
// 🔮 Crear etiquetas	            M. y consejos para crear elementos en el DOM y trabajar con ellos.
// 📩 Gestionar atributos	        Formas de gestionar y modificar atributos HTML de elementos del DOM.
// 🎭 Gestión de CSS	            Uso de la API .classList para manipular clases CSS desde Javascript.
// 🧾 Contenido etiquetas	        Acceder y modificar el contenido de una etiqueta HTML del DOM.
// 🔌 Insertar etiquetas	        Formas de añadir elementos en el DOM, como .appendChild() u otros.
// 🚢 Navegar por etiquetas	        M. para «navegar» a través de la jerarquía del DOM.
// 🧙‍♂️ Animar elementos del DOM	   Aplicar animaciones CSS a elementos del DOM desde Javascript con animate().


// -----------------> Libreria de terceros <-----------------
// el uso de librerias de terceros nos ayudara a mejorar el rendimiento 
// porque no siempre es suficiente trabajar con a bajo nivel


// Librería	    Descripción
// RE:DOM	    Librería para crear interfaces de usuario, basada en DOM.
// D3js	        Librería para creación de gráficas, datos y grafos que puede manipular el DOM.
// UmbrellaJS	Librería para manipular el DOM y eventos
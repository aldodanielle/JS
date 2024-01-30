// ------------------ Manejo de Onjetos. Spread y rest ------------------
//
//      Reestructuracion
//      Copias de objetos
//      Estruras anidadas
//      Desestructuracion
//              Parametros de Desestructuracion
//
// es muy utilizado a la hora de trabajar con JS nativo (o frameworks como React)
// esto devido a que en JS se utilizan muchisimas estructuras de datos

// -------> Separacion <-------
// variables las propiedades que teníamos en el objeto

const user = {
    name: "Daniel",
    edad: 25,
    role: "Programador",
};

const {name, edad, role} = user;

console.log(name);          //Daniel
console.log(edad, role);    //25 progarmador

console.log(user);          //{ name: 'Daniel', edad: 25, role: 'Programador' }
console.log(user.name);     //Daniel

console.log({ name, edad, role });  //{ name: 'Daniel', edad: 25, role: 'Programador' }


//renombramos una propiedad
const {name, edad, role: trabajo} = user;
console.log({name, edad, trabajo});     //{ name: 'Daniel', edad: 25, trabajo: 'Programador' }

//tambien podemos colocarlos con un valor edifido por default
const {name, edad = 18, role = "normal user"} = user;

console.log({name, edad, role});


// -----------------> Reestructurando nuevos objetos <-----------------
const player = {
    nombre: "El viejo Daniel",
    rol: "guia",
    life: 100,
};

const masCarateristicasPlayer ={
    ...player,
    life : 50,
    power: 80,
    tecnica: "saviduria",
};

console.log(masCarateristicasPlayer);
// {
//     nombre: 'El viejo Daniel',
//     rol: 'guia',
//     life: 50,
//     power: 80,
//     tecnica: 'saviduria'
// }


// -----------------> Haciendo copias de objetos <-----------------
const personaje = {
    nombre: "Comandante",
    role: "Destructor",
    vida: 100,
    habilidades: ["vuela", "super fuerza", "regenera"],
};

const actualizacionPeronaje = {
    ...personaje,
    vida: 90,
    power: 130,
};

console.log(actualizacionPeronaje);     //imprime todo
console.log(personaje.habilidades);     //imprime el array de habilidades
console.log(actualizacionPeronaje.habilidades);// imprime el array de habilidades

actualizacionPeronaje.habilidades[0] = "camina";
console.log(actualizacionPeronaje.habilidades);     //se remplaza el vuela x camina
console.log(personaje.habilidades);     //arroga el mismo resultado (vuela -> camina)




// -------> Clonamos <-------
//para evitar que se modifeque en los dos
const clonaPersonaje ={
    ...structuredClone(personaje),
    vida: 90,
    power: 130,
};

clonaPersonaje.habilidades [0] = "corre";
console.log(personaje.habilidades);         //arroja VUELA
console.log(clonaPersonaje.habilidades);    //cambia vuela -> CORRE



// -----------------> Estructuras anidadas <-----------------
const jugador ={
    name: "Jude",
    role: "principal",
    attributes:{
        height:183,
        favColor: "black",
        hairColor: "blue",
    }
};

// Extraemos propiedad attributes (objeto con 3 propiedades)
const {attributes} = jugador;
console.log(attributes);

// Extraemos propiedad height (number)
const {attributes: {height}} = jugador;
console.log(height);    //183

// Extraemos propiedad height (number) y la cambiamos por nombre size
const {attributes: {height: size}} = jugador;
console.log(size);      //183



// -----------------> Desestructuración (rest) <-----------------
const carnita = {
    res:{
        nombre: "Res",
        cortes: ["Ribeye", "Picaña", "T-bone"]
    },
    cerdo: {
        nombre: "Cerdo",
        cortes: ["Costillas", "Lomo", "Manitas"]
    },
    pollo:{
        nombre: "pollo",
        cortes: ["Pechuga", "Muslo", "Pierna"]
    }
};

//console.log(carnita);     //imprime todo el objeto carnita

const {res, ...rest} = carnita;
console.log(rest);      //desestructura el objeto (nos separa en varibles una de RES o tras de CERDOyPOLLO)





// -----------------> Parámetros desestructurados <-----------------
// muy usando para simplificar codigo -> para separa variables individulaes de los objetos

const repartidor = {
    nombre: "Juan",
    zona: "Mexico",
    pedidos: 50
};

function show(data){
    const stars = "⭐".repeat(data.pedidos/10);
    return `Nombre ${data.nombre} ${(data.zona)} ${stars}`;
}

console.log(show(repartidor));

function show2 ({nombre, zona, pedidos}){
    const stars = "🍌".repeat(pedidos/20);
    return `Nombre: ${nombre} (${zona}) pedidos: ${pedidos}, ${stars}`;
}

console.log(show2(repartidor));
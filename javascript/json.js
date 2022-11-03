/* 
¿Qué es una API?
En otras palabras, es una característica de algunos servicios que 
permite a los/as desarrolladores interactuar con ellos desde 
aplicaciones externas.
Son mediadoras entre los usuarios o clientes y los recursos o 
servicios web que quieren obtener

API Rest
REST es un estilo de arquitectura que se usa para describir una interfaz 
que pueda ser utilizada entre sistemas que usen HTTP para la 
transferencia de información. 
Es decir, describe una forma de interactuar con un servidor HTTP.

Protocolo HTTP
Los métodos de petición más importantes son: 
*GET es usado para recuperar un recurso.
*POST se usa la mayoría de las veces para crear un nuevo recurso. 
*PUT es útil para crear o editar un recurso. En caso de existir, se 
reemplaza, de lo contrario se crea el nuevo recurso.
*DELETE se usa para eliminar un recurso

Fetch
Proporciona una interfaz JavaScript para acceder y manipular partes 
del canal HTTP, tales como peticiones y respuestas.
Es una alternativa moderna (a XMLHttpRequest) que nos permite 
interactuar con APIs y obtener los datos a nuestra aplicación

GET
El método GET se usa para recuperar datos del servidor. Este es un 
método de solo lectura, por lo que no tiene riesgo de mutar o 
corromper los datos

JSON (JavaScript Object Notation, «notación de objeto de 
JavaScript») es un formato de texto sencillo para el intercambio de 
datos. 
Es muy parecido a la sintaxis de objeto literal de JavaScript, pero 
puede ser utilizado independientemente de JavaScript. Y muchos 
lenguajes de programación poseen la capacidad de leer y generar 
JSON 
Es comúnmente utilizado para transmitir datos en aplicaciones web.
Por ejemplo: enviar algunos datos desde el servidor al cliente, así estos 
datos pueden ser mostrados en páginas web, o vice versa



// transformamos la api obtenida en un objeto literal

const personajes ={
team:"Star Wars Characters",
characters:[
{
	name: "Leia Organa",
	height: "150",
	mass: "49",
	hair_color: "brown",
	skin_color: "light",
	eye_color: "brown",
	birth_year: "19BBY",
	species: [],
	"starships": [],
}
]
}
console.log(personajes.team);
console.log(personajes.characters[0].height);



// optenemos la api y la mostramos por consola

fetch('https://hp-api.herokuapp.com/api/characters')
 .then(response => response.json())
 .then(json => console.log(json));
/*  
// optenemos la api y mostramos el valor de la clave
// director del elemento 2 

 fetch('https://ghibliapi.herokuapp.com/films')
 .then(response => response.json())
 .then(json => console.log(json[3].director));



// optenemos la api, la recorremos y mostramos todos los elementos cuyo 
// valor de la clave "House" sea Gryffindor

fetch('https://hp-api.herokuapp.com/api/characters')
.then(response => response.json())
.then(json => {
     for (let i = 0; i < json.length; i++){
         if (json[i].house == "Gryffindor"){        
         console.log(json[i].name + " es de Gryffindor!!");
        }
}
}
);



// Opción con DOCUMENT.WRITE sin crear nodos en html

fetch('https://hp-api.herokuapp.com/api/characters')
 .then (response => response.json())
 .then(json => {
     json.map(function(personaje){
         document.write(htmlPersonajes(personaje.name, personaje.image, personaje.house))
     })

})



*/
// Llamamos a la etiqueta main creada en json.html, luego llamamos
// a la api interactuamos con DOM
// Podemos guardar la URL en una variable para mas comodidad
// Recorremos con forEach, creamos la etiqueta article y le agregamos
// una clase y los datos de la funcion por ultimo agregamos el hijo 
// a main (appendchild)

const main= document.querySelector("main");
const URL="https://hp-api.herokuapp.com/api/characters"

fetch(URL)
    .then(response => response.json())
    .then(
        personajes => {
            personajes.forEach(personaje => {
                let infoPersonaje = document.createElement('article');
                infoPersonaje.classList.add('article_json');
                infoPersonaje.innerHTML = htmlPersonajes(personaje.name, personaje.image, personaje.house);
                main.appendChild(infoPersonaje);
                
            });
        }
    )

// Creamos funcion con 3 parametros, que devuelva un html
// usamos plantilla para ordenar el html

function htmlPersonajes(personaje, foto, casa){
    let html = `<h2 class="nombre_json"> ${personaje}</h2>
                <h3 class="casa_json"> ${casa} </h3>
                <div class= "imagen_json">
                <img src="${foto}" alt="foto ${personaje}">
                </div>`;
    return html;

} 



/*-----------------------Json Maty-------------------------------- */
/*
// Creamos una constante para guardar la Url de la api 

const URL= "https://swapi.dev/api/vehicles/"

// Creamos Array para guardar los resultados de la api

const vehiculos_starwars=[]



// Invocamos con fetch la api y la respuesta que nos da la pasamos a 
// formato json.
// Trabajamos la respuesta json en formato Js

// Vamos llenando nuestro array con los resultados de la api 
// usamos el dato results de la api

// Recorremos el array y llamamos a la funcion vehiculos para poder
// escribir en el documento

fetch(URL)
    .then(response => response.json())
    .then(respuesta_js =>{
        respuesta_js.results.forEach((vehiculo)=> vehiculos_starwars.push(vehiculo))
        for(let array_nuevo of vehiculos_starwars){
            document.write(vehiculos(array_nuevo.name, array_nuevo.cost_in_credits, array_nuevo.manufacturer))
    }})


// Creamos una funcion para asignar valores y dar formato al documento 
    function vehiculos(nombre,costo,fabricante){
        let html = `<h2>Nombre: ${nombre}</h2>
                    <h4>Costo: ${costo} Creditos de la Republica</h4>
                    <h4>Fabricante: ${fabricante}</h4>
                    <hr>`;
        return html;
    }

*/
/* 
//--------------Manipulacion con DOM----------//

// Vemos el objeto document (html completo) 
console.log(document);


//Vemos el objeto document (html completo)
// pero mucho mas detallado
console.dir(document);

// Pedimos por consola solo una parte del html
console.log(document.head);
console.dir(document.head);

// Metodos para obtener un nodo

// Buscamos el nodo atraves del id
let titulo=document.getElementById("titulo");

//Mostramos el nodo completo en este caso un h1
console.log(titulo);

//Mostramos solo el texto de este h1
console.log(titulo.innerText);

//Modificamos de forma dinamica el texto del h1
let modificacion_texto_h1="Cambiamos Texto del h1"
titulo.innerText=modificacion_texto_h1
console.log(titulo.innerText);

//Buscamos nodos atraves de clases
let parrafos=document.getElementsByClassName("parrafos");
console.log(parrafos);

//Buscamos por tipo de etiqueta
let parrafostag=document.getElementsByTagName("p");
console.log(parrafostag);

//Modificanco etiqueta Select de forma dinamica

//Creamos Array vacio
const categorias=[];

//Solicitamos al usuario ingreso de una nueva entrada

let entrada= prompt (`Ingrese Categoria \n 
(Escribir 'ESC' para Salir)`)

// si la entrada del usuaria no es ESC agrega una categoria
//con toUpperCase() llevamos la entrada a mayusculas y vuelve
//a pedir una nueva entrada
while(entrada.toUpperCase()!= "ESC"){
  categorias.push(entrada.toUpperCase());

  entrada= prompt (`Ingrese Categoria \n 
(Escribir 'ESC' para Salir)`);
}

console.log(categorias);

// Obtenemos el elemento select

let mi_select=document.getElementById("select");

//Recorremos el array y agregamos las categorias ingresadas a 
// la opcion del select.

for (const categoria of categorias){
    mi_select.innerHTML +="<option>" + categoria + "</option>";

}

*/

//--------------------------Crear Nuevos Nodos-------------------//

// Creando un nuevo h2 en el documento
let titulo1= document.createElement("h2");
    titulo1.innerHTML="Hola Mundo de Nuevo"

document.body.appendChild(titulo1);

//------------Creando nodos con constructor de clases--------------//

class Producto{
  constructor(id,nombre,precio){
    this.id = parseInt(id);
    this.nombre=nombre
    this.precio= parseFloat(precio);
  }
}

const productos=[]
productos.push(new Producto (1,"Dona",60));
productos.push(new Producto (2,"Pan",80));
productos.push(new Producto (3,"Leche",160));
productos.push(new Producto (4,"Torta",260));

//Recorremos el array para crear un nodo por valor en el array

for (const producto of productos){
    let divProducto=document.createElement("div");
    divProducto.innerHTML=`<h3> Nombre: ${producto.nombre} </h3>  
                           <h4> Precio: ${producto.precio} </h4>`
    document.body.appendChild(divProducto);                     
}

 
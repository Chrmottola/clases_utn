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

*/
// array con elementos
const productos = [
  {
      name: "Celeron",
      modelo: "C192",
      precio: 5500,
      thumbnail:"https://hardzone.es/2019/04/23/intel-gama-procesadores-core-9-generacion/intel-core-9a-generacion-01-2/"
  },
  {
      name: "Pentium",
      modelo: "X4",
      precio: 7000,
      thumbnail:"https://hardzone.es/2019/04/23/intel-gama-procesadores-core-9-generacion/intel-core-9a-generacion-01-2/"

  },
  {
      name: "Intel Core",
      modelo: "I3",
      precio: 11000,
      thumbnail:"https://hardzone.es/2019/04/23/intel-gama-procesadores-core-9-generacion/intel-core-9a-generacion-01-2/"
  },
  {
      name: "Intel Core",
      modelo: "I5",
      precio: 16000,
      thumbnail:"https://hardzone.es/2019/04/23/intel-gama-procesadores-core-9-generacion/intel-core-9a-generacion-01-2/"
  },
  {
      name: "Intel Core",
      modelo: "I7",
      precio: 20000,
      thumbnail:"https://hardzone.es/2019/04/23/intel-gama-procesadores-core-9-generacion/intel-core-9a-generacion-01-2/"
  },
  {
      name: "Intel Core",
      modelo: "I9",
      precio: 25000,
      thumbnail:"https://hardzone.es/2019/04/23/intel-gama-procesadores-core-9-generacion/intel-core-9a-generacion-01-2/"
  },
]

// accediendo al html en este caso al main atraves del id
const contenedor_de_productos_html = document.getElementById("contenedor_de_productos")

// accediendo al html en este caso al formulario atraves del id
const formulario= document.getElementById("formulario_js")

// Metodo addEventListener espera escuchar  en este caso el evento Submit 
// y ejecuta una accion
// .preventDefault() evita que al enviar por submit recargue la pagina,
// por defecto los formularios recargan la pagina cuando se envian los datos por submit

// Tambien debemos construir  el objeto para guardar los datos 
//ingresados en el formulario

// Subimos con push los datos al array productos

// limpiamos el formulario dejamdolo listo para una nueva 
// carga

// Llamamos a la funcion renderizado para agregar el nuevo producto

formulario.addEventListener("submit",(e)=>{
  e.preventDefault()
  const newProduct = {
      name: formulario.name.value,
      modelo: formulario.modelo.value,
      precio: parseInt(formulario.precio.value),
      thumbnail: formulario.thumbnail.value,
  }
  productos.push(newProduct)
  formulario.name.value = formulario.modelo.value =
  formulario.precio.value = formulario.thumbnail.value = ""
  renderizado(productos)

})


//Uso de  Comillas malas. para peder poner todo en renglones.
//Creamos un objeto con atributos html

const CrearPlantilla=(producto)=>{
  return `<div class="carta_js">
  <h2>${producto.name}</h2>
  <img src="${producto.thumbnail}" class="img_js">
  <p>Modelo:${producto.modelo}</p>
  <p>Precio:${producto.precio}</p>
  </div>`
}

// Creamos funcion para renderizar los productos (agregar en la pagina 
// el producto nuevo)
// Si no hay productos dentro del rango especificado por las opciones del select devuelve 
// un h1 "No Existen Productos con esas especificaciones" validamos atraves del if

const renderizado=(lista_productos)=>{
  if(lista_productos.length !==0){
  contenedor_de_productos_html.innerHTML= ""
  for(let producto of lista_productos){
      contenedor_de_productos_html.innerHTML += CrearPlantilla(producto)
    }}
  else{
    contenedor_de_productos_html.innerHTML= "<h1> No Existen Productos con esas especificaciones</h1>";
  }}

renderizado(productos)

// accediendo al html en este caso a la etiqueta select atraves del id

const precio_para_filtrar_opcion=document.getElementById("precio_para_filtrar");


// Generamos funcion que nos retorna un nuevo array con los productos que cumplen con la opcion del select
const filtrar_productos=(lista_productos,precio)=>{
  return lista_productos.filter((producto)=>producto.precio >= precio)
}

// Metodo addEventListener espera escuchar algun evento en el select 
// en este caso change (cambios en el select)
// validamos que si hay opciones de productos en la opcion de seleccion renderice esos productos.
// en el caso que no haya utilizamos la opcion del select todos y mostramos todos los productos.

precio_para_filtrar_opcion.addEventListener("change",()=>{
    if(precio_para_filtrar_opcion.value !== ""){
    let precio_a_filtrar=parseInt(precio_para_filtrar_opcion.value)
    renderizado(filtrar_productos(productos,precio_a_filtrar))
}
    else{
    renderizado(productos)
    }
})

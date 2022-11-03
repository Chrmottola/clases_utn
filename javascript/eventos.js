//-----------------EVENTOS--------------------//

/* Los eventos son la manera que tenemos en Javascript de controlar las acciones de 
los usuarios, y definir un comportamiento de la página o aplicación cuando se 
producen. 
Con Javascript podemos definir qué es lo que pasa cuando se produce un evento, 
cómo podría ser un clic en cierto elemento, o escribir en un campo 

// Hay 3 Formas de manejar evento

// (1) Eventos mediante funcion, se puede poner varias funciones para 
// el mismo evento

// Seleccionamos el elemento mediante el Dom

let mi_boton= document.getElementById("boton");
console.log(mi_boton);

// Determinamos el elemento a escuchar y referenciamos a la funcion
// sin llamarla

mi_boton.addEventListener("click",respuesta_click);

// Respuesta al evento creamos funcion

function respuesta_click(){
  console.log("Respuesta a evento");
}

// (2) Eventos mediante propiedades del elemento con funcion anomima
// propiedad ON

mi_boton.onclick=()=>{
  console.log("Respuesta mediante On Click");
}

// (3) Eventos mediante atributo de la etiqueta html en este caso 
// etiqueta input.
// La función puede declararse entre la comillas o bien tomarse una
//referencia existen en el script.

// <input type="button" value="CLICK2" 
// onclick="alert('Respuesta 3');"/>


*/

// Declaracion de Clase Produncto

class Producto {
  constructor(id, nombre, precio) {
    this.id = parseInt(id);
    this.nombre = nombre
    this.precio = parseFloat(precio);
  }
}

// Instanciamos objetos dentro de clase

const productos =[]
productos.push(new Producto(1, "Dona", 60));
productos.push(new Producto(2, "Pan", 80));
productos.push(new Producto(3, "Leche", 160));
productos.push(new Producto(4, "Torta", 260));

//Recorremos el array para crear un nodo por valor en el array

for (const producto of productos) {
  let divProducto = document.createElement("div");
  divProducto.innerHTML = `<h3> Nombre: ${producto.nombre} </h3>  
                           <h4> Precio: ${producto.precio} </h4>
                           <button id= "${producto.id}" Class=
                           "btn_compra">Comprar</button>`

  document.body.appendChild(divProducto);
}

let botones=document.getElementsByClassName("btn_compra");
console.log(botones);

for (const boton of botones){
  boton.addEventListener("click", function(){
        let seleccion=productos.find(producto => producto.id
          == this.id);
        console.log("El Producto seleccionado es " + seleccion.nombre);
  }
  )
}

// Obtenemos el formulario del Dom

let formulario=document.getElementById("registro_producto");

formulario.onsubmit=(e)=>{
//con preventDefault(); detenemos el evento por defecto del submit
  e.preventDefault();

// con this abtenemos el contexto global del objeto. 
  console.log(this);

// para obetener el objeto complte usamos target en este caso 
//obtenemos todo el formulario
  console.log(e.target);

// para obtener el id del objeto en este caso del formulario
  console.log(e.target.id);

// obtenemos el contenido de formulario en este caso los input
  const inputs= formulario.children;
  productos.push(new Producto(0,inputs[0].value,inputs[1].value));
  console.log(productos);

}


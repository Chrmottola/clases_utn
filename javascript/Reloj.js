/*  
setInterval()
El método setInterval () llama a una función o evalúa una expresión a 
intervalos específicos (en milisegundos).



setTimeout ()
El método setTimeout () llama a una función o evalúa una expresión 
después de un número específico de milisegundos.

 */

// Creamos Funcion

function mostrarHora() {
  let reloj = document.getElementById("Reloj_js2");
  let hora = new Date();
  reloj.innerHTML = hora.toLocaleTimeString();
}

//le damos la tasa de actualizacion en este caso
//1000milesegundo que es igual a 1 segundo

let cronometro = setInterval(mostrarHora, 1000);

//LLamamos a la funcion creada
mostrarHora() 

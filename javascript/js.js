/* 
// ----------------Enlazar JavaScript-------------//
Mediante etiquetas Script
<script>
 // Aquí se escribe el código JS 
</script>
Mediante archivo javaScript
<script src="./javascript/js.js"></script>

//---------------Estructura de JavaScript-----------//
// De esta manera estructuramos el js
  1. Variables Globales
  2. Funciones
  3. Objetos
  4. Programacion
// -------------Variables------------------------//

Las Variables son elementos que almacenan valores en la memoria 

Declaracion de variables
Var nombre= "Christian" (var) se usa en versiones anteriores de Js
let nombre= "Christian"

//String cadena (texto) de caracteres, se usa ""
let nombre= "Christian";
let apellido="Mottola";

//Variable booleana "si o no" true/false
let mascotas="true";

// Numericas sin ""
let edad=45;

//---------------Constantes-----------------------//
son elementos que no cambian el valor ni el tipo de dato
//Declarando constantes

const nombre = ("Christian");
const apellido = ("Mottola");
const edad = 45

//---------------Operadores-----------------------//

+ - * / < > 
>= mayor o igual
<=menor o igual
== igual compara si el dato es igual
===estrictamente igual compara si el dato es igual y tambien del mismo tipo
!= diferente
!== estrictamente diferente 

//----------------Operadores Logicos---------------//

And (&&) (y)
Or (||)  (o) 
Not (!) (no)

//----------------------Array----------------------//
Objeto que permite crear grupos ordenados de datos

Array vacío:
const grupo = [];

Array con elementos:
const mascotas = [‘gato’, ‘perro’, ‘tarantula’]; //array de strings

// Array de Strings
const mascotas = [‘gato’, ‘perro’, ‘tarantula’]; 

// Array de numerales
const numeros = [4, 8, 10, 3];

// Array de booleans
const verdades = [true, false, true];

// Array con datos combinados
const persona = [26592093, ‘Perico’, ‘Perez’, 1981, false];

// Array de Array un array dentro de otro array
const resultados = [
[‘gato’, ‘miau’],
[‘perro’, ‘guau’],
[‘ardilla’, ‘wheee’]
];

//Los arrays aseguran un orden de los datos que contienen y nos 
permiten acceder a sus distintos valores por su índice.
En javascript el primer elemento está en el índice 0 (cero).

//Se declara en constante (const) para asegurar no perder la 
propiedad de array por algun motivo, ya que si se declara como
let puede modificarse el tipo de dato.

//Propiedades de Array

length cuenta la cantidad de elementos del array
console.log(nombredelarray.length);


let capuccino=[
    ["Cafe","Grano"],
    ["Leche","Almendras"],
    ["Canela","Rama"],
    ["Chocolate","Rallado"],
    ["Crema","Batida"]
];

//Muestra la cantidad de elementos del Array
console.log(capuccino.length);
//Muestra La cantidad de String que tiene Grano
console.log(capuccino[0][1].length);
//Muestra elemento especifico del Array Chocolate
console.log(capuccino[3][0]);
//Muestra elemento especifico del Array Batida
console.log(capuccino[4][1]);

---------------------Metodos de Array-----------------------------//
---------------------------Foreach--------------------------------//
// For each tiene por defecto cargado 3 parametros de los elementos (valor,indice, array completo)
// no es necesaria solicitar los 3 parametros.

Se usa para recorrer un array.
La constante objetos, en este caso, será el array a recorrer. Y la variable 
funcion es una función que será invocada por cada elemento que 
exista dentro del array. A esa función se le pasan 3 argumentos: el 
elemento, su índice, el array.

const objetos=["Varita","Libro","Lechuza","Caldero"]

objetos.foreach(function(objeto, indice, array));

//--------------------------Map-----------------------------------//

El método map() se utiliza para crear un nuevo Array con todos los
elementos del Array original transformados según las operaciones de la
función enviada por parámetro. El nuevo Array obtenido tiene la misma
cantidad de elementos que el array original pero con los valores
modificados.

let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];
objetos.map(objeto => { 
 return "Objeto: " + objeto;
}); 

//-------------------------Find----------------------------------//
El método find() devuelve el valor del "primer" elemento del Array que
satisface la función de comprobación enviada por parámetro. Si ningún valor
satisface la función de comprobación, se devuelve undefined.

const numeros = [1, 2, 3, 4, 5];
//La función parámetro generalmente es una función flecha sin cuerpo.
const encontrado = numeros.find(elemento => elemento > 3);

//-------------------------Filter--------------------------------//

Al igual que forEach y map recibe una función con tres argumentos. 
Se usa para filtrar elementos.

let numeros = [2, 5, 6, 18, 201];
let numero_mayores_a_5=numeros.filter((n) => { 
return n > 5
});


//-----------------------Condicionales---------------------------// 

if (condicion){proceso} si cumple la condicion realiza el proceso
else (){} si no cumple la condicion
else if (){] si no cumple la condicion pero cumple otra condicion

Switch (){}
    case           (Compara el caso y busca coincidencia)
        break      (corta el proceso de comparacion)
    default        (Si no encuentra coincidencia)


// Pedimos al usuario que ingrese una fruta
let fruta=prompt("ingrese una Fruta");
// Swich compara dentro de los posibles casos que fruta se ingreso
    switch(fruta){
        case "Manzana":
// Si encuentra coincidencia crea la variable color y le da un valor en este caso rojo           
            color="Rojo";
// Break corta el proceso de comparacion
        break;
        case "Kiwi":
            color="Verde"
        break;
// Si no se encuentra coindicencia le da a color el valor de Blanco       
        default:
            color="Blanco"
}

alert("El Color de la fruta "+ fruta+" es " + color);


//-------------------Bucle--------------------------//

(While) mientras se cumpla la condicion indicada se repite
        indefinidamente la instruccion dentro del bucle

let i=0; (se inicializa la variable contador)
while (i<5){ (condicion que se tiene que dar)
console.log("valor de i": i); (instruccion)
i= i + 1; (incremento de la variable)
}    
        

(condicion)
{iteracion (cada ves que se repite)} 
Contador
incremento o decremento de contador

(Do While) se ejecuta al menos una ves

let i=0;

do{
    console.log("El Valor de i es:" , i);
    i=i+1;
}
While (i<5);

(for) 
for (inicializacion; condicion; actualizacion){
    sentencias a ejecutar en cada iteracion   
}
for (let i=0; i<4; i++){
    console.log(i);
}


//-------------------------Funciones----------------------//

// Se pueden llamar en cualquier momento del codigo

function saludar(){
    console.log("Hola");
}
saludar();


//--------------Funciones con retorno---------------------------//

function multiplicar (num1,num2){
    return (num1*num2);
}
// Establecemos los parametros 
let resultado= multiplicar(5,8);
console.log("el Resultado es " + resultado);


//---------------------Funciones Anonimas-----------------------//

// Se crea una funcion sin nombre
const suma=function (a,b){
    ruturn a+b;
}

//--------------------Funciones Flecha--------------------------//
// Es una funcion de sintaxis resumida

const suma=(a,b)=>{return a+b}

//--------------------Scope-------------------------------------//
// Es el alcance de las funciones puede ser global o local
// Si las variables son declaradas dentro de la funcion es local
// no repercuten en el resto del código
// Si las variables sin declaradas afuera de la funcion es Global
// y repercute dentro del código.
// Hay que evitar generar Variables Globales.




//----------Interaccion con el usuario y con la consola---------------------//

//Console.log muestra resultados en la consolan del navegador//
console.log("hola mundo desde archivo externo");

//document.write escribe directamente en la pagina//
document.write("<h1>Hola Mundo</h1>");
document.write("Hola Mundo");

//Prompt muestra un cuadro de dialogo para que el usuario ingrese datos//
let nombreIngresado = prompt("Ingrese su nombre");

//Alert La sentencia alert() mostrará una ventana sobre la página web//
alert("¡Hola Mundo!");

//-----------------------Metodos---------------------------------//

.length devuelve numero de elementos dentro de un array 
        o numero de caracteres de un strig.
.push agrega un elemento a un array.
.(new date().getday()); devuelve el numero de dia de la semana.
.(new date().getdate()); devuelve el numero de fecha del mes.    
.(new Date().getMonth()); devuelve el numero de mes (ojo que Enero toma valor 0)
.(new Date().getFullYear()); devuelve el numero del año

parsefloat convierte string en numero flotante o decimal
parseint   conviente string en numero entero

.include muestra si en un array contiene determinado elemento


//------------------Operaciones con variables-------------------//
//Parseint convierte string en enteros
//Parseflot convierte string en flotantes o decimales

let numeroa=12;
let numerob=3

let resultadosuma=numeroa+numerob;
let resultadomultiplicacion=numeroa*numerob;


//----------------escribiendo en el documento-------------------//
document.write("Hola Mundo");

//------------------escribiendo en la consola-------------------//
console.log("Hola Mundo");



-------------------------------------------------------------------
//------------------------(Switch)-------------------------------//

let numero_dia = (new Date().getDay());

switch (numero_dia) {
    case 0:
        dia= "Domingo"
        break;
    case 1:
        dia= "Lunes"
        break;
    case 2:
        dia="Martes"
        break
    case 3:
        dia="Miercoles"
        break;
    case 4:
        dia="Jueves"
        break;
    case 5:
        dia="Viernes"
        break;
    case 6:
        dia="Sabado"
        break;
    default:
}
alert("El dia de Hoy es "+ dia +" "+(new Date().getDate()) + "/"+(new Date().getMonth()+1)+"/"+(new Date().getFullYear()));

-------------------------------------------------------------------------------
/-------------------------------(If)---------------------------//

let numero=parseFloat(prompt("Ingrese un Número"));
let es_mayor_a_diez= numero > 10;
let es_menor_o_igual_a_diez= numero <= 10;

    if(es_mayor_a_diez){
        document.write("El número es Mayor a 10");
    }
    else if(es_menor_o_igual_a_diez){
        document.write("El número es menor o igual a 10");
    }
    else{
        document.write("El dato Ingresado no es un Número")
    }


// ------------------------if ternario ----------------------//
(es un if resumido se usa cuando el if puede ocupar una sola linea)

let numero=parseFloat(prompt("Ingrese Número"));

//(if común)

if(numero > 1000){
    alert("El número es mayor a 1000");
}
else{
    alert("El Numero es menor a 1000");
} 
//(if ternario) 

numero > 1000 ? alert("El Número es mayor a 1000") : alert("EL Número es menor a 1000")

//----------------------(if usando OR y AND)--------------------//

// OR= ||
// true true = true
// true false= true
// false true= true
// false false false

let mensaje=prompt("Ingrese Mensaje");

if(mensaje === "Hola" || mensaje ==="hola"){
    document.write("Hola Buenos dias")
}

//AND= &&
// true true = true
// true false= false
// false true= false
// false false false


let numero= parseFloat(prompt("Ingrese un Número"));

if(numero >= 10 && numero <= 50){
    alert("El numero esta entre 10 y 50");
}    
else if(numero <10 || numero >50){
    alert("El numero es menor a 10 o mayor a 50");
} 
else{
    alert("El dato ingresado no es un numero");
}   


//----------------------------While------------------------------//

let i=0;

while(i<=15){
    document.write("El Valor de i es: ", i, "<br>");
    i=i+1;
}

let pasos=100;

while (pasos>=1){
    if(pasos===1){
       document.write("Resta ",pasos," Paso por Caminar", "<br>");
    }
       else{
    document.write("Restan ",pasos," Pasos por Caminar", "<br>");
    }
    pasos= pasos-1;
    
}


//--------------------Do While------------------------------//
//Al igual que while, se repite hasta que una condición especificada se 
evalúe como falsa. La diferencia es que, la condición se evalúa 
después de ejecutar la sentencia, esto hace que que la sentencia se 
ejecute al menos una vez

let n=0;

do{
    console.log("El Valor de n es:" , n);
    n=n+1;

}
while (n<5);


//-------------------------for-----------------------------------//

let equipos=[
    "River",
    "Boca",
    "Racing",
    "Independiente",
    "San Lorenzo",
    "Velez",
];

for(let i=0; i< equipos.length; i++){
    let equipo=equipos[i];
    document.write(equipo + " Tiene " + equipo.length + " Letras" + "<br>");
    
}

let numero_a_multiplicar=parseInt(prompt("Ingrese Número"));

for(let multiplicando=1; multiplicando<=10; multiplicando++){
    let resultado=(numero_a_multiplicar*multiplicando);
    alert(numero_a_multiplicar+" X " + multiplicando+ " = "+ resultado);
}

for(let turno=1;turno<=3;turno++){
    let ingrese_nombre= prompt("Ingrese Nombre");
    alert("Turno Nro " + turno + " Nombre "+ ingrese_nombre);
}

//----------------------------For of-----------------------------//

Bucle exclusivo para recorrer array

const numeros=[1,2,3,4,5,6,7,8];

for(let elemento of numeros){
console.log(elemento);
};

//-----------------------Objetos---------------------------------//
// Objeto es una coleccion de datos relacionados con funcionalidad
// consta de propiedades y metodos
// En el objeto persona las propiedades serian altura, edad, genero
// los metodos serian hablar, caminar, comer.
// Los elementos se identifican mediante su Nombre de Atributo

const persona1= {Nombre:"Homero",Edad:39,Calle:"Av Siempreviva 742"}


//------------------Funcion Constructora de objetos-------------------------//

function Persona(nombre, edad, calle) {
 this.nombre = nombre;
 this.edad = edad;
 this.calle = calle;
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");


//---------------------------Clases---------------------------------//
Las Clases proveen una sintaxis 
mucho más clara y simple para crear objetos personalizados.
Son una equivalencia al empleo de función constructora y permite 
definir distintos tipos de métodos.

class Persona{
 constructor(nombre, edad, calle) {
 this.nombre = nombre;
 this.edad = edad;
 this.calle = calle;
 }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");


//---------------------------Practica-----------------------------//

-------------------------------------------------------------------
//----------(Creamos un Array, utilizamos metodo include)--------//

et lista_super=["Harina","Papas","Peras","Jugo","Sal"];
    alert(lista_super);

//Pedimos al usuario que ingrese un nuevo articulo
    let articulo=prompt("Que Articulo desea Agregar a la Lista?");

// Condicional if pregunta si el articulo ingresado ya esta en la lista.
    if (lista_super.includes(articulo)){
        alert(articulo +" "+"Ya esta en la Lista");   
}
// Si no se encuentra en la lista lo agrega con el metodo push
    else{
        lista_super.push(articulo);
        alert("La Lista es: " + lista_super);
}


--------------------------for each--------------------------------//
// For each tiene por defecto cargado 3 parametros de los elementos (valor,indice, array completo)
// no es necesaria solicitar los 3 parametros en este caso solicitamos solo el valor del elemento

let objetos_magicos =["Varita","Libro","Lechuza","Caldero"];

//Recorre el array y devuelve el parametro solicitado en este caso los objetos que contiene el array 

objetos_magicos.forEach(function(objetos_magicos){
    console.log("Objetos Con Foreach son: " + objetos_magicos);
});

// EL Mismo for each con funcion flecha

let objetos_magicos=["Varita","Libro","Lechuza","Caldero"];

objetos_magicos.forEach((objetos_magicos)=>
    console.log("Objetos Con Foreach y funcion flecha son: " + objetos_magicos));

//--------------------------Map----------------------------------//

// Devuelve un nuevo array modificando al original
const numero=[1,2,3,4,5,6];
// Recorro el array (numero) y multiplica los datos X2 Generando un nuevo array (por_2) con los resultado
const por_dos= numero.map((datos_del_array)=> datos_del_array * 2);

console.log("Por 2 " + por_dos); 

//Muestra por consola los 2 array   
console.log(numero);
console.log(por_dos);

const numeros=[2,3,4,5,6,7,8,9,10,11,12];

const par_impar=numeros.map((chequeo) => 
//(modulo) % 2 muestra el resto de la division de chequeo dividido 2
{   
    if(chequeo % 2 ===0){

//return guarda los datos en el nuevo array
        return chequeo + " es Par"
    }
    else{
        return chequeo + " es Impar"
    }
});

//--------------------------find----------------------------------//

const numero=[1,2,3,4,5,6];

//Find devuelve solo el primer elemento que cumple con lo que solicitamos en este caso devuelve solo el 4
const encontrar_numero=numero.find(elementos => elementos >3);
console.log(encontrar_numero);

//--------------------------Filter--------------------------------//

const numeros = [2, 5, 6, 18, 201];

// filtramos los elementos que son mayores a 5
const numeros_mayores_a_5=numeros.filter((n) => { 
return n > 5
});

console.log(numeros_mayores_a_5);

                  ------------------
const nombres=["Carlos","Jose","Abril","Facundo","Geraldine"];

const nombres_cortos=nombres.filter((nombre)=> nombre.length <6);

//-------------------------for of---------------------------------//
const numeros=[1,2,3,4,5,6,7,8];

//Recorremos el array
for( let elemento of numeros){
    console.log(elemento);
};


//----------------------Funciones---------------------------------//

//----------------- Creando funcion saludar----------------//

// Se le establecen los parametros nombre, apellido, Serie favorita
// se pueden llamar individualmente a los parametros o llamarlos a 
// todos.

function saludar(nombre, apellido, Serie_Favorita){
    alert("Hola"+" "+nombre+" "+apellido+" "+"Serie Favorita:"+" "+Serie_Favorita);

}
saludar("Chirs","Moti","Game Of Throne")


//Funcion que nos muestra el numero de letras del nombre que ingresa
//el usuario 
function largo_nombre(nombre){
    return nombre.length;
}

let nombre_ingresado=largo_nombre (prompt("Ingrese su Nombre"));

alert("Su nombre tiene " + nombre_ingresado + " Letras");


//-Calcular tiempo de espera en relacion a la cantidad de turnos--//

//Fincion para multiplicar los turnos por el tiempo promedio
const calcular_tiempo_espera=()=>{
    return turnos*tiempo_promedio;
}


//Dar formato al tiempo de espera 
const dar_formato_tiempo=(tiempo)=>{
    if(tiempo <60){
        return tiempo + " min";
    }
    else if(tiempo >=60){
        return parseInt(tiempo/60)+":"+(tiempo%60)+ " Hr";
    }
}


// funcion para pedir nombre, ver si quiere sacar turno y 
//darle el tiempo de espera
const sacar_turno=()=>{
let nombre=prompt("Ingrese un Nombre");
let quiere_sacar_turno=prompt("Desea Sacar Turno");

    if (quiere_sacar_turno == "si" || quiere_sacar_turno == "Si" || quiere_sacar_turno =="SI"){
    alert("Tiene Turno Para dentro de " + dar_formato_tiempo(calcular_tiempo_espera()))
    turnos++;
    }
    else{
    alert("Que Tenga un Buen Día");    
    }
}

let tiempo_promedio=15;
let turnos=0;

*/

//--------------------Practica Objetos----------------------------//

/* const persona1= {
    Nombre:"Homero",
    Edad:39,
    Calle:"Av Siempreviva 742"
}

console.log(persona1);
console.log(persona1.Edad);

//\n Salto de linea en el alert
// se puede usar persona1.nombre o persona1["nombre"]
alert(
    "Nombre: " + persona1.Nombre
    + "\n Edad: " + persona1["Edad"]
    + "\n Calle: " + persona1.Calle 
);


//Funcion Constructora. se declara con mayuscula por convencion
function Producto (id, Nombre, Precio){
    this.id= parseInt(id);
    this.Nombre= Nombre;
    this.Precio= parseFloat(Precio);
}
//Instanciar funcion constructora
const Producto2= new Producto(1,"Tallarines",120.50);
const Producto3= new Producto(2,"Moños",140.50);
const Producto4= new Producto(3,"Mostacholes",180.50);
const Producto5= new Producto(4,"Spaguetti",130.50);

console.log(Producto2);
console.log(Producto3);
console.log(Producto4);
console.log(Producto5);

//Metodos en Objetos

let cadena = "HOLA MUNDO";
//Propiedad de objeto String: Largo de la cadena.
console.log(cadena.length);
//Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());
//Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase());


//Metodo Personalizado
// se agrega el metodo (hablar) a la funcion constructora
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ 
   this.nombre)}
   }

// Instanciando Persona
   const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
   const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
// Llamando al metodo hablar   
   persona1.hablar();
   persona2.hablar();
  

//-----------------------Practica Clases-------------------------//
// Creando Clase 
// Generamos una clase con un metodo (descuento)
class Producto_Clase{
    constructor(id,nombre,precio){
        this.id=parseInt(id);
        this.nombre=nombre;
        this.precio=parseFloat(precio);
    }   
        descuento(valor){
            this.precio -= valor
        }     
}
//instanciamos la clase
 const producto1=new Producto_Clase(1,"Helado",400)
 console.log(producto1);
 producto1.descuento(100);
 console.log(producto1);

// in pregunta si existe nombre dentro de producto1
// si existe devuelve true 
console.log("nombre" in producto1);
//Recorremos la clase con for in
for (const propiedad in producto1){
    console.log(producto1[propiedad]);
}
*/

//-----------------(Calculo Indice Masa Corporal)-----------------//

//Declarando variables

let peso=79
let estatura=1.67;
//mostrando datos de variables en la consola
console.log(estatura);
//Asignando nuevos valores a la variables por medio del prompt

peso=parseInt(prompt("Ingrese su Peso"));
estatura=parseFloat(prompt("Ingrese su Estatura"));

//formula para colculo de indice de masa corporal

let masa_corporal=(peso/(estatura*estatura));
console.log(masa_corporal);

let resultado_masa_corporal=("Su Indice de Masa Corporal es"+ " " + masa_corporal)
alert(resultado_masa_corporal);



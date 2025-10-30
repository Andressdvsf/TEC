let nombre = "alvaro"; // declaramos una variable
const edad = 30;

console.log(nombre);
console.log(edad);
//alert(edad);

let texto = "alvaro javier";
let numero = 30;
let esVerdad = true;
let sinValor;
let vacio = null;

console.log(texto, numero, esVerdad, sinValor, vacio);

let a = 10;
let b = 7;

//operadores aritmeticos
console.log("la suma es: ", a + b); // esta una suma dentro del console
console.log("la resta es: ", a - b);
console.log("la multiplicacion es: ", a * b);
console.log("la division es: ", a / b);

//operadores de comparacion
console.log("a es mayor que b? ", a > b);
console.log("a es menor que b? ", a < b);
console.log("a es igual a b?", a == b);
console.log("a es estrictamente igual a b?", a === b);

//operadores lógicos
console.log(5 > 3 && 10 > 7);
console.log(5 > 3 && 10 < 7);
console.log(5 > 3 || 10 < 7);
console.log(!(5 > 3));

// condicional SI

let clima = "Lluvioso";

if (clima === "lluvioso") {
  console.log("Lleva paraguas");
} else {
  console.log("Disfruta el sol");
}

// else if para evaluar dos condiciones
let hora = 10;
if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

let nota1 = 3;
let nota2 = 3;
let nota3 = 3;
let nota4 = 0;
let nota5 = 3;

let prom = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

if (prom >= 3) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

//ciclos repetitivos
for (let i = 1; i <= 5; i++) {
  console.log("numero:" + i);
}

let contador = 1;

while (contador <= 5) {
  console.log("numero: " + contador);
  contador++;
}
//-------------funciones

function mostrarMensaje() {
  console.log("Bienvenidos a javascript");
}

//para llamar la funcion lo hacemos con su nombre
mostrarMensaje();

//-------------funciones con parametros
function saludar(nombre) {
  console.log("hola " + nombre);
}

//llamamos la funcion y pasamos como parametro el nombre a saludar

saludar("alvaro");
saludar("javier");

//-------------funciones con parametros y valor de retorno

function calcularArea(base, altura) {
  return base * altura;
}

let area = calcularArea(5, 9);
console.log("el area del rectangulo es :" + area);

//variables globales y locales en funciones
function ejemploLocal() {
  let mensaje = "hola desde el ambito local";
  console.log(mensaje);
}
ejemploLocal();
let mensajeGlobal = "hola desde el ambito global";
function ejemploGlobal() {
  console.log(mensajeGlobal);
}
ejemploGlobal();

//--------------manipulacion del DOM
// selector con id
const titulo = document.getElementById("titulo");
console.log(titulo.innerText);

// selector con clases
const primerItem = document.querySelector(".item");
console.log(primerItem);

const todosItem = document.querySelectorAll(".item");
console.log(todosItem);

// cambiar el contenido del HTML
titulo.textContent = "¡Tu lista de tareas 29 de Octubre 2025!";

const primerItemLista = document.querySelector(".item");
primerItemLista.innerHTML = "<strong>Manzanas Rojas</strong>";

// -------- cambiar estilos con javascript
titulo.style.color = "red";
titulo.style.fontSize = "45px";

// agragar un elemento con javascript
const nuevoItem = document.createElement("li");
nuevoItem.textContent = "pera";

const lista = document.querySelector("ul");
lista.appendChild(nuevoItem);
//Eliminar un elemento del DOM
const UltimoElemento = document.querySelector("li:last-child");
UltimoElemento.remove();

//Eventos con javascript
const boton = document.getElementById("BOTON");
boton.addEventListener("click", function(){
    alert("boton clickeado");
})

const BotonEnviT = document.getElementById("BotonEnviT");
BotonEnviT.addEventListener("click", function(){
   const nuevoItem = document.createElement("li");
   nuevoItem.textContent = "";
    alert("Tarea enviada");
    const lista = document.querySelector("ul");
    lista.appendChild(nuevoItem);
})



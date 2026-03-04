// Ejemplo de comentario de una lína

/*
Comentario
multilínea
*/

'use strict';

// console.log(nombre);

const nombre = prompt('Dime tu nombre');

console.log(typeof nombre);

const saludoFormal = confirm('¿Quieres un saludo formal?');

let saludo;

console.log(saludoFormal, typeof saludoFormal);

if (saludoFormal) {
    saludo = `Hola señor ${nombre}`;
} else {
    saludo = `¡Qué pasaaaaaa ${nombre}`;
}

alert(saludo);

const saludoConsola = saludoFormal ? `Buenos días ${nombre}` : `¡Qué pasa tío... ${nombre}`;

console.log(saludoConsola);

// console.log(saludo);

// nombre = 5;

// console.log(typeof nombre);

// console.log(nombre);

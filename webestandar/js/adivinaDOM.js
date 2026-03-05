'use strict';

let cuadroTexto, spanTexto, numeroPensado;

window.addEventListener('DOMContentLoaded', alCargar);

function alCargar() {
    cuadroTexto = document.getElementById('numero'); //document.querySelector('#numero');
    spanTexto = document.querySelector('#resultado');
    const boton = document.querySelector('#probar');

    // cuadroTexto.value = 'Prueba';
    spanTexto.innerText = 'Hola desde JavaScript';

    // Pensar un número
    pensarNumero(); // 'Ya he pensado un número. A ver si lo adivinas.';

    let acertado = false;

    boton.addEventListener('click', adivina);
}

function pensarNumero() {
    numeroPensado = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    spanTexto.innerText = numeroPensado;
}

function adivina() {
    const numeroUsuario = +cuadroTexto.value;

    if (isNaN(numeroUsuario)) {
        spanTexto.innerText = 'Introduce un número la próxima vez';
    }

    // Si el número pensado es igual que el del usuario
    if (numeroUsuario === numeroPensado) {
        // ... mostrar 'has ganado'
       spanTexto.innerText = 'Has ganado';
       pensarNumero();
    }
    // Si no, ver si el número pensado es menor que el del usuario
    else if (numeroPensado < numeroUsuario) {
        // ... mostrar 'es menor'
        spanTexto.innerText = 'Es menor';
    }
    // Si no
    else {
        // ... mostrar 'es mayor'
        spanTexto.innerText = 'Es mayor';
    }

    cuadroTexto.value = '';
    cuadroTexto.focus();
}
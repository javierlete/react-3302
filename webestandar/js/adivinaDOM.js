'use strict';

let cuadroTexto, spanTexto, numeroPensado, lista;

window.addEventListener('DOMContentLoaded', alCargar);

function alCargar() {
    cuadroTexto = document.getElementById('numero'); //document.querySelector('#numero');
    spanTexto = document.querySelector('#resultado');
    const boton = document.querySelector('#probar');
    lista = document.getElementById('listado');

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

    let resultado;

    if (isNaN(numeroUsuario)) {
        resultado = 'Introduce un número la próxima vez';
    }

    // Si el número pensado es igual que el del usuario
    if (numeroUsuario === numeroPensado) {
        // ... mostrar 'has ganado'
       resultado = 'Has ganado';
       cuadroTexto.className = 'igual';
       pensarNumero();
    }
    // Si no, ver si el número pensado es menor que el del usuario
    else if (numeroPensado < numeroUsuario) {
        // ... mostrar 'es menor'
        resultado = 'Es menor';
        cuadroTexto.className = 'menor';
    }
    // Si no
    else {
        // ... mostrar 'es mayor'
        resultado = 'Es mayor';
        cuadroTexto.className = 'mayor';
    }

    spanTexto.innerText = resultado;

    const li = document.createElement('li');

    li.innerText = resultado + ' que ' + numeroUsuario;

    lista.appendChild(li);

    cuadroTexto.value = '';
    cuadroTexto.focus();
}
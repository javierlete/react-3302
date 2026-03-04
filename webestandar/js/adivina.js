'use strict';

// Pensar un número
const numeroPensado = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

console.log(numeroPensado);

let acertado = false;

// REPETIR
do {
    // Pedir un número al usuario
    const numeroUsuario = +prompt('Dime un número');

    if (isNaN(numeroUsuario)) {
        alert('Introduce un número la próxima vez');
        continue;
    }

    // Si el número pensado es igual que el del usuario
    if (numeroUsuario === numeroPensado) {
        // ... mostrar 'has ganado'
        alert('Has ganado');
        acertado = true;
    }
    // Si no, ver si el número pensado es menor que el del usuario
    else if (numeroPensado < numeroUsuario) {
        // ... mostrar 'es menor'
        alert('Es menor');
    }
    // Si no
    else {
        // ... mostrar 'es mayor'
        alert('Es mayor');
    }
    // MIENTRAS no hayas acertado
} while (!acertado);


function obtenerDiaSemana() {
    const fecha = new Date();
    return fecha.getDay();
}

// Función que muestra el mensaje en el elemento <p> según el día de la semana
function mostrarMensajeDia() {
    const diaSemana = obtenerDiaSemana();
    const mensajeElement = document.getElementById('mensaje');

    if (diaSemana === 3) { // Lunes es el día 1 de la semana
        mensajeElement.textContent = '¡Feliz día de trabajo!';
    } else {
        mensajeElement.textContent = '¡Ánimo, sigue adelante!';
    }
}

// Llamamos a la función una vez cargada la página para que muestre el mensaje inicial
mostrarMensajeDia();
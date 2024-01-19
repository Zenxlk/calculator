// Funcionamiento: Se encarga de la logica de la pagina principal
// Autor: Zenxlk

//Funcionalidad de la calculadora
function calculadora() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operacion = document.getElementById("operacion").value;
    var resultado = 0;

    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            resultado = num1 / num2;
            break;
        default:
            resultado = 0;
            break;
    }

    document.getElementById("resultado").innerHTML = resultado;
}

// Obtén una referencia a todos los botones y al elemento con id "operacion"
var botones = document.querySelectorAll('.btn');
var operacion = document.getElementById('operacion');

// Para cada botón, agrega un evento de click
botones.forEach(function(boton) {
    boton.addEventListener('click', function() {
        operacion.textContent += this.textContent;
    });
});

// Obtén una referencia al botón con id "borrar"
var borrar = document.getElementById('borrar');

// Agrega un evento de click al botón "borrar" y actualizar contenido

// Obtén una referencia al botón con id "calcular"

var calcular = document.getElementById('calcular');

// Agrega un evento de click al botón "calcular"
calcular.addEventListener('click', function() {
    var resultado = eval(operacion.textContent);
    operacion.textContent = resultado;
});





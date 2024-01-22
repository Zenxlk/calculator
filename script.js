// Funcionamiento: Se encarga de la logica de la pagina principal
// Autor: Zenxlk

//Funcionalidad de la calculadora

// Obtén una referencia a todos los botones y al elemento con id "operacion"
var botones = document.querySelectorAll(".btn");
var operacion = document.getElementById("operacion");

// Para cada botón, agrega un evento de click
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    operacion.value += this.value;
  });
});

// Obtén una referencia al botón con id "borrar"
var borrar = document.getElementById("btnBorrar");

// Agrega un evento de click al botón "borrar" y actualizar contenido y borrar lo escrito en la calculadora

borrar.addEventListener("click", function () {
  operacion.value = "";
});

//Borrar el ultimo caracter
var borrarUltimo = document.getElementById("btnBorrarUno");

borrarUltimo.addEventListener("click", function () {
  operacion.value = operacion.value.slice(0, -1);
});

// Obtén una referencia al botón con id "calcular"
var calcular = document.getElementById("btnIgual");

// Agrega un evento de click al botón "calcular"
calcular.addEventListener("click", function () {
    var expresion = document.getElementById('operacion').value;
    var partes = expresion.split(/(\D)/);
    var resultado = parseFloat(partes[0]);

    for (var i = 1; i < partes.length; i += 2) {
        var operador = partes[i];
        var numero = parseFloat(partes[i + 1]);

        switch (operador) {
            case '+':
                resultado += numero;
                break;
            case '-':
                resultado -= numero;
                break;
            case '*':
                resultado *= numero;
                break;
            case '/':
                resultado /= numero;
                break;
            case '%':
                resultado %= numero;
                break;
            default:
                throw new Error('Operador desconocido: ' + operador);
        }
    }

    operacion.value = resultado;
});

//Pulsa enter para calcular solo cuando se esta escribiendo en la calculadora

operacion.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnIgual").click();
    }
});



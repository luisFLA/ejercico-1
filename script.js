document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("areaForm").addEventListener("submit", function (event) {
        event.preventDefault();
        calcularArea();
    });
});

function calcularArea() {
    let baseInput = document.getElementById("base");
    let alturaInput = document.getElementById("altura");
    let resultadoInput = document.getElementById("resultado");

    let base = parseFloat(baseInput.value);
    let altura = parseFloat(alturaInput.value);

    // Resetear clases de validación
    baseInput.classList.remove("is-invalid");
    alturaInput.classList.remove("is-invalid");

    let valid = true;

    if (isNaN(base) || base <= 0) {
        baseInput.classList.add("is-invalid");
        valid = false;
    }
    
    if (isNaN(altura) || altura <= 0) {
        alturaInput.classList.add("is-invalid");
        valid = false;
    }

    if (!valid) {
        resultadoInput.value = "";
        return;
    }

    let area = base * altura;
    resultadoInput.value = `El área es: ${area} `;
}

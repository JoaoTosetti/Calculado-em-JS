function dividir() {
    const valor1 = parseFloat(document.getElementById("num1").value);
    const valor2 = parseFloat(document.getElementById("num2").value);
    const resultado = valor1 / valor2;
    document.getElementById("resultado").innerHTML = resultado;
}
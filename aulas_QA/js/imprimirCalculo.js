function calculo() {

    if (document.getElementById("Selecao").value == "") {
        alert("Selecione uma operação");
    }
    if (document.getElementById("Selecao").value == "soma") {
        if (valida()) {
            somar();
        }
    }
    if (document.getElementById("Selecao").value == "subtrair") {
        if (valida()) {
            subtrair();
        }
    }
    if (document.getElementById("Selecao").value == "divisao") {
        if (valida()) {
            dividir();
        }
    }
    if (document.getElementById("Selecao").value == "multiplicacao") {
        if (valida()) {
            multiplicar();
        }
    }
}
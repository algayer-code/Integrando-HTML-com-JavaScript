document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const mensagem = document.querySelector("p");

    if (isNaN(campoA) || isNaN(campoB)) {
        mensagem.textContent = "Por favor, preencha ambos os campos com números válidos.";
        mensagem.style.color = "orange";
        return;
    }

    if (campoB > campoA) {
        mensagem.textContent = "Válido! Tudo certo.";
        mensagem.style.color = "green";

        document.getElementById("formulario").reset();
    } else {
        mensagem.textContent = "Inválido. Insira um valor maior no segundo campo.";
        mensagem.style.color = "red";
    }
});

document.getElementById("campoB").addEventListener("input", function() {
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const mensagem = document.querySelector("p");

    if (!isNaN(campoA) && !isNaN(campoB)) {
        if (campoB > campoA) {
            mensagem.textContent = "Válido! Tudo certo.";
            mensagem.style.color = "green";
        } else {
            mensagem.textContent = "Inválido. Insira um valor maior no segundo campo.";
            mensagem.style.color = "red";
        }
    }
});

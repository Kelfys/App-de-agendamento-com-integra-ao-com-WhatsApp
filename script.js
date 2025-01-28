document.getElementById("calcular").addEventListener("click", function() {
    const servicosSelecionados = document.querySelectorAll("input[name='servicos']:checked");
    let total = 0;
    let listaServicos = [];

    servicosSelecionados.forEach(function(servico) {
        switch (servico.value) {
            case "corte":
                total += 50;
                listaServicos.push("Corte de Cabelo - R$ 50,00");
                break;
            case "barba":
                total += 30;
                listaServicos.push("Barba - R$ 30,00");
                break;
            case "completo":
                total += 70;
                listaServicos.push("Corte + Barba - R$ 70,00");
                break;
        }
    });

    // Exibir o total e os serviços selecionados
    if (listaServicos.length > 0) {
        document.getElementById("total").innerHTML = `
            <h3>Resumo:</h3>
            <p>Serviços Selecionados:</p>
            <ul>
                ${listaServicos.map(servico => `<li>${servico}</li>`).join('')}
            </ul>
            <p><strong>Total: R$ ${total.toFixed(2)}</strong></p>
        `;
    } else {
        document.getElementById("total").innerHTML = '<p><strong>Nenhum serviço selecionado.</strong></p>';
    }
});

document.getElementById("enviarWhatsApp").addEventListener("click", function() {
    const servicosSelecionados = document.querySelectorAll("input[name='servicos']:checked");
    let mensagem = "Agendamento de Barbearia:\n\n";
    servicosSelecionados.forEach(function(servico) {
        switch (servico.value) {
            case "corte":
                mensagem += "Corte de Cabelo - R$ 50,00\n";
                break;
            case "barba":
                mensagem += "Barba - R$ 30,00\n";
                break;
            case "completo":
                mensagem += "Corte + Barba - R$ 70,00\n";
                break;
        }
    });
    // Adiciona o total ao final da mensagem
    const total = Array.from(servicosSelecionados).reduce((sum, servico) => {
        if (servico.value === "corte") return sum + 50;
        if (servico.value === "barba") return sum + 30;
        if (servico.value === "completo") return sum + 70;
        return sum;
    }, 0);
    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

    // Cria o link para enviar a mensagem no WhatsApp
    const numero = "5521975286720";
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    // Redireciona o usuário para o WhatsApp
    window.open(link, "_blank");
});

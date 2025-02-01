// Função para calcular o total dos serviços selecionados
document.getElementById('calcular').addEventListener('click', function() {
    let total = 0;
    
    if (document.getElementById('corte').checked) {
        total += 50;
    }
    if (document.getElementById('barba').checked) {
        total += 30;
    }
    if (document.getElementById('completo').checked) {
        total += 70;
    }

    document.getElementById('total').innerText = `Total: R$ ${total.toFixed(2)}`;
});

// Função para enviar o agendamento via WhatsApp
document.getElementById('enviarWhatsApp').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const pagamento = document.getElementById('pagamento').value; // Obtendo a forma de pagamento

    const servicos = [];
    if (document.getElementById('corte').checked) {
        servicos.push('Corte de Cabelo');
    }
    if (document.getElementById('barba').checked) {
        servicos.push('Barba');
    }
    if (document.getElementById('completo').checked) {
        servicos.push('Corte + Barba');
    }

    if (!nome || !data || !hora || servicos.length === 0 || !pagamento) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    const mensagem = `Olá, gostaria de agendar um horário:\nNome: ${nome}\nData: ${data}\nHora: ${hora}\nServiços: ${servicos.join(', ')}\nForma de Pagamento: ${pagamento}`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});

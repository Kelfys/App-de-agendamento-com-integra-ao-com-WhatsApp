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
    const mensagem = `Olá, gostaria de agendar um horário:\nNome: ${nome}\nData: ${data}\nHora: ${hora}\nServiços: ${servicos.join(', ')}`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});
const reservaForm = document.getElementById('reservaForm');
const mensagem = document.getElementById('mensagem');

reservaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const imovel = document.getElementById('imovel').value;
    const data = document.getElementById('data').value;

    mensagem.textContent = `Obrigado, ${nome}. Sua visita ao imóvel "${imovel}" foi reservada para ${data}. Entraremos em contato pelo email ${email}.`;
    mensagem.style.color = 'green';

    reservaForm.reset();
});

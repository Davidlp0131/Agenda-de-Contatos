// Obtem os elementos do form e da tabela
const form = document.querySelector('form');
const tabelaContatos = document.getElementById('contatos-lista');

// Adiciona um ouvinte de evento para o envio do form
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtem os valores dos campos da entrada
    const nomeContato = form.querySelector('input[type="text"]').value;
    const telefoneContato = form.querySelector('input[type="number"]').value;

    // Cria uma nova linha na tabela para o contato
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nomeContato}</td>
        <td>${telefoneContato}</td>
        <td><button class="delete-btn">Apagar?</button></td>`;
    

    // Adiciona novas linhas a tabela
    tabelaContatos.appendChild(novaLinha);

    // Limpa os campos de entrada
    form.reset();
});

// Adiciona um ouvinte de evento para a excluir contatos
tabelaContatos.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const linhaContato = event.target.closest('tr');
        linhaContato.remove();
    
    }
});


 alert("O JavaScript foi carregado com sucesso!");

// IDs alterados para português conforme o novo HTML
const botaoEnviarNome = document.getElementById('botao-enviar-nome');
const entradaNome = document.getElementById('nome-usuario');
const divRespostaDinamica = document.getElementById('resposta-dinamica');
const mensagemBoasVindas = document.getElementById('mensagem-boas-vindas');
const botaoPreparado = document.getElementById('botao-preparado');
const secaoConteudo = document.getElementById('secao-conteudo');
const botaoAlternarTema = document.getElementById('botao-alternar-tema');

// Função para processar o nome e exibir a mensagem inicial
botaoEnviarNome.addEventListener('click', () => {
    // Armazena o nome digitado em uma variável tirando espaços extras
    const nomeUsuario = entradaNome.value.trim();

    // Valida se o campo não está vazio
    if (nomeUsuario !== "") {
        // Altera o texto da mensagem de forma funcional e personalizada
        mensagemBoasVindas.innerHTML = `Olá <strong>${nomeUsuario}</strong>, fico feliz em te ter aqui. Agora vamos aprender sobre a tecnologia no agro!`;
        
        // Remove a classe em português para mostrar a mensagem e o próximo botão
        divRespostaDinamica.classList.remove('elemento-oculto');
    } else {
        alert("Por favor, digite o seu nome antes de enviar.");
    }
});

// Função para revelar o conteúdo principal do site
botaoPreparado.addEventListener('click', () => {
    // Remove a classe que esconde a seção sobre tecnologia no agro
    secaoConteudo.classList.remove('elemento-oculto');
});

// Função para alternar o Modo Escuro (Melhoria de Usabilidade)
botaoAlternarTema.addEventListener('click', () => {
    // Adiciona ou remove a classe .dark-mode do body a cada clique
    document.body.classList.toggle('dark-mode');
});

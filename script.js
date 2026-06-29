alert(java script ta funcionando)

const btnSubmitName = document.getElementById('botao-enviar-nome');
const inputName = document.getElementById('nome-usuario');
const dynamicResponseDiv = document.getElementById('resposta-dinamica');
const welcomeMessage = document.getElementById('mensagem-boas-vindas');
const btnReady = document.getElementById('botao-preparado');
const contentSection = document.getElementById('secao-conteudo');
const toggleThemeBtn = document.getElementById('botao-alternar-tema');

// Função para processar o nome e exibir a saudação inicial
btnSubmitName.addEventListener('click', () => {
    // Armazena o nome digitado em uma variável tirando espaços extras
    const userName = inputName.value.trim();

    // Valida se o campo não está vazio
    if (userName !== "") {
        // Altera o texto da mensagem de forma funcional e personalizada
        welcomeMessage.innerHTML = `Olá <strong>${userName}</strong>, fico feliz em te ter aqui. Agora vamos aprender sobre a tecnologia no agro!`;
        
        // Remove a classe para mostrar a mensagem e o próximo botão
        dynamicResponseDiv.classList.remove('elemento-oculto');
    } else {
        alert("Por favor, digite o seu nome antes de enviar.");
    }
});

// Função para revelar o conteúdo principal do site
btnReady.addEventListener('click', () => {
    // Remove a classe que esconde a seção sobre tecnologia no agro
    contentSection.classList.remove('elemento-oculto');
});

// Função para alternar o Modo Escuro (Melhoria de Usabilidade)
toggleThemeBtn.addEventListener('click', () => {
    // Adiciona ou remove a classe .dark-mode do body a cada clique
    document.body.classList.toggle('dark-mode');
});

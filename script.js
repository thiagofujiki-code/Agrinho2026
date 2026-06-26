alert("O JavaScript foi carregado com sucesso!");

const btnSubmitName = document.getElementById('btn-submit-name');
const inputName = document.getElementById('user-name');
const dynamicResponseDiv = document.getElementById('dynamic-response');
const welcomeMessage = document.getElementById('welcome-message');
const btnReady = document.getElementById('btn-ready');
const contentSection = document.getElementById('content-section');
const toggleThemeBtn = document.getElementById('toggle-theme-btn');

// Função para processar o nome e exibir a saudação inicial
btnSubmitName.addEventListener('click', () => {
    // Armazena o nome digitado em uma variável tirando espaços extras
    const userName = inputName.value.trim();

    // Valida se o campo não está vazio
    if (userName !== "") {
        // Altera o texto da mensagem de forma funcional e personalizada
        welcomeMessage.innerHTML = `Olá <strong>${userName}</strong>, fico feliz em te ter aqui. Agora vamos aprender sobre a tecnologia no agro!`;
        
        // Remove a classe para mostrar a mensagem e o próximo botão
        dynamicResponseDiv.classList.remove('hidden-element');
    } else {
        alert("Por favor, digite o seu nome antes de enviar.");
    }
});

// Função para revelar o conteúdo principal do site
btnReady.addEventListener('click', () => {
    // Remove a classe que esconde a seção sobre tecnologia no agro
    contentSection.classList.remove('hidden-element');
});

// Função para alternar o Modo Escuro (Melhoria de Usabilidade)
toggleThemeBtn.addEventListener('click', () => {
    // Adiciona ou remove a classe .dark-mode do body a cada clique
    document.body.classList.toggle('dark-mode');
});

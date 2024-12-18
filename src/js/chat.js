// Selecionar elementos do chat
const chatButton = document.getElementById('chatButton'); // Botão para abrir o widget de chat
const chatWidget = document.getElementById('chatWidget'); // Widget de chat (janela do chat)
const closeChat = document.getElementById('closeChat');   // Botão "x" para fechar o chat
const chatInput = document.getElementById('chatInput');   // Campo de entrada de mensagem do usuário
const sendMessage = document.getElementById('sendMessage'); // Botão para enviar a mensagem

// Abrir a janela de chat ao clicar no botão de chat
chatButton.addEventListener('click', () => {
    chatWidget.style.display = 'flex'; // Define o estilo do chat como "flex" para exibi-lo
});

// Fechar a janela de chat ao clicar no botão "x"
closeChat.addEventListener('click', () => {
    chatWidget.style.display = 'none'; // Esconde o widget ao definir o estilo como "none"
});

// Fechar o chat ao pressionar a tecla Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && chatWidget.style.display === 'flex') {
        chatWidget.style.display = 'none'; // Esconde o widget caso a tecla Esc seja pressionada
    }
});

// Função para enviar a mensagem no chat
function sendChatMessage() {
    const userMessage = chatInput.value.trim(); // Captura o valor digitado no campo de entrada, removendo espaços extras

    if (userMessage) {
        const chatBody = document.querySelector('.chat-widget-body'); // Seleciona o corpo do chat onde as mensagens aparecem

        // Cria um elemento de mensagem do usuário
        const userMessageElement = document.createElement('p');
        userMessageElement.textContent = `Você: ${userMessage}`; // Adiciona o texto digitado pelo usuário
        userMessageElement.style.color = '#4CAF50'; // Define a cor da mensagem do usuário
        chatBody.appendChild(userMessageElement); // Insere a mensagem no corpo do chat

        // Simula uma resposta automática da IA após 1 segundo
        setTimeout(() => {
            const botMessageElement = document.createElement('p');
            botMessageElement.textContent = `IA: Estou aqui para ajudar!`; // Texto da mensagem da IA
            botMessageElement.style.color = '#ffffff'; // Define a cor da mensagem da IA
            chatBody.appendChild(botMessageElement); // Adiciona a mensagem da IA ao corpo do chat

            // Rola o chat automaticamente para o final, mostrando a última mensagem
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);

        // Limpa o campo de entrada após o envio
        chatInput.value = '';
    }
}

// Adicionar evento ao botão de envio (quando o botão é clicado)
sendMessage.addEventListener('click', sendChatMessage);

// Adicionar funcionalidade de enviar mensagem ao pressionar Enter no campo de texto
chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada foi "Enter"
        event.preventDefault(); // Previne a quebra de linha no campo de texto
        sendChatMessage(); // Chama a função de envio de mensagem
    }
});

// Função para revelar elementos ao rolar a página
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

// Função que valida os campos do formulário
function validateForm() {
    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;
    const projectDownloadLink = document.getElementById('project-download-link').value;
    const projectGithubLink = document.getElementById('project-github-link').value;

    if (!projectName || !projectDescription || !projectDownloadLink || !projectGithubLink) {
        alert('Por favor, preencha todos os campos!');
        return false;
    }
    return true;
}

// Função que salva os projetos no Local Storage
function saveProjectsToLocalStorage() {
    localStorage.setItem('projects', projectsList.innerHTML);
}

// Função que carrega os projetos do Local Storage
function loadProjectsFromLocalStorage() {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
        projectsList.innerHTML = savedProjects;
        attachRemoveListeners(); // Reanexa os eventos de remoção
    }
}

// Função para adicionar um novo projeto
function addProject(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Valida os inputs do formulário
    if (!validateForm()) return;

    // Captura os valores dos inputs
    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;
    const projectDownloadLink = document.getElementById('project-download-link').value;
    const projectGithubLink = document.getElementById('project-github-link').value;

    // Cria o elemento HTML do novo projeto
    const projectElement = document.createElement('div');
    projectElement.classList.add('projeto', 'reveal');
    projectElement.innerHTML = `
        <h3>${projectName}</h3>
        <p>${projectDescription}</p>
        <a href="${projectDownloadLink}" download>Baixar Projeto</a>
        <a href="${projectGithubLink}" target="_blank">Ver no GitHub</a>
        <button class="remove-project">×</button> <!-- Ícone "X" para remover -->
    `;

    // Animação ao adicionar o projeto
    projectElement.style.opacity = 0;
    projectsList.appendChild(projectElement);
    setTimeout(() => projectElement.style.opacity = 1, 100); // Animação suave

    // Reanexa os event listeners de remoção
    attachRemoveListeners();

    // Salva os projetos no Local Storage
    saveProjectsToLocalStorage();

    // Limpa os campos do formulário
    form.reset();
}

// Função que remove o projeto com uma animação suave
function removeProject(button) {
    const projectElement = button.parentElement;

    // Animação de fade-out ao remover o projeto
    projectElement.style.transition = 'opacity 0.3s ease';
    projectElement.style.opacity = 0;

    // Remove o projeto após a animação
    setTimeout(() => {
        projectElement.remove();
        saveProjectsToLocalStorage(); // Atualiza o Local Storage
    }, 300); // Aguardar a animação terminar
}

// Função que reanexa os event listeners de remoção de projeto
function attachRemoveListeners() {
    const removeButtons = document.querySelectorAll('.remove-project');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            removeProject(button); // Chama a função de remover o projeto
        });
    });
}

// Função que lida com a rolagem para revelar elementos
window.addEventListener('scroll', revealOnScroll);

// Seleciona o formulário e a lista de projetos
const form = document.getElementById('add-project-form');
const projectsList = document.getElementById('projects-list');

// Carrega os projetos ao iniciar a página
loadProjectsFromLocalStorage();

// Adiciona o evento de submit ao formulário
form.addEventListener('submit', addProject);

// Selecionar elementos
const chatButton = document.getElementById('chatButton');
const chatWidget = document.getElementById('chatWidget');
const closeChat = document.getElementById('closeChat');

// Abrir a janela de chat ao clicar no botão
chatButton.addEventListener('click', () => {
    chatWidget.style.display = 'flex'; // Mostrar o widget
});

// Fechar a janela de chat ao clicar no botão "x"
closeChat.addEventListener('click', () => {
    chatWidget.style.display = 'none'; // Esconder o widget
});

// Placeholder para envio de mensagem
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');

sendMessage.addEventListener('click', () => {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        alert(`Mensagem enviada: ${userMessage}`); // Simula envio (troque para integração futura)
        chatInput.value = ''; // Limpa o campo
    }
});

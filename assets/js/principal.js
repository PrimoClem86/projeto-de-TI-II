// Configurações básicas
const apiBaseUrl = 'http://localhost:5000'; // URL base do seu backend

// Função para buscar dados de um endpoint e exibir no console
async function fetchData(endpoint) {
    try {
        const response = await fetch(`${apiBaseUrl}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Exemplo de função para enviar dados para o backend
async function sendData(endpoint, data) {
    try {
        const response = await fetch(`${apiBaseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`);
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }
}

// Adiciona eventos aos botões ou formulários (exemplo)
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('#submit-button');
    const dataForm = document.querySelector('#data-form');

    if (submitButton && dataForm) {
        submitButton.addEventListener('click', async () => {
            const formData = new FormData(dataForm);
            const data = Object.fromEntries(formData.entries());

            // Enviar dados para o backend (substitua 'endpoint' pelo endpoint real)
            await sendData('endpoint', data);
        });
    }

    // Exemplo de como buscar e exibir dados ao carregar a página
    fetchData('endpoint'); // Substitua 'endpoint' pelo endpoint real
});

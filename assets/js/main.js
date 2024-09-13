import axios from 'axios';

// Base URL para o backend
const BASE_URL = 'http://localhost:5000';

// Função para fazer uma requisição GET
function fetchData(endpoint) {
    axios.get(`${BASE_URL}/${endpoint}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

// Função para fazer uma requisição POST
function postData(endpoint, data) {
    axios.post(`${BASE_URL}/${endpoint}`, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
        });
}

// Exemplo de uso
fetchData('veiculos'); // Para obter dados dos veículos
postData('abastecimento', { /* dados do abastecimento */ }); // Para enviar dados de abastecimento

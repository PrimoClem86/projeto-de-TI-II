// abastecimento.js

const baseUrl = 'http://localhost:5000/api/abastecimento';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('abastecimento-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const veiculo = document.getElementById('veiculo').value;
    const quantidade = document.getElementById('quantidade').value;

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ veiculo, quantidade }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      // Mostrar mensagem de sucesso ou atualizar a UI
    } catch (error) {
      console.error('Error:', error);
      // Mostrar mensagem de erro
    }
  });
});

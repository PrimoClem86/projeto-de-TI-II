// chegada.js

const baseUrl = 'http://localhost:5000/api/chegada';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('chegada-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const placa = document.getElementById('placa').value;
    const quilometragem = document.getElementById('quilometragem').value;
    const horaChegada = document.getElementById('horaChegada').value;

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placa, quilometragem, horaChegada }),
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

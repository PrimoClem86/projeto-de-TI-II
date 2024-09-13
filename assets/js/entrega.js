// entrega.js

const baseUrl = 'http://localhost:5000/api/entrega';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('entrega-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const placa = document.getElementById('placa').value;
    const quilometragem = document.getElementById('quilometragem').value;
    const horaSaida = document.getElementById('horaSaida').value;

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placa, quilometragem, horaSaida }),
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

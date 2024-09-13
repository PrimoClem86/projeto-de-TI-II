// veiculos.js

const baseUrl = 'http://localhost:5000/api/veiculos';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('veiculos-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const placa = document.getElementById('placa').value;
    const modelo = document.getElementById('modelo').value;

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ placa, modelo }),
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

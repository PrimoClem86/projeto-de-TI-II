// estatistica.js

const baseUrl = 'http://localhost:5000/api/estatistica';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('estatistica-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = document.getElementById('data').value;

    try {
      const response = await fetch(`${baseUrl}?data=${data}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      // Mostrar os resultados na UI
    } catch (error) {
      console.error('Error:', error);
      // Mostrar mensagem de erro
    }
  });
});

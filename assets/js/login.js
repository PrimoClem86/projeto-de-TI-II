// login.js

const baseUrl = 'http://localhost:5000/api/login';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, senha }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      // Redirecionar ou mostrar mensagem de sucesso
    } catch (error) {
      console.error('Error:', error);
      // Mostrar mensagem de erro
    }
  });
});

// cadastro.js

const baseUrl = 'http://localhost:5000/api/cadastro';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastro-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const matricula = document.getElementById('matricula').value;
    const telefone = document.getElementById('telefone').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cargo, matricula, telefone, usuario, senha }),
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

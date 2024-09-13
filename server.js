const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

// Serve o index.html para qualquer outra rota
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Frontend server running at http://localhost:${port}/`);
});

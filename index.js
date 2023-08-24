const express = require('express');
const app = express();
const port = 3000;

// Ruta para la página de estado
app.get('/status', (req, res) => {
  res.send('OK'); // Respondemos con "OK" para indicar que la aplicación está en funcionamiento
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor web iniciado en http://localhost:${port}`);
});

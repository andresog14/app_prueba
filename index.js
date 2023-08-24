const express = require('express');
const app = express();


// Ruta para la página principal
app.get('/', (req, res) => {
  res.send('<h1>¡Hola, mundo!</h1>');
});

// Iniciar el servidor
app.listen(process.env.PORT || 3000 ) 
  console.log('Servidor web iniciado en', process.env.PORT || 3000 );
;

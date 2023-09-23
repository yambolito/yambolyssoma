const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {  // Obtén la ruta del recurso solicitado por el client
  const filePath = path.join(__dirname, req.url === '/' ? 'yamboly.html' : req.url)
  const fileExtension = path.extname(filePath);
  let contentType = 'text/html';

  // Asigna el tipo de contenido adecuado según la extensión del archivo
  switch (fileExtension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
  }

  // Lee el archivo solicitado y envíalo al cliente
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Archivo no encontrado
        fs.readFile(path.join(__dirname, '404.html'), (err, notFoundContent) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(notFoundContent, 'utf-8');
        });
      } else {
        // Error interno del servidor
        res.writeHead(500);
        res.end('Error interno del servidor: ' + err.code);
      }
    } else {
      // Archivo encontrado, envía su contenido
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
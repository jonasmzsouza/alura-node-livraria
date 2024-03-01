const http = require("http");
const port = 3000;

const rotes = {
  "/": "Curso de Node",
  "/livros": "Listagem de livros",
  "/autores": "Listagem de autores",
  "/editora": "Listagem de editoras",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotes[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});

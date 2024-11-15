import express from "express"; // Requisição do pacote do express
const app = express();        // Instância do Express
const port = 3000;            // Define a porta

app.get("/", (req, res) => {  // Cria a rota da raiz do projeto
  console.log("Rota GET/ solicitada");
  res.json({
    mensagem: "Bem-vindo à API!",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando a porta: ${port}`);
});

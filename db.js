// db.js
const mysql = require('mysql2');

// Criar uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',       // Endereço do servidor MySQL
  user: 'root',            // Seu usuário do MySQL
  password: 'sua_senha',   // Sua senha do MySQL
  database: 'adocao_pets'  // Nome do seu banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

// Exportar a conexão para ser usada em outros arquivos
module.exports = connection;
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar o transportador de e-mail
const transporter = nodemailer.createTransport({
    service: 'gmail', // Ou o serviço de e-mail que você estiver usando
    auth: {
        user: 'petlarcorporation@gmail.com', // Seu e-mail
        pass: 'rafaela2006@' // Sua senha de aplicativo
    }
});

// Rota de cadastro
app.post('/cadastro', (req, res) => {
    const { nome, email, senha, telefone } = req.body;

    // Configurar os dados do e-mail
    const mailOptions = {
        from: 'petlarcorporation@gmail.com', // Remetente
        to: 'petlarcorporation@gmail.com', // Destinatário (pode ser o mesmo que o remetente)
        subject: 'Novo Cadastro de Usuário',
        text: Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}\nTelefone: ${telefone}
    };

    // Enviar o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Erro ao enviar e-mail.');
        }
        res.status(201).send('Usuário cadastrado com sucesso! E-mail enviado.');
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados do formulário
    $nome = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $tipoDoacao = $_POST["donationType"];

    // Verificar se os campos estão preenchidos
    if (empty($nome) || empty($email) || empty($tipoDoacao)) {
        echo "Por favor, preencha todos os campos.";
        exit;
    }

    // Processar doação de dinheiro
    if ($tipoDoacao == "dinheiro") {
        $valorDoacao = $_POST["donationAmount"];
        if (empty($valorDoacao)) {
            echo "Por favor, insira um valor para a doação.";
            exit;
        }
        echo "<h2>Obrigado, $nome!</h2>";
        echo "<p>Agradecemos sua doação de R$ $valorDoacao.</p>";
    }

    // Processar doação de produtos
    if ($tipoDoacao == "produto") {
        $nomeProduto = $_POST["productName"];
        $quantidadeProduto = $_POST["productQuantity"];
        if (empty($nomeProduto) || empty($quantidadeProduto)) {
            echo "Por favor, insira os detalhes do produto.";
            exit;
        }
        echo "<h2>Obrigado, $nome!</h2>";
        echo "<p>Agradecemos sua doação de $quantidadeProduto $nomeProduto(s).</p>";
    }

    // Aqui você pode implementar o envio das informações para um e-mail ou banco de dados.
}
?>

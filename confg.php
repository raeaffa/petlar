<?php

$dbHost = 'LocalHost'; 
$dbUsername = 'root';
$dbPassword = 'murilodark321';
$dbName = 'tcc'
$conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName)
if($conexao->connect_errno)
{
    echo "erro";
}

else
{
    echo "Conecxão efetuada com sucesso";
}
?>
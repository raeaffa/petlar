let isLoggedIn = false; 
document.getElementById("adoptButton").addEventListener("click", function (){
    const messageDiv = document.getElementById("message");
    messageDiv.style.display = "block";

    if (isLoggedIn) {
        messageDiv.innerHTML= "Você já está logado! Preencha o formulário para adotar.";
    } else {
        messageDiv.innerHTML= " Você precisa estar cadastrado para adotar. Por favor, faça login ou registre-se.";
    
    }
});
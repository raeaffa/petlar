<script>
  // Seleciona todos os cards de adoção
  const adoptionCards = document.querySelectorAll('.adoption-card');
  
  // Modal e botão de fechar
  const modal = document.getElementById('adoptionModal');
  const closeBtn = document.querySelector('.close');

  // Função para abrir o modal
  adoptionCards.forEach(card => {
    card.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  });

  // Função para fechar o modal
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  }

  // Fechar modal clicando fora dele
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
</script>

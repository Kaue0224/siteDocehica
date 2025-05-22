let slideIndex = 1; // Inicia com o primeiro slide

// Chama a função para exibir o primeiro slide imediatamente após a página carregar
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});

// Função para avançar para o próximo slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Função para mostrar o slide clicado
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Função principal do slideshow
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Coleta os slides
  let dots = document.getElementsByClassName("dot"); // Coleta os pontos de navegação

  // Se o índice for maior que o número de slides, reinicia para o primeiro slide
  if (n > slides.length) { slideIndex = 1; }
  // Se o índice for menor que 1, vai para o último slide
  if (n < 1) { slideIndex = slides.length; }

  // Esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove a classe "active" de todos os pontos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";  
  // Adiciona a classe "active" ao ponto atual
  dots[slideIndex - 1].className += " active";
}

// Mostrar u ocultar el botón al hacer scroll
window.addEventListener("scroll", function () {
    showHideScrollTopButton();
  });
  
  function showHideScrollTopButton() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  }
  
  // Scroll hacia arriba al hacer clic en el botón
  document.getElementById("scrollTopBtn").addEventListener("click", function () {
    scrollToTop();
  });
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }

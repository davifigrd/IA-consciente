/* ==================================
   ANIMAÇÃO REVEAL (INTERSECTION OBSERVER)
================================== */
document.addEventListener("DOMContentLoaded", () => {
  const secoesParaAnimar = document.querySelectorAll(".animar-reveal");

  const configuracaoOpcoes = {
    root: null,
    threshold: 0.12,
    rootMargin: "0px"
  };

  const observadorScroll = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      }
    });
  }, configuracaoOpcoes);

  secoesParaAnimar.forEach(secao => {
    observadorScroll.observe(secao);
  });
});
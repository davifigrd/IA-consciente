/* ==================================
   DARK MODE
================================== */
const darkModeBtn = document.getElementById("darkModeBtn");

// Verifica o tema salvo antes de carregar o botão
if (localStorage.getItem("darkMode") === "ativo") {
  document.body.classList.add("dark");
  atualizarIconeDark(true);
}

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");

    if (isDark) {
      localStorage.setItem("darkMode", "ativo");
    } else {
      localStorage.removeItem("darkMode");
    }
    atualizarIconeDark(isDark);
  });
}

function atualizarIconeDark(isDark) {
  if (!darkModeBtn) return;
  const icone = darkModeBtn.querySelector("i");
  if (icone) {
    icone.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

/* ==================================
   REVEAL SCROLL (cards internos, sem mudanças)
================================== */
// Adicionado os novos cards de casos reais e guias para também animarem no scroll
const elementos = document.querySelectorAll(
  ".card, .risk, .case-card, .stat-card, .about, .benefits-grid div, .caso-card-real, .guia-card"
);

function revelarElementos() {
  elementos.forEach(elemento => {
    const topo = elemento.getBoundingClientRect().top;
    const alturaTela = window.innerHeight * 0.85;

    if (topo < alturaTela) {
      elemento.classList.add("mostrar");
    }
  });
}

// Throttle via requestAnimationFrame: evita que a função rode
// várias vezes dentro do mesmo frame durante um scroll rápido.
let revelarAgendado = false;
window.addEventListener("scroll", () => {
  if (revelarAgendado) return;
  revelarAgendado = true;
  requestAnimationFrame(() => {
    revelarElementos();
    revelarAgendado = false;
  });
});
revelarElementos();

/* ==================================
   ANIMAÇÃO REVEAL DAS SEÇÕES (INTERSECTION OBSERVER)
   Mesmo padrão usado em sobre.js: aplica fade/translate
   nas seções marcadas com a classe "animar-reveal".
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

/* ==================================
   NAVBAR DINÂMICA
================================== */
const header = document.querySelector("header");

let navbarAgendada = false;
window.addEventListener("scroll", () => {
  if (navbarAgendada) return;
  navbarAgendada = true;
  requestAnimationFrame(() => {
    if (header) {
      if (window.scrollY > 100) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
      } else {
        header.style.boxShadow = "none";
      }
    }
    navbarAgendada = false;
  });
});

/* ==================================
   CONTADORES (INTELIGENTES NO SCROLL)

   AJUSTE ANTI-FLICK:
   A versão anterior usava setInterval + um listener de
   "scroll" que rodava a cada pixel rolado, checando a
   posição da seção centenas de vezes por segundo. Rolar
   rápido fazia esse listener competir com a própria
   atualização do número, causando o engasgo visual.

   Agora a detecção de visibilidade usa IntersectionObserver
   (dispara só quando a seção realmente entra na tela, sem
   recalcular a cada pixel) e a contagem usa
   requestAnimationFrame em vez de setInterval, que é
   sincronizado com o repaint do navegador e não compete
   com o scroll.
================================== */
function animarContador(id, final, duracao) {
  const elemento = document.getElementById(id);
  if (!elemento) return;

  // Fixa uma largura mínima baseada no valor final, para o
  // número não empurrar o layout do card enquanto conta.
  // Usamos "block" + margin auto (em vez de inline-block) para
  // manter a centralização horizontal definida pelo .stat-card.
  const larguraFinal = final.toLocaleString().length;
  elemento.style.display = "block";
  elemento.style.minWidth = `${larguraFinal}ch`;
  elemento.style.marginLeft = "auto";
  elemento.style.marginRight = "auto";

  const inicioTempo = performance.now();

  function passo(agora) {
    const progresso = Math.min((agora - inicioTempo) / duracao, 1);
    const valorAtual = Math.floor(progresso * final);

    elemento.innerText = valorAtual.toLocaleString();

    if (progresso < 1) {
      requestAnimationFrame(passo);
    } else {
      elemento.innerText = final.toLocaleString();
    }
  }

  requestAnimationFrame(passo);
}

// Faz os contadores iniciarem apenas quando a seção de estatísticas
// estiver visível, usando IntersectionObserver (mais eficiente que
// escutar o evento de scroll diretamente).
const secaoStats = document.querySelector(".stats");

if (secaoStats) {
  const observadorStats = new IntersectionObserver(
    (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          animarContador("usuarios", 520000000, 2000);
          animarContador("conteudos", 1500000000, 2200);
          animarContador("riscos", 320000, 2500);
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observadorStats.observe(secaoStats);
}

/* ==================================
   BOTÃO VOLTAR AO TOPO
================================== */
const btnTopo = document.createElement("button");
btnTopo.id = "btnTopo";
btnTopo.innerHTML = "↑";
document.body.appendChild(btnTopo);

let btnTopoAgendado = false;
window.addEventListener("scroll", () => {
  if (btnTopoAgendado) return;
  btnTopoAgendado = true;
  requestAnimationFrame(() => {
    if (window.scrollY > 400) {
      btnTopo.classList.add("show");
    } else {
      btnTopo.classList.remove("show");
    }
    btnTopoAgendado = false;
  });
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==================================
   MENU MOBILE
================================== */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("ativo");

    // Altera o ícone de barras para o 'X' quando o menu abre
    const icone = menuBtn.querySelector("i");
    if (icone) {
      icone.className = navLinks.classList.contains("ativo")
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    }
  });
}

/* ==================================
   MENSAGEM EDUCATIVA
================================== */
window.addEventListener("load", () => {
  const mensagem = document.createElement("div");
  mensagem.className = "mensagem-ia";
  mensagem.innerHTML = `<strong>Dica:</strong> Verifique sempre informações geradas por IA antes de compartilhar.`;
  document.body.appendChild(mensagem);

  setTimeout(() => {
    mensagem.classList.add("sumir");
    setTimeout(() => { mensagem.remove(); }, 1000);
  }, 6000);
});

/* ==================================
   ANO AUTOMÁTICO
================================== */
const ano = document.getElementById("anoAtual");
if (ano) {
  ano.innerText = new Date().getFullYear();
}

console.log("IA Consciente carregado com otimizações.");

/* ==================================
   EFEITO RIPPLE NOS BOTÕES
   Aplica um círculo expansivo a partir do
   ponto de clique em qualquer botão do site.
   Não requer alterações em outros arquivos.
================================== */
document.addEventListener("DOMContentLoaded", () => {
  const seletoresComRipple = [
    ".btn-primary",
    ".btn-secondary",
    ".btn-cta-link",
    ".btn-dificuldade",
    ".alternativa-btn",
    ".copiar-exemplo",
    ".opcao-card",
    "#analisarBtn",
    "#colarBtn",
    "#limparBtn",
    "#btn-proximo-turing",
    ".btn-reiniciar",
    ".btn-reiniciar-quiz"
  ].join(", ");

  document.addEventListener("click", (evento) => {
    const alvo = evento.target.closest(seletoresComRipple);
    if (!alvo) return;

    // Evita ripple em botões desabilitados (ex: alternativas já respondidas)
    if (alvo.classList.contains("desabilitada")) return;

    const estiloPosicao = window.getComputedStyle(alvo).position;
    if (estiloPosicao === "static") {
      alvo.style.position = "relative";
    }
    alvo.style.overflow = "hidden";

    const circulo = document.createElement("span");
    const diametro = Math.max(alvo.clientWidth, alvo.clientHeight);
    const raio = diametro / 2;
    const retangulo = alvo.getBoundingClientRect();

    circulo.style.width = circulo.style.height = `${diametro}px`;
    circulo.style.left = `${evento.clientX - retangulo.left - raio}px`;
    circulo.style.top = `${evento.clientY - retangulo.top - raio}px`;
    circulo.classList.add("ripple-circulo");

    alvo.appendChild(circulo);

    circulo.addEventListener("animationend", () => {
      circulo.remove();
    });
  });
});

/* ==================================
   TOAST DE CONFIRMAÇÃO
   Pequena notificação flutuante reutilizável.
   Uso: mostrarToast("Texto aqui")
================================== */
function mostrarToast(texto, tipo = "sucesso") {
  const toastExistente = document.querySelector(".toast-confirmacao");
  if (toastExistente) toastExistente.remove();

  const toast = document.createElement("div");
  toast.className = `toast-confirmacao toast-${tipo}`;
  toast.innerHTML = `
    <i class="fa-solid ${tipo === "sucesso" ? "fa-circle-check" : "fa-circle-info"}"></i>
    <span>${texto}</span>
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("toast-visivel");
  });

  setTimeout(() => {
    toast.classList.remove("toast-visivel");
    setTimeout(() => toast.remove(), 400);
  }, 2600);
}

/* ==================================
   TOAST AO COPIAR EXEMPLO (SIMULADOR)
   Detecta clique em ".copiar-exemplo" e mostra
   confirmação, sem alterar a lógica do simulador.js
================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copiar-exemplo").forEach((botao) => {
    botao.addEventListener("click", () => {
      mostrarToast("Exemplo carregado no campo de análise!");
    });
  });
});

/* ==================================
   MICRO-SHAKE EM RESPOSTAS ERRADAS
   Observa quando o quiz ou o turing adicionam a
   classe "errada" / "revelada-humano" e aplica
   um leve tremor no elemento, sem mexer no JS original.

   CORREÇÃO DO BUG DE TRAVAMENTO:
   A versão anterior entrava em loop infinito porque o
   próprio código adicionava a classe "shake-erro" dentro
   do callback do MutationObserver, e essa adição era
   capturada pelo mesmo observer (que escuta mudanças de
   classe), disparando o callback de novo, indefinidamente.
   Agora o observer é desconectado antes de tocarmos na
   classe, e cada elemento só treme uma vez por rodada.
================================== */
document.addEventListener("DOMContentLoaded", () => {
  const containerQuiz = document.getElementById("quiz-dinamico");
  const containerTuring = document.getElementById("jogo-turing");

  function observarErros(container, seletorErro) {
    if (!container) return;

    const jaAnimados = new WeakSet();

    const observador = new MutationObserver((mutacoes) => {
      for (const mutacao of mutacoes) {
        if (mutacao.type !== "attributes" || mutacao.attributeName !== "class") {
          continue;
        }

        const elemento = mutacao.target;

        // Ignora a própria classe de shake (evita auto-disparo)
        if (elemento.classList.contains("shake-erro")) continue;

        if (elemento.matches && elemento.matches(seletorErro) && !jaAnimados.has(elemento)) {
          jaAnimados.add(elemento);

          // Pausa a observação antes de modificar a classe
          observador.disconnect();

          elemento.classList.add("shake-erro");
          elemento.addEventListener(
            "animationend",
            () => elemento.classList.remove("shake-erro"),
            { once: true }
          );

          // Reconecta no próximo ciclo, depois que a escrita já ocorreu
          setTimeout(() => {
            observador.observe(container, {
              attributes: true,
              subtree: true,
              attributeFilter: ["class"]
            });
          }, 0);

          break;
        }
      }
    });

    observador.observe(container, {
      attributes: true,
      subtree: true,
      attributeFilter: ["class"]
    });
  }

  observarErros(containerQuiz, ".alternativa-btn.errada");
  observarErros(containerTuring, ".opcao-card.revelada-humano");
});
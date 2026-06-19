/* ==================================
   ELEMENTOS
================================== */

const textoInput = document.getElementById("texto");
const analisarBtn = document.getElementById("analisarBtn");
const colarBtn = document.getElementById("colarBtn");
const limparBtn = document.getElementById("limparBtn");
const resultado = document.getElementById("resultado");
const score = document.getElementById("score");
const resultadoCard = document.querySelector(".resultado-card");
const botoesExemplo = document.querySelectorAll(".copiar-exemplo");

/* ==================================
   ESTADO INICIAL
================================== */

function resetUI() {
  score.textContent = "0%";
  score.style.color = "var(--secondary)";

  resultadoCard.classList.remove(
    "risco-baixo",
    "risco-medio",
    "risco-alto"
  );

  resultado.innerHTML = `
    <p>
      Cole um texto e clique em
      <strong>Analisar texto</strong>.
    </p>
  `;
}

resetUI();

/* ==================================
   ANIMAÇÃO DA PORCENTAGEM
================================== */

function animarScore(valorFinal) {
  const valorInicial = parseInt(score.textContent) || 0;

  const duracao = 1800;
  const inicio = performance.now();

  function atualizar(tempoAtual) {
    const progresso = Math.min((tempoAtual - inicio) / duracao, 1);

    const valorAtual = Math.round(
      valorInicial + (valorFinal - valorInicial) * progresso
    );

    score.textContent = `${valorAtual}%`;

    if (progresso < 1) {
      requestAnimationFrame(atualizar);
    }
  }

  requestAnimationFrame(atualizar);
}

/* ==================================
   ANÁLISE DO TEXTO
================================== */

function analisarTexto() {
  const texto = textoInput.value.trim();

  resultado.innerHTML = "";

  if (!texto) {
    resetUI();

    resultado.innerHTML = `
      <div class="alerta mostrar">
        Insira um texto para realizar a análise.
      </div>
    `;

    return;
  }

  let confiabilidade = 100;
  const alertas = [];

  const padroes = [
    {
      regex: /\b\d{4}\b/g,
      pontos: 15,
      mensagem: "Verifique se as datas mencionadas estão atualizadas."
    },
    {
      regex: /estudos mostram|pesquisas indicam|especialistas afirmam/gi,
      pontos: 30,
      mensagem: "Foram encontradas referências genéricas sem fonte específica."
    },
    {
      regex: /sempre|nunca|todos|ninguém|garantido|com certeza/gi,
      pontos: 35,
      mensagem: "Foram identificadas afirmações absolutas."
    },
    {
      regex: /revolucionário|incrível|perfeito|infalível|extraordinário/gi,
      pontos: 20,
      mensagem: "O texto utiliza linguagem excessivamente persuasiva."
    },
    {
      regex: /\b\d+%/g,
      pontos: 10,
      mensagem: "Verifique a origem dos dados estatísticos apresentados."
    }
  ];

  padroes.forEach((padrao) => {
    if (padrao.regex.test(texto)) {
      confiabilidade -= padrao.pontos;
      alertas.push(padrao.mensagem);
    }
  });

  confiabilidade = Math.max(confiabilidade, 0);

  resultadoCard.classList.remove(
    "risco-baixo",
    "risco-medio",
    "risco-alto"
  );

  let corAtual = "";

  if (confiabilidade >= 80) {
    corAtual = "#22c1b8";
    resultadoCard.classList.add("risco-baixo");
  } else if (confiabilidade >= 50) {
    corAtual = "#f59e0b";
    resultadoCard.classList.add("risco-medio");
  } else {
    corAtual = "#ff5757";
    resultadoCard.classList.add("risco-alto");
  }

  score.style.color = corAtual;

  animarScore(confiabilidade);

  if (alertas.length === 0) {
    const alerta = document.createElement("div");
    alerta.className = "alerta mostrar";
    alerta.innerHTML = `
      Nenhum padrão de risco foi encontrado.
      Ainda assim, verifique as informações em fontes confiáveis.
    `;
    resultado.appendChild(alerta);
    return;
  }

  alertas.forEach((mensagem, index) => {
    const alerta = document.createElement("div");

    alerta.className = "alerta";
    alerta.style.borderLeftColor = corAtual;
    alerta.style.color = corAtual;

    alerta.innerHTML = `
      <i class="fa-solid fa-triangle-exclamation"></i>
      ${mensagem}
    `;

    resultado.appendChild(alerta);

    setTimeout(() => {
      alerta.classList.add("mostrar");
    }, index * 450);
  });
}

/* ==================================
   EVENTOS
================================== */

analisarBtn?.addEventListener("click", analisarTexto);

colarBtn?.addEventListener("click", async () => {
  try {
    const textoClipboard = await navigator.clipboard.readText();
    textoInput.value = textoClipboard;
    analisarTexto();
  } catch {
    alert("Não foi possível acessar a área de transferência.");
  }
});

limparBtn?.addEventListener("click", () => {
  textoInput.value = "";
  resetUI();
  textoInput.focus();
});

/* ==================================
   EXEMPLOS PRONTOS
================================== */

botoesExemplo.forEach((botao) => {
  botao.addEventListener("click", () => {
    const id = botao.dataset.target;

    const textoExemplo = document
      .getElementById(id)
      .textContent
      .replace(/\s+/g, " ")
      .trim();

    textoInput.value = textoExemplo;

    const isMobile = window.innerWidth <= 900;

    const elementoAlvo = isMobile
      ? document.getElementById("scoreBox")
      : document.querySelector(".simulador-section");

    if (elementoAlvo) {
      let elementoTopo;

      if (isMobile) {
        const rect = elementoAlvo.getBoundingClientRect();
        const metadeTela = window.innerHeight / 2;
        const metadeElemento = rect.height / 2;

        elementoTopo = rect.top + window.scrollY - metadeTela + metadeElemento;
      } else {
        elementoTopo = elementoAlvo.getBoundingClientRect().top + window.scrollY - 100;
      }

      window.scrollTo({
        top: elementoTopo,
        behavior: "smooth"
      });
    }

    setTimeout(() => {
      analisarTexto();
      if (!isMobile) {
        textoInput.focus();
      }
    }, 500);
  });
});
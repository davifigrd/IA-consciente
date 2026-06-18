/* ==================================
   ELEMENTOS
================================== */

const textoInput =
  document.getElementById("texto");

const analisarBtn =
  document.getElementById("analisarBtn");

const colarBtn =
  document.getElementById("colarBtn");

const resultado =
  document.getElementById("resultado");

const score =
  document.getElementById("score");

/* ==================================
   ESTADO INICIAL
================================== */

score.textContent = "0%";

resultado.innerHTML = `
  <p>
    Cole um texto e clique em
    <strong>Analisar texto</strong>.
  </p>
`;

/* ==================================
   ANÁLISE DO TEXTO
================================== */

function analisarTexto() {

  const texto =
    textoInput.value.trim();

  resultado.innerHTML = "";

  if (texto === "") {

    score.textContent = "0%";

    score.style.color =
      "var(--secondary)";

    resultado.innerHTML = `
      <div class="alerta">
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
      mensagem:
        "Verifique se as datas mencionadas estão atualizadas."
    },

    {
      regex: /estudos mostram|pesquisas indicam|especialistas afirmam/gi,
      pontos: 30,
      mensagem:
        "Foram encontradas referências genéricas sem fonte específica."
    },

    {
      regex: /sempre|nunca|todos|ninguém|garantido|com certeza/gi,
      pontos: 35,
      mensagem:
        "Foram identificadas afirmações absolutas."
    },

    {
      regex: /revolucionário|incrível|perfeito|infalível|extraordinário/gi,
      pontos: 20,
      mensagem:
        "O texto utiliza linguagem excessivamente persuasiva."
    },

    {
      regex: /\b\d+%/g,
      pontos: 10,
      mensagem:
        "Verifique a origem dos dados estatísticos apresentados."
    }

  ];

  padroes.forEach(padrao => {

    if (padrao.regex.test(texto)) {

      confiabilidade -=
        padrao.pontos;

      alertas.push(
        padrao.mensagem
      );

    }

  });

  confiabilidade = Math.max(
    confiabilidade,
    0
  );

  score.textContent =
    `${confiabilidade}%`;

  if (confiabilidade >= 80) {

    score.style.color =
      "#22c1b8";

  }
  else if (confiabilidade >= 50) {

    score.style.color =
      "#f59e0b";

  }
  else {

    score.style.color =
      "#ff5757";

  }

  if (alertas.length === 0) {

    resultado.innerHTML = `
      <div class="alerta">
        Nenhum padrão de risco foi encontrado.
        Ainda assim, verifique as informações
        em fontes confiáveis.
      </div>
    `;

    return;

  }

  alertas.forEach(alerta => {

    resultado.innerHTML += `
      <div class="alerta">
        <i class="fa-solid fa-triangle-exclamation"></i>
        ${alerta}
      </div>
    `;

  });

}

/* ==================================
   EVENTOS
================================== */

if (analisarBtn) {

  analisarBtn.addEventListener(
    "click",
    analisarTexto
  );

}

if (colarBtn) {

  colarBtn.addEventListener(
    "click",
    async () => {

      try {

        const textoClipboard =
          await navigator.clipboard.readText();

        textoInput.value =
          textoClipboard;

      }
      catch {

        alert(
          "Não foi possível acessar a área de transferência."
        );

      }

    }
  );

}
const limparBtn =
  document.getElementById(
    "limparBtn"
  );

if (limparBtn) {

  limparBtn.addEventListener(
    "click",
    () => {

      texto.value = "";

      score.textContent = "0%";

      score.style.color =
        "var(--secondary)";

      resultado.innerHTML = `
        <p>
          Cole um texto e clique em
          <strong>Analisar texto</strong>.
        </p>
      `;

      texto.focus();

    }
  );

}

/* ==================================
   COPIAR EXEMPLOS
================================== */

const botoesExemplo = document.querySelectorAll(".copiar-exemplo");

botoesExemplo.forEach((botao) => {
  botao.addEventListener("click", async () => {
    const id = botao.dataset.target;

    const texto = document.getElementById(id).textContent.trim();

    try {
      await navigator.clipboard.writeText(texto);

      botao.innerHTML = `
        <i class="fa-solid fa-check"></i>
        Copiado
      `;

      setTimeout(() => {
        botao.innerHTML = `
          <i class="fa-solid fa-copy"></i>
          Copiar exemplo
        `;
      }, 2000);
    } catch {
      alert("Não foi possível copiar o texto.");
    }
  });
});
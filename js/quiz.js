/* ==================================
   BANCO DE DADOS DO QUIZ
================================== */
const bancoDadosQuiz = [
  {
    pergunta: "Se o simulador identificar palavras como 'revolucionário', 'infalível' ou 'perfeito', qual padrão de risco está sendo alertado?",
    alternativas: [
      { texto: "O texto utiliza linguagem excessivamente persuasiva ou comercial, inadequada para a produção acadêmica.", pontos: 10, correto: true },
      { texto: "O texto atingiu o nível máximo de confiabilidade científica e está pronto para entrega.", pontos: 0, correto: false },
      { texto: "A ferramenta de Inteligência Artificial travou por excesso de palavras complexas.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Termos generalistas como 'estudos mostram' ou 'especialistas afirmam' reduzem a nota de confiabilidade no simulador porque:",
    alternativas: [
      { texto: "Configuram referências genéricas e vagas, sem a indicação explícita da fonte, autor ou instituição.", pontos: 10, correto: true },
      { texto: "Significa que o texto foi copiado diretamente de um livro físico protegido por direitos autorais.", pontos: 0, correto: false },
      { texto: "São termos proibidos pela gramática normativa da Língua Portuguesa.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "O uso de palavras absolutistas como 'sempre', 'nunca' ou 'com certeza' gera um alerta no simulador pelo seguinte motivo:",
    alternativas: [
      { texto: "A ciência trabalha com hipóteses e evidências mutáveis; afirmações absolutas costumam indicar falta de rigor crítico.", pontos: 10, correto: true },
      { texto: "IAs gastam mais poder de processamento quando tentam garantir certezas absolutas.", pontos: 0, correto: false },
      { texto: "Essas palavras indicam automaticamente que o texto foi traduzido de outro idioma de forma errada.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Ao encontrar um ano isolado no texto (ex: 'em 2018'), qual checagem o simulador sugere que você faça?",
    alternativas: [
      { texto: "Verificar se os dados associados àquela data permanecem atualizados e se a fonte temporal ainda é válida.", pontos: 10, correto: true },
      { texto: "Apagar o ano imediatamente para evitar que detectores de plágio rastreiem o trabalho.", pontos: 0, correto: false },
      { texto: "Trocar o ano para o ano corrente (2026) para fingir que a pesquisa acabou de ser feita.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Quando o simulador detecta o símbolo de porcentagem (%) e pede para verificar os dados, qual é o risco oculto?",
    alternativas: [
      { texto: "A IA pode ter inventado (alucinado) os dados estatísticos e as respectivas porcentagens apresentadas.", pontos: 10, correto: true },
      { texto: "O navegador não consegue renderizar caracteres especiais de porcentagem no ambiente acadêmico.", pontos: 0, correto: false },
      { texto: "Significa que a nota do seu trabalho cairá exatamente aquela mesma porcentagem indicada.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Se um texto colado no simulador obtiver uma nota de 55% de confiabilidade, qual será a classificação do risco?",
    alternativas: [
      { texto: "Risco Médio / Usuário Exposto (necessita de revisões profundas e checagem de fontes).", pontos: 10, correto: true },
      { texto: "Risco Baixo / Navegador Consciente (o texto está perfeito e validado).", pontos: 0, correto: false },
      { texto: "Erro de Sistema (o texto inserido violou os termos de uso do servidor).", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Qual é o principal objetivo de utilizar este simulador de prompts antes de entregar uma produção acadêmica?",
    alternativas: [
      { texto: "Mapear vulnerabilidades textuais típicas de escrita artificial e mitigar riscos de plágio ou dados falsos.", pontos: 10, correto: true },
      { texto: "Fazer a Inteligência Artificial reescrever o texto automaticamente de uma forma mais bonita.", pontos: 0, correto: false },
      { texto: "Descobrir a senha institucional dos professores avaliadores da faculdade.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "O que você deve fazer quando o simulador aponta um alerta de 'Referências Genéricas' no seu texto?",
    alternativas: [
      { texto: "Buscar ativamente os artigos, autores ou portais oficiais que comprovam o que foi escrito e citá-los formalmente.", pontos: 10, correto: true },
      { texto: "Ignorar o aviso, pois expressões vagas deixam o texto com um tom mais misterioso e sofisticado.", pontos: 0, correto: false },
      { texto: "Substituir a expressão por outra parecida, como trocar 'estudos mostram' por 'dizem por aí'.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Um texto que não aciona nenhum dos padrões mapeados (100% de confiabilidade no simulador) significa que:",
    alternativas: [
      { texto: "Não possui os vícios estruturais comuns de IA analisados, mas o estudante ainda deve ler e garantir a veracidade.", pontos: 10, correto: true },
      { texto: "A informação está blindada contra qualquer erro e o aluno está permanentemente livre de checar fontes.", pontos: 0, correto: false },
      { texto: "O sistema falhou e não conseguiu fazer a leitura de nenhuma linha digitada.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Como o simulador atua em conjunto com as diretrizes de ética e integridade da FAMINAS?",
    alternativas: [
      { texto: "Promovendo o uso crítico, consciente e assistido da tecnologia, combatendo o plágio por cópia automatizada.", pontos: 10, correto: true },
      { texto: "Proibindo o aluno de abrir qualquer ferramenta digital durante o semestre letivo.", pontos: 0, correto: false },
      { texto: "Garantindo nota máxima automática em qualquer disciplina sem a necessidade de avaliação do professor.", pontos: 0, correto: false }
    ]
  }
];

/* ==================================
   ESTADO GLOBAL DO QUIZ
================================== */
let perguntasQuiz = [];
let indicePergunta = 0;
let pontuacaoAtual = 0;
let respondendo = false;

/* ==================================
   REFERÊNCIAS DO DOM
================================== */
const quizDinamico = document.getElementById("quiz-dinamico");
const perguntaAtualTxt = document.getElementById("pergunta-atual-txt");
const pontosQuizTxt = document.getElementById("pontos-quiz-txt");
const barraProgresso = document.getElementById("progresso-preenchido-quiz");

/* ==================================
   FUNÇÕES UTILITÁRIAS
================================== */
function cortarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* ==================================
   INICIALIZAÇÃO DO QUIZ
================================== */
function inicializarQuiz() {
  indicePergunta = 0;
  pontuacaoAtual = 0;
  respondendo = false;

  perguntasQuiz = cortarArray([...bancoDadosQuiz]);
  document.getElementById("painel-status-quiz").style.display = "flex";

  renderizarQuestaoQuiz();
}

/* ==================================
   RENDERIZAÇÃO DA QUESTÃO ATUAL
================================== */
function renderizarQuestaoQuiz() {
  if (indicePergunta >= perguntasQuiz.length) {
    exibirResultadoFinalQuiz();
    return;
  }

  respondendo = false;

  perguntaAtualTxt.textContent = `${indicePergunta + 1}/${perguntasQuiz.length}`;
  pontosQuizTxt.textContent = pontuacaoAtual;

  const porcentagem = (indicePergunta / perguntasQuiz.length) * 100;
  barraProgresso.style.width = `${porcentagem}%`;

  const dadosQuestao = perguntasQuiz[indicePergunta];
  const alternativasEmbaralhadas = cortarArray([...dadosQuestao.alternativas]);

  quizDinamico.innerHTML = `
    <div class="pergunta-card">
      <h2>Simulador e Análise Crítica - Questão ${indicePergunta + 1}</h2>
      <p>${dadosQuestao.pergunta}</p>
      <div class="alternativas-lista">
        ${alternativasEmbaralhadas.map((opcao) => `
          <button class="alternativa-btn" data-correto="${opcao.correto}" data-pontos="${opcao.pontos}" onclick="computarEscolhaQuiz(this)">
            ${opcao.texto}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

/* ==================================
   LÓGICA DE RESPOSTA (CLIQUE NA ALTERNATIVA)
================================== */
window.computarEscolhaQuiz = function (botaoSelecionado) {
  if (respondendo) return;
  respondendo = true;

  const todasAlternativas = document.querySelectorAll(".alternativa-btn");
  const pontosGanhos = parseInt(botaoSelecionado.dataset.pontos, 10);

  todasAlternativas.forEach(btn => {
    btn.classList.add("desabilitada");
  });

  todasAlternativas.forEach(btn => {
    if (btn.dataset.correto === "true") {
      btn.classList.add("correta");
    }
  });

  if (botaoSelecionado.dataset.correto !== "true") {
    botaoSelecionado.classList.add("errada");
  }

  pontuacaoAtual += pontosGanhos;
  pontosQuizTxt.textContent = pontuacaoAtual;

  setTimeout(() => {
    indicePergunta++;
    renderizarQuestaoQuiz();
  }, 2500);
};

/* ==================================
   TELA DE RESULTADO FINAL
================================== */
function exibirResultadoFinalQuiz() {
  barraProgresso.style.width = "100%";
  perguntaAtualTxt.textContent = "10/10";

  let tituloResult = "";
  let classeRisco = "";
  let iconeResult = "";
  let descResult = "";

  if (pontuacaoAtual >= 80) {
    tituloResult = "Nível Avançado: Analista Consciente";
    classeRisco = "risco-baixo";
    iconeResult = "fa-chart-line";
    descResult = "Excelente! Você compreendeu perfeitamente todos os padrões de risco avaliados pelo nosso simulador. Sabe identificar afirmações absolutas, linguagem persuasiva e dados soltos, demonstrando o rigor crítico exigido pela FAMINAS.";
  } else if (pontuacaoAtual >= 50) {
    tituloResult = "Nível Intermediário: Usuário Vulnerável";
    classeRisco = "risco-medio";
    iconeResult = "fa-triangle-exclamation";
    descResult = "Bom resultado, mas atenção! Você confunde alguns critérios de validação do simulador. Negligenciar alertas de referências genéricas ou dados estatísticos sem checagem aprofundada pode comprometer seus trabalhos.";
  } else {
    tituloResult = "Nível Iniciante: Alto Risco Crítico";
    classeRisco = "risco-alto";
    iconeResult = "fa-bolt";
    descResult = "Alerta Técnico! Suas respostas indicam dificuldade em reconhecer os padrões de erro gerados por IA. É altamente recomendável revisar os conceitos do nosso simulador e ler atentamente o Guia de Verificação.";
  }

  document.getElementById("painel-status-quiz").style.display = "none";

  quizDinamico.innerHTML = `
    <div class="center-card">
      <i class="fa-solid ${iconeResult} ${classeRisco}" style="font-size: 4.5rem; margin-bottom: 25px;"></i>
      <h2 class="${classeRisco}">${tituloResult}</h2>
      <p style="font-size: 1.4rem; margin: 20px 0 10px;">Sua pontuação final: <strong>${pontuacaoAtual} / 100 Pontos</strong></p>
      <p style="font-size: 1.05rem; line-height:1.6; max-width:700px; margin: 0 auto 30px; color: var(--gray);">${descResult}</p>
      <button class="btn-reiniciar-quiz" onclick="inicializarQuiz()">Refazer Avaliação</button>
    </div>
  `;
}

/* ==================================
   EXECUÇÃO INICIAL
================================== */
inicializarQuiz();
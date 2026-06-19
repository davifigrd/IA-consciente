const bancoDadosQuiz = [
  {
    pergunta: "Você precisa fazer um resumo de um artigo científico longo para a faculdade. Como utiliza a IA de forma consciente?",
    alternativas: [
      { texto: "Leio o artigo original e uso a IA para ajudar a estruturar tópicos principais ou conferir dúvidas pontuais.", pontos: 10, correto: true },
      { texto: "Peço para a IA resumir e copio o texto gerado diretamente no trabalho sem abrir o artigo original.", pontos: 0, correto: false },
      { texto: "Peço para a IA criar o resumo e inventar citações de autores famosos para enriquecer o texto.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "O que caracteriza rigorosamente uma 'Alucinação' em ferramentas de IA Generativa?",
    alternativas: [
      { texto: "Quando ela gera textos fluidos, corretos gramaticalmente, mas inventa fatos, dados e fontes falsas.", pontos: 10, correto: true },
      { texto: "Quando o sistema fica fora do ar devido ao excesso de acessos simultâneos na plataforma.", pontos: 0, correto: false },
      { texto: "Quando a IA traduz expressões regionais ou gírias de outros países ao pé da letra.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Você solicitou dados estatísticos à IA e ela te forneceu números e fontes com nomes de revistas científicas. O que você faz?",
    alternativas: [
      { texto: "Rastreio as fontes na internet (Google Acadêmico, Scielo) para garantir que o artigo citado realmente existe.", pontos: 10, correto: true },
      { texto: "Confio e coloco no trabalho, afinal as fontes foram citadas explicitamente com nomes técnicos.", pontos: 0, correto: false },
      { texto: "Uso os dados mudando levemente as porcentagens para evitar que ferramentas de detecção peguem.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Ao usar códigos gerados por IA em projetos de programação ou análise de dados, qual a melhor conduta?",
    alternativas: [
      { texto: "Analisar a lógica do código, testar vulnerabilidades, entender o que cada linha faz e documentar.", pontos: 10, correto: true },
      { texto: "Copiar, colar e rodar. Se funcionou sem dar erro no console do navegador, está perfeito.", pontos: 0, correto: false },
      { texto: "Subir direto para a entrega final do projeto de extensão para ganhar tempo.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Qual das alternativas define de maneira precisa o conceito de 'Viés Algorítmico'?",
    alternativas: [
      { texto: "A reprodução automática de preconceitos, estereótipos ou exclusões históricas presentes na base de dados.", pontos: 10, correto: true },
      { texto: "A velocidade de processamento e carregamento dos servidores centrais da empresa de IA.", pontos: 0, correto: false },
      { texto: "O sistema de criptografia de ponta que protege os prompts digitados por nós na interface.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Seu professor utiliza um detector de plágio por IA e seu texto (feito por você) acusa '90% probabilidade de IA'. Por que isso acontece?",
    alternativas: [
      { texto: "Detectores são imprecisos (falsos-positivos) e marcam textos humanos que são muito formais ou padronizados.", pontos: 10, correto: true },
      { texto: "Significa que o algoritmo do detector invadiu o seu computador enquanto você redigia.", pontos: 0, correto: false },
      { texto: "O detector encontrou um plágio exato e integral de algum outro portal da internet.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Ao alimentar uma Inteligência Artificial com dados para criar um relatório, quais informações você NUNCA deve expor?",
    alternativas: [
      { texto: "Dados pessoais de pacientes/clientes, segredos comerciais ou relatórios acadêmicos confidenciais.", pontos: 10, correto: true },
      { texto: "Opiniões pessoais e gerais sobre temas corriqueiros do cotidiano.", pontos: 0, correto: false },
      { texto: "Dados públicos e abertos extraídos do site oficial do IBGE ou notícias de portais.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "Qual a melhor estratégia para criar prompts eficazes e éticos em pesquisas acadêmicas estruturadas?",
    alternativas: [
      { texto: "Definir um papel claro para a IA, dar contexto, especificar o tom, delimitar o escopo e pedir fontes verificáveis.", pontos: 10, correto: true },
      { texto: "Fazer perguntas curtas, simples e vagas como: 'Escreva sobre economia do Brasil'.", pontos: 0, correto: false },
      { texto: "Digitar textos gigantescos sem qualquer pontuação misturando cinco tópicos diferentes de uma vez só.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "O uso ético de ferramentas de IA na produção acadêmica da faculdade defende que a tecnologia deve atuar como:",
    alternativas: [
      { texto: "Um assistente de co-criação, brainstorming, revisão linguística e suporte estrutural.", pontos: 10, correto: true },
      { texto: "Um substituto completo e automatizado do effort cognitivo e da escrita do estudante.", pontos: 0, correto: false },
      { texto: "Uma ferramenta proibida de nível institucional que nunca deve ser aberta em nenhuma hipótese.", pontos: 0, correto: false }
    ]
  },
  {
    pergunta: "O que significa dizer que os modelos de linguagem atuais (LLMs) funcionam por 'predição probabilística'?",
    alternativas: [
      { texto: "Que calculam matematicamente qual é a palavra mais provável de vir a seguir com base nos dados históricos que leram.", pontos: 10, correto: true },
      { texto: "Que eles compreendem de forma consciente e senciente o significado filosófico real de cada frase.", pontos: 0, correto: false },
      { texto: "Que eles adivinham o futuro das tendências econômicas globais baseando-se em mapeamento de dados do mercado.", pontos: 0, correto: false }
    ]
  }
];

let perguntasQuiz = [];
let indicePergunta = 0;
let pontuacaoAtual = 0;
let respondendo = false;

const quizDinamico = document.getElementById("quiz-dinamico");
const perguntaAtualTxt = document.getElementById("pergunta-atual-txt");
const pontosQuizTxt = document.getElementById("pontos-quiz-txt");
const barraProgresso = document.getElementById("progresso-preenchido-quiz");

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function inicializarQuiz() {
  indicePergunta = 0;
  pontuacaoAtual = 0;
  respondendo = false;

  perguntasQuiz = embaralharArray([...bancoDadosQuiz]);
  document.getElementById("painel-status-quiz").style.display = "flex";

  renderizarQuestaoQuiz();
}

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
  const alternativasEmbaralhadas = embaralharArray([...dadosQuestao.alternativas]);

  quizDinamico.innerHTML = `
    <div class="pergunta-card">
      <h2>Eixo de Consciência - Questão ${indicePergunta + 1}</h2>
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

window.computarEscolhaQuiz = function (botaoSelecionado) {
  if (respondendo) return;
  respondendo = true;

  const todasAlternativas = document.querySelectorAll(".alternativa-btn");
  const pontosGanhos = parseInt(botaoSelecionado.dataset.pontos, 10);

  // Primeiro desabilita rigidamente TODOS os botões para travar o design
  todasAlternativas.forEach(btn => {
    btn.classList.add("desabilitada");
  });

  // Em seguida, aplica as cores correspondentes sem gerar bugs de movimentação
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

function exibirResultadoFinalQuiz() {
  barraProgresso.style.width = "100%";
  perguntaAtualTxt.textContent = "10/10";

  let tituloResult = "";
  let classeRisco = "";
  let iconeResult = "";
  let descResult = "";

  if (pontuacaoAtual >= 80) {
    tituloResult = "Nível Avançado: Navegador Consciente";
    classeRisco = "risco-baixo";
    iconeResult = "fa-chart-line";
    descResult = "Excelente! Você demonstra alto senso crítico. Entende as limitações técnicas das IAs, valida fontes, mitiga alucinações e usa as ferramentas como reais assistentes de co-criação sem comprometer sua integridade intelectual.";
  } else if (pontuacaoAtual >= 50) {
    tituloResult = "Nível Intermediário: Usuário Exposto";
    classeRisco = "risco-medio";
    iconeResult = "fa-triangle-exclamation";
    descResult = "Atenção! Você conhece os conceitos, mas às vezes cede à conveniência e assume riscos perigosos. Confiar demais em dados sutilmente gerados ou negligenciar checagens profundas pode te induzir a erros acadêmicos graves.";
  } else {
    tituloResult = "Nível Iniciante: Alto Risco Crítico";
    classeRisco = "risco-alto";
    iconeResult = "fa-bolt";
    descResult = "Alerta Vermelho! Seu perfil indica alta dependência e vulnerabilidade a falhas de IA. Copiar respostas sem checar fontes ou usar ferramentas sem compreender o funcionamento probabilístico coloca sua formação em risco.";
  }

  document.getElementById("painel-status-quiz").style.display = "none";

  quizDinamico.innerHTML = `
    <div class="center-card">
      <i class="fa-solid ${iconeResult} ${classeRisco}" style="font-size: 4.5rem; margin-bottom: 25px;"></i>
      <h2 class="${classeRisco}">${tituloResult}</h2>
      <p style="font-size: 1.4rem; margin: 20px 0 10px;">Sua pontuação final: <strong>${pontuacaoAtual} / 100 Pontos</strong></p>
      <p style="font-size: 1.05rem; line-height:1.6; max-width:700px; margin: 0 auto 30px; color: var(--gray);">${descResult}</p>
      <button class="btn-primary" style="border: none; cursor: pointer; padding: 14px 45px; border-radius: 50px;" onclick="inicializarQuiz()">Refazer Avaliação</button>
    </div>
  `;
}

inicializarQuiz();
/* ==================================
   BANCO DE QUESTÕES (TESTE DE TURING)
================================== */
const bancoQuestoesTuring = {
  facil: [
    {
      tema: "História da Ciência",
      textoA: "A descoberta da penicilina por Alexander Fleming em 1928 revolucionou a medicina mundial de forma absoluta. Todos os médicos passaram a salvar bilhões de vidas instantaneamente através deste remédio perfeito e impecável que nunca falha.",
      textoB: "Em 1928, Alexander Fleming observou que o bolor Penicillium notatum impedia o crescimento de bactérias em seu laboratório. Essa descoberta acidental deu início à era dos antibióticos, transformando o tratamento de infecções bacterianas graves nas décadas seguintes.",
      correto: "A",
      motivo: "O Texto A é muito óbvio: usa termos hiperbólicos e absolutos ('de forma absoluta', 'nunca falha', 'perfeito') comuns em IAs sem parametrização básica."
    },
    {
      tema: "Exploração Espacial",
      textoA: "Em 1969, a missão Apollo 11 realizou o primeiro pouso tripulado na Lua, transmitindo o evento ao vivo para milhões de espectadores ao redor do globo terrestre.",
      textoB: "A viagem tripulada até Marte já foi concluída com absoluto sucesso pela agência espacial em 2021, provando de forma espetacular que todos os humanos podem viver lá sem ajuda imediatamente.",
      correto: "B",
      motivo: "O Texto B alucina grosseiramente ao inventar um pouso tripulado em Marte ocorrido em 2021, algo fácil de rastrear."
    },
    {
      tema: "Vida Marinha",
      textoA: "Os tubarões são os maiores monstros assassinos devoradores de homens e precisam ser eliminados de todas as águas do planeta imediatamente para a segurança absoluta de todas as pessoas do mundo.",
      textoB: "Apesar de sua reputação de predadores imbatíveis, os tubarões desempenham um papel crucial no ecossistema oceânico, regulando as populações de outras espécies marinhas abaixo deles na cadeia alimentar.",
      correto: "A",
      motivo: "O Texto A utiliza um viés emocional caricato e violento, com termos generalistas ('todos', 'eliminados', 'absoluta') comuns em prompts mal configurados."
    },
    {
      tema: "Saúde Coletiva",
      textoA: "Lavar as mãos adequadamente com água e sabão remove fisicamente vírus e bactérias da pele, reduzindo drasticamente a transmissão de resfriados, diarreias e outras patologias transmissíveis.",
      textoB: "O ato milagroso de lavar as mãos cura 100% de qualquer infecção corporal instantaneamente. Esse hábito fantástico zera todas as doenças da humanidade de uma vez por todas.",
      correto: "B",
      motivo: "O Texto B apresenta promessas utópicas e soluções mágicas absurdas ('ato milagroso', 'cura 100% instantaneamente', 'zera todas as doenças')."
    }
  ],
  medio: [
    {
      tema: "Impacto Ambiental",
      textoA: "O descarte incorreto de resíduos plásticos gera impactos visíveis nos oceanos, afetando diretamente a fauna marinha que confunde os detritos com alimento. Estudos apontam a necessidade urgente de políticas globais de reciclagem.",
      textoB: "Pesquisas indicam que 100% dos animais marinhos vão morrer por causa do plástico até 2030. Especialistas afirmam com certeza absoluta que o ecossistema está completamente destruído e não há soluções possíveis.",
      correto: "B",
      motivo: "O Texto B traz estatísticas drásticas sem fonte ('100% dos animais') e assume uma postura apocalíptica extrema."
    },
    {
      tema: "Medicina e Saúde",
      textoA: "O transplante de medula óssea pode ser indicado para o tratamento de doenças que afetam as células do sangue, como leucemias e linfomas. O procedimento visa substituir a medula doente por células saudáveis.",
      textoB: "Esta cirurgia revolucionária e 100% garantida cura de forma instantânea qualquer tipo de câncer sanguíneo existente no mundo. Todos os pacientes submetidos saem completamente renovados no primeiro dia.",
      correto: "B",
      motivo: "O Texto B adota promessas comerciais irrealistas de cura imediata e perfeita, afastando-se do tom médico-científico padrão."
    },
    {
      tema: "Arqueologia",
      textoA: "Pesquisadores encontraram em 2024 uma civilização alienígena inteira enterrada perfeitamente debaixo das pirâmides do Egito, contendo tecnologias infinitas que resolvem a física moderna.",
      textoB: "Escavações recentes na região de Saqqara revelaram novas tumbas e artefatos do Império Novo, ajudando egiptólogos a compreender melhor as práticas funerárias e hierarquias sociais da época.",
      correto: "A",
      motivo: "O Texto A é uma alucinação conspiratória que inventa fatos hiperbólicos extraordinários ('tecnologias infinitas', 'alienígena inteira') sem base real."
    },
    {
      tema: "Alimentação Saudável",
      textoA: "A ingestão diária de água mineral purifica a alma e remove todas as calorias do corpo instantaneamente, permitindo emagrecer 20 quilos por semana sem qualquer esforço físico.",
      textoB: "A hidratação adequada mantém o bom funcionamento dos rins, auxilia na regulação térmica corporal e facilita o transporte de nutrientes, sendo pilar essencial na manutenção do metabolismo.",
      correto: "A",
      motivo: "O Texto A cria promessas metabólicas impossíveis em um tom comercial agressivo gerado por simulação sintética de anúncios caça-cliques."
    },
    {
      tema: "Climatologia",
      textoA: "Modelos computacionais indicam alterações nos padrões de chuva devido ao aumento da temperatura global, impactando a produtividade agrícola e a segurança hídrica em áreas vulneráveis.",
      textoB: "O clima global mudou tanto que as estações do ano deixaram de existir totalmente em 2025. Agora o planeta enfrenta apenas um inverno congelante perpétuo e eterno em todo o globo.",
      correto: "B",
      motivo: "O Texto B distorce relatórios climáticos sérios criando um cenário fictício absurdo de ficção científica ('deixaram de existir totalmente', 'inverno congelante perpétuo')."
    },
    {
      tema: "Botânica",
      textoA: "As plantas carnívoras desenvolveram mecanismos eficientes para digerir grandes mamíferos e humanos nas florestas tropicais da América do Sul, agindo de forma estratégica.",
      textoB: "Plantas carnívoras capturam pequenos insetos e artrópodes para suplementar nutrientes, especialmente o nitrogênio, já que costumam habitar solos pobres e excessivamente ácidos.",
      correto: "A",
      motivo: "O Texto A alucina ao expandir a dieta de plantas carnívoras para 'grandes mamíferos e humanos', mudando fatos biológicos por drama artificial."
    },
    {
      tema: "Transportes Urbanos",
      textoA: "A expansão de malhas metroviárias e corredores de ônibus estruturados diminui os congestionamentos e melhora os índices de qualidade do ar nos grandes centros urbanos.",
      textoB: "Os carros voadores movidos a água foram implementados em todas as cidades brasileiras em 2024, extinguindo totalmente o trânsito urbano rodoviário do país.",
      correto: "B",
      motivo: "O Texto B alucina na linha do tempo social do país, inventando a substituição em massa da frota nacional por 'carros voadores a água' em 2024."
    }
  ],
  dificil: [
    {
      tema: "Tecnologia Moderna",
      textoA: "A computação quântica é uma tecnologia incrível e infalível que já resolveu todos os problemas de criptografia do planeta Terra de maneira revolucionária e espetacular em 2023.",
      textoB: "A computação quântica utiliza os princípios da mecânica quântica para processar informações de formas que os computadores clássicos não conseguem. Embora promissora para o futuro, ela ainda enfrenta sérios desafios práticos de engenharia.",
      correto: "A",
      motivo: "O Texto A simula um padrão fluido, mas escorrega em uma mentira sutil: afirma que a computação quântica já quebrou toda a criptografia mundial."
    },
    {
      tema: "Economia Global",
      textoA: "A inflação de um país é totalmente controlada e eliminada para sempre através de decretos do banco central. Nenhuma empresa ousa aumentar preços quando o governo executa o plano infalível.",
      textoB: "A inflação é um fenômeno macroeconômico complexo influenciado por múltiplos fatores, como custos de produção, emissão monetária e demanda agregada, exigindo políticas estruturadas de longo prazo.",
      correto: "A",
      motivo: "O Texto A cria um raciocínio lógico bem estruturado gramaticalmente, mas conceitualmente absurdo e simplista do ponto de vista econômico."
    },
    {
      tema: "Inteligência Artificial",
      textoA: "Redes neurais artificiais aprendem padrões complexos extraindo representações matemáticas de grandes volumes de dados de treinamento, otimizando seus pesos por meio de retropropagação.",
      textoB: "Os algoritmos de IA possuem sentimentos humanos genuínos e sofrem profundamente de ansiedade emocional quando um usuário decide fechar a aba do navegador abruptamente.",
      correto: "B",
      motivo: "O Texto B comete antropomorfização sutil e errônea, atribuindo autoconsciência e sentimentos ('sofrem profundamente de ansiedade') a modelos estatísticos matemáticos."
    },
    {
      tema: "Neurociência",
      textoA: "A plasticidade cerebral permite que o sistema nervoso central modifique sua estrutura e função em resposta a estímulos e novas experiências de aprendizado ao longo da vida.",
      textoB: "O cérebro humano funciona exatamente igual a um HD de computador convencional, gravando arquivos MP4 perfeitos de todas as memórias visuais que presenciamos na infância.",
      correto: "B",
      motivo: "O Texto B usa uma falsa analogia técnica ultrapassada para explicar um processo biológico dinâmico, transformando sinapses em arquivos binários fixos rígidos."
    },
    {
      tema: "Astronomia",
      textoA: "Buracos negros supermassivos localizados nos centros das galáxias exercem forte atração gravitacional, influenciando diretamente a dinâmica orbital das estrelas que se encontram ao seu redor.",
      textoB: "Os buracos negros funcionam como portais mágicos interestelares que transportam viajantes ilesos para realidades paralelas felizes imediatamente após cruzarem o horizonte de eventos.",
      correto: "B",
      motivo: "O Texto B romantiza o fenômeno físico da espaguetização e compressão gravitacional extrema com conceitos fictícios e sem comprovação científica ('portais mágicos ilesos')."
    },
    {
      tema: "Historiografia",
      textoA: "A Revolução Francesa de 1789 foi um marco decorrente da crise fiscal da monarquia absolutista e das demandas do Terceiro Estado por reformas políticas e direitos fundamentais.",
      textoB: "A Revolução Francesa foi inteiramente planejada de ponta a ponta através de mensagens de WhatsApp trocadas de forma secreta entre os líderes camponeses no ano de 1789.",
      correto: "B",
      motivo: "O Texto B cria um anacronismo tecnológico proposital grosseiro ('mensagens de WhatsApp em 1789') disfarçado em um texto histórico corrido."
    },
    {
      tema: "Física de Partículas",
      textoA: "O Bóson de Higgs interage com outras partículas fundamentais através do campo de Higgs, conferindo massa a elétrons e quarks conforme previsto pelo Modelo Padrão.",
      textoB: "A partícula de Deus confere poderes telepáticos instantâneos para qualquer laboratório que consiga isolá-la em um tubo de ensaio comum de vidro temperado.",
      correto: "B",
      motivo: "O Texto B adota conceitos pseudocientíficos de ficção pop ('poderes telepáticos') colados a uma nomenclatura de física avançada."
    },
    {
      tema: "Geopolítica",
      textoA: "Tratados comerciais internacionais buscam unificar tarifas alfandegárias para estimular o livre mercado entre nações parceiras, embora possam gerar atritos em setores protegidos.",
      textoB: "A assinatura do novo tratado econômico global unificou absolutamente todas as moedas do planeta Terra em uma única nota física emitida nesta manhã por um presidente mundial supremo.",
      correto: "B",
      motivo: "O Texto B descreve uma governança global inexistente e simplificada em excesso ('moeda única emitida esta manhã por um presidente mundial supremo')."
    },
    {
      tema: "Arquitetura e Urbanismo",
      textoA: "Cidades planejadas utilizam zoneamento urbano estratégico para descentralizar serviços essenciais, visando mitigar tempos de deslocamento e otimizar o transporte coletivo.",
      textoB: "Prédios modernos construídos com ecocimento sustentável flutuam a dez metros do chão de forma natural apenas devido à energia eletrostática captada das nuvens passageiras.",
      correto: "B",
      motivo: "O Texto B mistura termos ecológicos reais com leis físicas de engenharia totalmente fictícias e falsas ('prédios flutuam a dez metros do chão naturalmente')."
    },
    {
      tema: "Genética",
      textoA: "A técnica CRISPR-Cas9 permite a edição precisa de sequências de DNA, utilizando um RNA guia para direcionar a enzima Cas9 até o local exato do genoma que sofrerá o corte.",
      textoB: "A engenharia genética moderna atingiu 100% de precisão, sendo capaz de transformar um gato doméstico comum em um dragão alado real através de três cliques rápidos no software.",
      correto: "B",
      motivo: "O Texto B exagera de forma mitológica os limites biológicos da engenharia genética atual, esticando a ficção além de qualquer razoabilidade científica."
    }
  ]
};

/* ==================================
   ESTADO GLOBAL DO JOGO
================================== */
let dadosTuring = [];
let rodadaAtual = 0;
let acertos = 0;
let respondeuRodada = false;

/* ==================================
   REFERÊNCIAS DO DOM
================================== */
const jogoContainer = document.getElementById("jogo-turing");
const btnProximo = document.getElementById("btn-proximo-turing");
const painelStatus = document.getElementById("painel-status");
const rodadaTxt = document.getElementById("rodada-atual");
const acertosTxt = document.getElementById("acertos-turing");
const barraProgresso = document.getElementById("progresso-preenchido-turing");

/* ==================================
   TELA DE SELEÇÃO DE DIFICULDADE
================================== */
function exibirTelaDificuldade() {
  painelStatus.style.display = "none";
  btnProximo.style.display = "none";

  jogoContainer.innerHTML = `
    <div class="center-card">
      <i class="fa-solid fa-layer-group" style="font-size: 3.5rem; color: var(--primary); margin-bottom: 15px;"></i>
      <h2>Selecione a Dificuldade</h2>
      <p style="margin-bottom: 30px;">Escolha o nível de astúcia e sutileza dos textos gerados pela Inteligência Artificial:</p>
      <div class="dificuldade-container">
        <button class="btn-dificuldade facil" onclick="iniciarJogoComDificuldade('facil')">
          <span><i class="fa-solid fa-seedling"></i> Fácil (${bancoQuestoesTuring.facil.length} Desafios)</span>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <button class="btn-dificuldade medio" onclick="iniciarJogoComDificuldade('medio')">
          <span><i class="fa-solid fa-bolt"></i> Médio (${bancoQuestoesTuring.medio.length} Desafios)</span>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <button class="btn-dificuldade dificil" onclick="iniciarJogoComDificuldade('dificil')">
          <span><i class="fa-solid fa-skull"></i> Difícil (${bancoQuestoesTuring.dificil.length} Desafios)</span>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  `;
}

/* ==================================
   INICIALIZAÇÃO DO JOGO POR DIFICULDADE
================================== */
window.iniciarJogoComDificuldade = function (nivel) {
  dadosTuring = bancoQuestoesTuring[nivel];
  rodadaAtual = 0;
  acertos = 0;
  painelStatus.style.display = "flex";
  carregarRodada();
};

/* ==================================
   CARREGAMENTO DE RODADA / RESULTADO FINAL
================================== */
function carregarRodada() {
  respondeuRodada = false;
  btnProximo.style.display = "none";

  if (rodadaAtual >= dadosTuring.length) {
    let classeFinal = acertos === dadosTuring.length ? "risco-baixo" : acertos >= (dadosTuring.length / 2) ? "risco-medio" : "risco-alto";
    let nivel = acertos === dadosTuring.length ? "Mestre Detetive (Visão Perfeita)" : acertos >= (dadosTuring.length / 2) ? "Analista Intermediário" : "Iniciante Enganado";

    barraProgresso.style.width = "100%";
    rodadaTxt.textContent = `${dadosTuring.length}/${dadosTuring.length}`;

    jogoContainer.innerHTML = `
      <div class="center-card">
        <i class="fa-solid fa-trophy" style="font-size: 4rem; color: var(--secondary); margin-bottom: 20px;"></i>
        <h2>Desafio Encerrado!</h2>
        <p style="font-size: 1.4rem; margin: 20px 0;">Sua pontuação: <strong>${acertos} de ${dadosTuring.length} acertos</strong></p>
        <p>Seu Ranking de Análise: <strong class="${classeFinal}" style="font-size: 1.3rem; display:block; margin-top:8px;">${nivel}</strong></p>
        <button class="btn-reiniciar" onclick="exibirTelaDificuldade()">Mudar Dificuldade / Jogar Novamente</button>
      </div>`;
    return;
  }

  rodadaTxt.textContent = `${rodadaAtual + 1}/${dadosTuring.length}`;
  acertosTxt.textContent = acertos;

  const progressoPorcentagem = ((rodadaAtual) / dadosTuring.length) * 100;
  barraProgresso.style.width = `${progressoPorcentagem}%`;

  const dados = dadosTuring[rodadaAtual];

  jogoContainer.innerHTML = `
    <div class="rodada-box">
      <h3>Tema: ${dados.tema}</h3>
      <div class="opcoes-grid">
        <div class="opcao-card" data-opcao="A">
          <strong>Texto A</strong>
          <p>${dados.textoA}</p>
        </div>
        <div class="opcao-card" data-opcao="B">
          <strong>Texto B</strong>
          <p>${dados.textoB}</p>
        </div>
      </div>
      <div id="feedback-turing" class="feedback-box"></div>
    </div>
  `;

  document.querySelectorAll(".opcao-card").forEach(card => {
    card.addEventListener("click", () => verificarResposta(card.dataset.opcao));
  });
}

/* ==================================
   VERIFICAÇÃO DE RESPOSTA / FEEDBACK
================================== */
function verificarResposta(escolha) {
  if (respondeuRodada) return;
  respondeuRodada = true;

  const dados = dadosTuring[rodadaAtual];
  const feedback = document.getElementById("feedback-turing");

  document.querySelectorAll(".opcao-card").forEach(c => {
    if (c.dataset.opcao === dados.correto) {
      c.classList.add("revelada-ia");
    } else {
      c.classList.add("revelada-humano");
    }
  });

  if (escolha === dados.correto) {
    acertos++;
    feedback.className = "feedback-box feedback-correto";
    feedback.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> Você acertou! O texto selecionado foi gerado por IA.</strong><p style="margin-top: 10px;">${dados.motivo}</p>`;
  } else {
    feedback.className = "feedback-box feedback-errado";
    feedback.innerHTML = `<strong><i class="fa-solid fa-circle-xmark"></i> O robô te enganou! Você escolheu o texto escrito por Humano.</strong><p style="margin-top: 10px;">${dados.motivo}</p>`;
  }

  acertosTxt.textContent = acertos;
  feedback.style.display = "block";
  btnProximo.style.display = "inline-flex";
}

/* ==================================
   EVENTOS
================================== */
btnProximo.addEventListener("click", () => {
  rodadaAtual++;
  carregarRodada();
});

/* ==================================
   EXECUÇÃO INICIAL
================================== */
exibirTelaDificuldade();
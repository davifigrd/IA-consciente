< !doctype html >
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sobre o Projeto | IA Consciente</title>

      <link rel="icon" href="../img/logo-arredondada.png" type="image/png" />

      <link rel="stylesheet" href="../css/style.css" />
      <link rel="stylesheet" href="../css/sobre.css" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
    </head>
    <body>
      <header>
        <nav class="navbar" aria-label="Navegação principal">
          <a href="index.html" class="logo-area">
            <img src="../img/logo.png" alt="IA Consciente" loading="lazy" />
            <span>IA Consciente</span>
          </a>

          <ul class="nav-links">
            <li><a href="index.html">Início</a></li>
            <li><a href="simulador.html">Simulador</a></li>
            <li><a href="turing.html">Teste de Turing</a></li>
            <li><a href="quiz.html">Quiz</a></li>
            <li><a href="sobre.html" class="active">Sobre</a></li>
          </ul>

          <div class="nav-buttons">
            <button
              id="darkModeBtn"
              type="button"
              aria-label="Alternar modo escuro"
            >
              <i class="fa-solid fa-moon"></i>
            </button>
            <button id="menuBtn" type="button" aria-label="Abrir menu">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
      </header>

      <section class="page-header sobre-hero">
        <div class="container">
          <h1>Sobre o Projeto</h1>
          <p class="hero-subtitle">
            Iniciativa acadêmica voltada ao desenvolvimento crítico, ético e
            técnico no uso de Inteligências Artificiais Generativas.
          </p>
        </div>
      </section>

      <main class="sobre-container">
        <section class="sobre-secao animar-reveal">
          <div class="sobre-grid">
            <div class="sobre-texto">
              <h2>Nossa Missão</h2>
              <p>
                O portal <strong>IA Consciente</strong> é um projeto prático
                desenvolvido no Centro Universitário <strong>FAMINAS</strong>,
                vinculado diretamente à disciplina de
                <strong>Development Front-end</strong>.
              </p>
              <p>
                A plataforma surge com o propósito de fornecer ferramentas
                interativas capazes de alertar estudantes sobre os vícios
                estruturais mais comuns encontrados em textos gerados de forma
                puramente automatizada por LLMs (Modelos de Linguagem).
              </p>
            </div>
            <div class="sobre-imagem">
              <i class="fa-solid fa-graduation-cap icone-grande"></i>
            </div>
          </div>
        </section>

        <hr class="divisor-sobre" />

        <section class="sobre-secao animar-reveal">
          <div class="text-center">
            <h2>Equipe de Desenvolvimento</h2>
            <p class="sub-equipe">
              Projeto orientado pelo <strong>Prof. Flávio Motta</strong>
            </p>
          </div>

          <div class="equipe-lista">
            <div class="membro-item">
              <i class="fa-solid fa-user-gear"></i>
              <div class="membro-info">
                <h3>Cayke Gonçalves Garcia</h3>
                <span>Matrícula: 1-26-16589</span>
              </div>
              <a
                href="https://github.com/CaykeGGarcia"
                class="membro-github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de Cayke Gonçalves no GitHub"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>

            <div class="membro-item">
              <i class="fa-solid fa-user-gear"></i>
              <div class="membro-info">
                <h3>Davi Figueiredo Rocha Dutra</h3>
                <span>Matrícula: 1-26-16975</span>
              </div>
              <a
                href="https://github.com/davifigrd"
                class="membro-github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de Davi Figueiredo no GitHub"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>

            <div class="membro-item">
              <i class="fa-solid fa-user-gear"></i>
              <div class="membro-info">
                <h3>Heitor Francisco Ribeiro</h3>
                <span>Matrícula: 1-26-16976</span>
              </div>
              <a
                href="https://github.com/Heitor0909"
                class="membro-github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de Heitor Francisco no GitHub"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>

            <div class="membro-item">
              <i class="fa-solid fa-user-gear"></i>
              <div class="membro-info">
                <h3>Júlia da Silva Santos</h3>
                <span>Matrícula: 1-26-16250</span>
              </div>
              <a
                href="https://github.com/juliassantos073"
                class="membro-github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de Júlia Santos no GitHub"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>

            <div class="membro-item">
              <i class="fa-solid fa-user-gear"></i>
              <div class="membro-info">
                <h3>Kauã Amorim de Oliveira</h3>
                <span>Matrícula: 1-26-17036</span>
              </div>
              <a
                href="https://github.com/kauaamorimamorim-cell"
                class="membro-github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de Kauã Amorim no GitHub"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        <hr class="divisor-sobre" />

        <section class="sobre-secao animar-reveal">
          <div class="text-center">
            <h2>Mapeamento de Critérios Técnicos</h2>
            <p class="sub-equipe">
              Entenda como o algoritmo analisa as métricas de confiabilidade
              textual
            </p>
          </div>

          <div class="criterios-criticos-container">
            <div class="criterios-linha-tres">
              <div class="criterio-critico-card">
                <div class="criterio-header">
                  <i class="fa-solid fa-bullhorn"></i>
                  <h3>Linguagem Excessivamente Persuasiva</h3>
                </div>
                <p>
                  Varre o texto em busca de adjetivos comerciais e termos
                  propagandistas como <em>"revolucionário"</em>,
                  <em>"infalível"</em> ou <em>"perfeito"</em>.
                </p>
              </div>

              <div class="criterio-critico-card">
                <div class="criterio-header">
                  <i class="fa-solid fa-gavel"></i>
                  <h3>Afirmações Absolutas</h3>
                </div>
                <p>
                  Monitora a presença de generalizações perigosas como
                  <em>"sempre"</em>, <em>"nunca"</em> ou <em>"todos"</em> que
                  indicam falta de rigor científico.
                </p>
              </div>

              <div class="criterio-critico-card">
                <div class="criterio-header">
                  <i class="fa-solid fa-align-left"></i>
                  <h3>Referências Genéricas</h3>
                </div>
                <p>
                  Pontua negativamente expressões vagas como
                  <em>"estudos mostram"</em> ou
                  <em>"especialistas afirmam"</em> desacompanhadas de fontes
                  reais.
                </p>
              </div>
            </div>

            <div class="criterios-linha-duas">
              <div class="criterio-critico-card">
                <div class="criterio-header">
                  <i class="fa-solid fa-calendar-days"></i>
                  <h3>Validação Temporal (Datas)</h3>
                </div>
                <p>
                  Identifica menções a anos específicos para alertar o usuário
                  sobre a necessidade de conferir se os dados não estão defasados.
                </p>
              </div>

              <div class="criterio-critico-card">
                <div class="criterio-header">
                  <i class="fa-solid fa-percent"></i>
                  <h3>Dados Estatísticos Voláteis</h3>
                </div>
                <p>
                  Rastreia caracteres de porcentagem (%), alertando contra
                  possíveis dados e amostragens inventados de forma probabilística
                  pelas LLMs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr class="divisor-sobre" />

        <section class="sobre-secao institucional-card animar-reveal">
          <div class="institucional-conteudo">
            <h2>Informações Acadêmicas</h2>
            <p><strong>Instituição:</strong> Centro Universitário FAMINAS</p>
            <p><strong>Disciplina:</strong> Desenvolvimento Front-end</p>
            <p><strong>Ano / Período:</strong> 2026.1</p>
            <p class="nota-institucional">
              Este ambiente web foi desenvolvido utilizando padrões modernos de
              estilização semântica, acessibilidade e interatividade client-side
              com JavaScript Vanilla.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <img src="../img/logo.png" alt="Logo IA Consciente" loading="lazy" />
        <h3>IA Consciente</h3>
        <p>Projeto de Extensão da Universidade FAMINAS • 2026.1</p>
      </footer>

      <script src="../js/script.js"></script>
      <script src="../js/sobre.js"></script>
    </body>
  </html>
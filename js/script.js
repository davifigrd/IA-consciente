/* ==================================
   DARK MODE
================================== */

const darkModeBtn =
  document.getElementById(
    "darkModeBtn"
  );

if (
  localStorage.getItem("darkMode")
  === "ativo"
) {

  document.body.classList.add(
    "dark"
  );

}

if (darkModeBtn) {

  darkModeBtn.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "dark"
      );

      if (
        document.body.classList.contains(
          "dark"
        )
      ) {

        localStorage.setItem(
          "darkMode",
          "ativo"
        );

      }
      else {

        localStorage.removeItem(
          "darkMode"
        );

      }

    }
  );

}

/* ==================================
   REVEAL SCROLL
================================== */

const elementos =
  document.querySelectorAll(

    ".card, .risk, .case-card, .stat-card, .about, .benefits-grid div"

  );

function revelarElementos() {

  elementos.forEach(
    elemento => {

      const topo =
        elemento.getBoundingClientRect()
          .top;

      const alturaTela =
        window.innerHeight * 0.85;

      if (topo < alturaTela) {

        elemento.classList.add(
          "mostrar"
        );

      }

    }
  );

}

window.addEventListener(
  "scroll",
  revelarElementos
);

revelarElementos();

/* ==================================
   NAVBAR DINÂMICA
================================== */

const header =
  document.querySelector(
    "header"
  );

window.addEventListener(
  "scroll",
  () => {

    if (!header) {
      return;
    }

    if (window.scrollY > 100) {

      header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.15)";

    }
    else {

      header.style.boxShadow =
        "none";

    }

  }
);

/* ==================================
   CONTADORES
================================== */

function animarContador(
  id,
  final,
  duracao
) {

  const elemento =
    document.getElementById(id);

  if (!elemento) {
    return;
  }

  let inicio = 0;

  const incremento =
    final /
    (duracao / 16);

  const contador =
    setInterval(() => {

      inicio += incremento;

      if (inicio >= final) {

        elemento.innerText =
          final.toLocaleString();

        clearInterval(
          contador
        );

      }
      else {

        elemento.innerText =
          Math.floor(inicio)
            .toLocaleString();

      }

    }, 16);

}

animarContador(
  "usuarios",
  520000000,
  2000
);

animarContador(
  "conteudos",
  1500000000,
  2200
);

animarContador(
  "riscos",
  320000,
  2500
);
/* ==================================
   BOTÃO VOLTAR AO TOPO
================================== */

const btnTopo =
  document.createElement(
    "button"
  );

btnTopo.id =
  "btnTopo";

btnTopo.innerHTML =
  "↑";

document.body.appendChild(
  btnTopo
);

window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY > 400
    ) {

      btnTopo.classList.add(
        "show"
      );

    }
    else {

      btnTopo.classList.remove(
        "show"
      );

    }

  }
);

btnTopo.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);

/* ==================================
   MENU MOBILE
================================== */

const menuBtn =
  document.getElementById(
    "menuBtn"
  );

const navLinks =
  document.querySelector(
    ".nav-links"
  );

if (menuBtn && navLinks) {

  menuBtn.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle(
        "ativo"
      );

    }
  );

}

/* ==================================
   MENSAGEM EDUCATIVA
================================== */

window.addEventListener(
  "load",
  () => {

    const mensagem =
      document.createElement(
        "div"
      );

    mensagem.className =
      "mensagem-ia";

    mensagem.innerHTML =
      `
    <strong>
      Dica:
    </strong>
    Verifique sempre informações
    geradas por IA antes de
    compartilhar.
    `;

    document.body.appendChild(
      mensagem
    );

    setTimeout(() => {

      mensagem.classList.add(
        "sumir"
      );

      setTimeout(() => {

        mensagem.remove();

      }, 1000);

    }, 6000);

  }
);

/* ==================================
   ANO AUTOMÁTICO
================================== */

const ano =
  document.getElementById(
    "anoAtual"
  );

if (ano) {

  ano.innerText =
    new Date()
      .getFullYear();

}

/* ==================================
   LOG
================================== */

console.log(
  "IA Consciente carregado."
);

const btn = document.getElementById("btnAnalisar");
const input = document.getElementById("inputTexto");
const resultado = document.getElementById("resultado");

function contarAdjetivos(texto) {
  const palavras = texto.toLowerCase().split(/\s+/);

  const adjetivos = [
    "incrível", "avançado", "revolucionário",
    "perfeito", "completo", "extremamente",
    "fundamental", "essencial"
  ];

  let count = 0;

  palavras.forEach(p => {
    if (adjetivos.includes(p)) count++;
  });

  return count;
}

function analisarTexto(texto) {

  let riscos = [];

  // 1. Datas genéricas
  if (texto.match(/\b(202[0-9]|203[0-9])\b/)) {
    riscos.push("Possível data genérica ou não verificada");
  }

  // 2. Frases típicas de IA
  if (
    texto.toLowerCase().includes("como uma inteligência artificial") ||
    texto.toLowerCase().includes("em conclusão") ||
    texto.toLowerCase().includes("é importante notar")
  ) {
    riscos.push("Frases típicas de texto gerado por IA");
  }

  // 3. Excesso de adjetivos
  const adjetivos = contarAdjetivos(texto);
  if (adjetivos >= 3) {
    riscos.push("Excesso de adjetivos pode indicar texto artificial");
  }

  // 4. Citações suspeitas
  if (texto.includes("Segundo especialistas") && !texto.includes("fonte")) {
    riscos.push("Citação sem fonte verificável");
  }

  return riscos;
}

btn.addEventListener("click", () => {

  const texto = input.value;

  if (!texto.trim()) {
    resultado.innerHTML = "<span class='risco'>Insira um texto primeiro.</span>";
    return;
  }

  const riscos = analisarTexto(texto);

  if (riscos.length === 0) {
    resultado.innerHTML = "<span class='ok'>Nenhum risco óbvio detectado.</span>";
  } else {
    resultado.innerHTML =
      "<span class='risco'>Possíveis problemas encontrados:</span><br><br>" +
      riscos.map(r => "• " + r).join("<br>");
  }

});
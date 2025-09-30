let jogadores = [];
let pontuacao = 0;
let premios = 3;

function mostrarTela(id) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
}

function adicionarJogador() {
  const nome = document.getElementById("nomeJogador").value;
  if (nome.trim() !== "") {
    jogadores.push(nome);
    const div = document.createElement("div");
    div.textContent = nome;
    document.getElementById("listaJogadores").appendChild(div);
    document.getElementById("nomeJogador").value = "";
  }
}

function adicionarPontos(pontos) {
  pontuacao += pontos;
  document.getElementById("pontuacaoTotal").textContent = pontuacao;
  tocarSom("waka.mp3");
}

function entregarPremio() {
  if (premios > 0) {
    premios--;
    document.getElementById("premiosRestantes").textContent = premios;
    if (premios === 0) {
      document.getElementById("gameOver").classList.remove("oculto");
      tocarSom("gameover.mp3");
    }
  }
}

function tocarSom(arquivo) {
  const audio = new Audio(`assets/sounds/${arquivo}`);
  audio.play();
}

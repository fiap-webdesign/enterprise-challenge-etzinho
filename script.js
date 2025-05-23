function mudarAvatar(index) {
  const avatarImage = document.getElementById('avatar-loja');
  const avatarRoupas = [
    'look1.png',
    'look2.png',
    'look3.png',
    'look4.png',
    'look5.png',
    'look6.png'
  ];
  avatarImage.src = `assets/${avatarRoupas[index]}`;
}

function pesquisarLocal() {
  const local = document.getElementById('local');
  if (local && local.value.trim() !== '') {
    const query = encodeURIComponent(local.value);
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  }
}

function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  if (nav) nav.classList.toggle('active');
}

function scrollToSection(page) {
  window.location.href = `${page}.html`;
  toggleMenu();
}

function toggleCheck(btn) {
  btn.classList.toggle('ativo');
}

function atualizarProgresso(id, ativo) {
  const barra = document.getElementById(id);
  if (barra) {
    const valorAtual = parseInt(barra.value) || 0;
    barra.value = ativo ? Math.min(valorAtual + 20, 100) : Math.max(valorAtual - 20, 0);
  }
}

function irParaProximaPagina() {
  const paginas = ["bambu.html", "bem-vindo.html", "loja.html", "progresso.html", "pesquisa.html"];
  const atual = window.location.pathname.split("/").pop();
  const index = paginas.indexOf(atual);
  if (index !== -1 && index < paginas.length - 1) {
    window.location.href = paginas[index + 1];
  } else {
    window.location.href = paginas[0];
  }
}
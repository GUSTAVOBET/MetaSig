document.addEventListener('DOMContentLoaded', function () {
    // Elementos do DOM
    const seletorCor = document.getElementById('seletorCor');
    const corAleatoriaBtn = document.getElementById('corAleatoria');

    // Função para aplicar a cor selecionada
    function aplicarCor() {
      const corSelecionada = seletorCor.value;
      document.body.style.backgroundColor = corSelecionada;
    }
    // Adiciona um ouvinte de evento ao seletor de cores
    seletorCor.addEventListener('input', aplicarCor);

    // Função para gerar uma cor aleatória
    function gerarCorAleatoria() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Função para aplicar uma cor aleatória ao background da página
    function aplicarCorAleatoria() {
      const corAleatoria = gerarCorAleatoria();
      document.body.style.backgroundColor = corAleatoria;
    }

    // Adiciona um ouvinte de evento ao botão de cor aleatória
    corAleatoriaBtn.addEventListener('click', aplicarCorAleatoria);
  });
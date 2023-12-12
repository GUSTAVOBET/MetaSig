document.addEventListener('DOMContentLoaded', function () {
    const contador = document.getElementById('contador');
    const botaoRetira = document.getElementById('botaodetirar');
    const botaoAcrescenta = document.getElementById('acrescenta');
    const botaoReseta = document.getElementById('reseta');

    let valorcontador = 0;

    function novaContagem() {
      contador.textContent = valorcontador;
    }

    botaoRetira.addEventListener('click', function () {
      if (valorcontador > 0) {
        valorcontador--;
        novaContagem();
      }
    });

    botaoAcrescenta.addEventListener('click', function () {
      valorcontador++;
      novaContagem();
    });

    botaoReseta.addEventListener('click', function () {
      valorcontador = 0;
      novaContagem();
    });
  });
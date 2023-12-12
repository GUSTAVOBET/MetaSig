// Obtendo os botões das jogadas e o botão de jogar
const jogada = document.querySelectorAll('.jogada');
const jogar = document.querySelector('.botaojogar');
const aleatorio = document.querySelector('.botaojogadaAleatoria');

// Função para armazenar a jogada de cada jogador
let jogador1 = '';
let jogador2 = '';

// Função para definir a escolha de um jogador
function jogadas(jogador, escolha) {
    const movimentos = document.querySelectorAll(`[jogador="${jogador}"]`);
    movimentos.forEach(move => {
        move.classList.remove('selected');
    });
    const selectedMove = document.querySelector(`[jogador="${jogador}"][movimento="${escolha}"]`);
    selectedMove.classList.add('selected');

    if (jogador === '1') {
        jogador1 = escolha;
    } else if (jogador === '2') {
        jogador2 = escolha;
    }
}

// Função para determinar o vencedor
function determinarVencedor() {
    if (jogador1 === jogador2) {
        return 'Empate';
    } else if (
        (jogador1 === 'Pedra' && jogador2 === 'Tesoura') ||
        (jogador1 === 'Tesoura' && jogador2 === 'Papel') ||
        (jogador1 === 'Papel' && jogador2 === 'Pedra')
    ) {
        return 'Jogador 1 venceu!';
    } else if (
        (jogador2 === 'Pedra' && jogador1 === 'Tesoura') ||
        (jogador2 === 'Tesoura' && jogador1 === 'Papel') ||
        (jogador2 === 'Papel' && jogador1 === 'Pedra')
    ) {
        return 'Jogador 2 venceu!';
    } 
}

// Adicionando listeners aos botões de jogada
jogada.forEach(move => {
    move.addEventListener('click', () => {
        const jogador = move.getAttribute('jogador');
        const movimento = move.getAttribute('movimento');
        jogadas(jogador, movimento);
    });
});

// Adicionando listener ao botão de jogar
jogar.addEventListener('click', () => {
    const resultado = determinarVencedor();
    const vencedorElement = document.querySelector('.vencedor');
    const perdedorElement = document.querySelector('.perdedor');
    const empateElement = document.querySelector('.empate');

    if (resultado === 'Jogador 1 venceu!') {
        vencedorElement.textContent = resultado;
        perdedorElement.textContent = '';
        empateElement.textContent = '';
    } else if (resultado === 'Jogador 2 venceu!') {
        perdedorElement.textContent = resultado;
        vencedorElement.textContent = '';
        empateElement.textContent = '';
    } else {
        empateElement.textContent = resultado;
        vencedorElement.textContent = '';
        perdedorElement.textContent = '';
    }
});

// Função da jogada Aleatoria

function jogadaAleatoria() {
    const jogadas = ['Pedra', 'Papel', 'Tesoura'];
    const indice = Math.floor(Math.random() * 3);
    return jogadas[indice];
}

aleatorio.addEventListener('click', () => {
    // Gerar jogadas aleatórias para ambos os jogadores
    jogador1 = jogadaAleatoria();
    jogador2 = jogadaAleatoria();

    // Simular visualmente as jogadas dos jogadores (opcional)
    const jogada1 = document.querySelectorAll('[jogador="1"]');
    const jogada2 = document.querySelectorAll('[jogador="2"]');

    jogada1.forEach(button => {
        if (button.getAttribute('movimento') === jogador1) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });

    jogada2.forEach(button => {
        if (button.getAttribute('movimento') === jogador2) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });

    // Determinar o vencedor após as jogadas aleatórias
    const resultado = determinarVencedor();
    const vencedorElement = document.querySelector('.vencedor');
    const perdedorElement = document.querySelector('.perdedor');
    const empateElement = document.querySelector('.empate');

    if (resultado === 'Jogador 1 venceu!') {
        vencedorElement.textContent = resultado;
        perdedorElement.textContent = '';
        empateElement.textContent = '';
    } else if (resultado === 'Jogador 2 venceu!') {
        perdedorElement.textContent = resultado;
        vencedorElement.textContent = '';
        empateElement.textContent = '';
    } else {
        empateElement.textContent = resultado;
        vencedorElement.textContent = '';
        perdedorElement.textContent = '';
    }
});

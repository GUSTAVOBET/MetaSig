// Seleciona o botão e adiciona um ouvinte de evento de clique
document.getElementById("adicionarTarefa").addEventListener("click", function () {
  // Pega os valores dos campos de entrada
  var tarefa = document.getElementById("tarefa").value;
  var data = document.getElementById("data").value;
  var horario = document.getElementById("time").value;

  // Cria uma nova linha na tabela
  var tabela = document.querySelector("table tbody");
  var novaLinha = tabela.insertRow();

  // Insere as células com os valores dos campos
  var celTarefa = novaLinha.insertCell(0);
  var celData = novaLinha.insertCell(1);
  var celHorario = novaLinha.insertCell(2);
  var botao1 = novaLinha.insertCell(3);
  var botao2 = novaLinha.insertCell(4);

  // Preenche as células com os valores dos campos de entrada
  celTarefa.innerHTML = tarefa;
  celData.innerHTML = data;
  celHorario.innerHTML = horario;
  botao1.innerHTML = `<select class="acao">
                          <option value="pendente">Pendente</option>
                          <option value="em andamento">Em Andamento</option>
                          <option value="concluida">Concluída</option>
                      </select>`;
  botao2.innerHTML = `<button class="botaoeditar">
                          <span class="material-symbols-outlined">edit</span>
                      </button>
                      <button class="botaodeletar">
                          <span class="material-symbols-outlined">delete</span>
                      </button>`;
});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains('botaodeletar')) {
        var linha = event.target.parentElement.parentElement;
        var tabela = linha.parentElement;
        tabela.removeChild(linha);
    }
});

// Adiciona um ouvinte de evento de clique ao documento
document.addEventListener("click", function(event) {
    // Verifica se o clique foi em um botão de edição
    if (event.target.classList.contains('botaoeditar')) {
        // Obtém a linha atual
        var linha = event.target.parentElement.parentElement;

        // Obtém as células da tarefa, data e horário
        var celTarefa = linha.getElementsByTagName("td")[0];
        var celData = linha.getElementsByTagName("td")[1];
        var celHorario = linha.getElementsByTagName("td")[2];

        // Habilita a edição dos valores das células
        celTarefa.innerHTML = `<input type="text" value="${celTarefa.innerText}" class="editar-celula">`;
        celData.innerHTML = `<input type="date" value="${celData.innerText}" class="editar-celula">`;
        celHorario.innerHTML = `<input type="time" value="${celHorario.innerText}" class="editar-celula">`;

        // Adiciona o evento para finalizar a edição ao pressionar "Enter"
        linha.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                finalizarEdicao(linha);
            }
        });
    }
});

// Função para finalizar a edição das células
function finalizarEdicao(linha) {
    var celulas = linha.getElementsByClassName("editar-celula");
    for (var i = 0; i < celulas.length; i++) {
        var novoValor = celulas[i].value;
        celulas[i].parentElement.innerHTML = novoValor;
    }
}




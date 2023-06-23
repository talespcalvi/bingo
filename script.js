var jogadores = [];

function gerarNumerosAleatorios(quantidade, min, max) {
  if (quantidade > (max - min)) {
    console.log("Intervalo insuficiente ...");
    return;
  }

  var numeros = [];

  while (numeros.length < quantidade) {
    var aleatorio = Math.floor(Math.random() * (max - min + 1) + min);

    if (!numeros.includes(aleatorio)) {
      numeros.push(aleatorio);
    }
  }

  return numeros;
}

function gerarCartela() {
  var nomeJogador = prompt('Digite o nome do Jogador');

  var cartela = [
    gerarNumerosAleatorios(5, 1, 15),
    gerarNumerosAleatorios(5, 16, 30),
    gerarNumerosAleatorios(5, 31, 45),
    gerarNumerosAleatorios(5, 46, 60),
    gerarNumerosAleatorios(5, 61, 75)
  ];

  jogadores.push({
    nomeJogador: nomeJogador,
    cartela: cartela
  });

  desenharCartela(nomeJogador, cartela);

  console.log(jogadores);
}

function reiniciarJogo() {
  // Recarrega a página
  location.reload();
}

function desenharCartela(nome, cartela) {
  if (!nome) {
    alert('Deve ser fornecido o nome do jogador para gerar a cartela!');
    return;
  }

  var div_cartelas = document.querySelector('#cartelas');

  var div_cartela = document.createElement('div');
  div_cartela.classList.add('cartela-container');

  var h4 = document.createElement('h4');
  h4.innerText = nome;

  var table = document.createElement('table');
  var thead = document.createElement('thead');
  var thB = document.createElement('th');
  thB.innerText = 'B';
  var thI = document.createElement('th');
  thI.innerText = 'I';
  var thN = document.createElement('th');
  thN.innerText = 'N';
  var thG = document.createElement('th');
  thG.innerText = 'G';
  var thO = document.createElement('th');
  thO.innerText = 'O';

  thead.appendChild(thB);
  thead.appendChild(thI);
  thead.appendChild(thN);
  thead.appendChild(thG);
  thead.appendChild(thO);

  var tbody = document.createElement('tbody');
  for (var i = 0; i < 5; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 5; j++) {
      var td = document.createElement('td');
      if (i == 2 && j == 2) {
        td.innerText = 'X';
        td.classList.add('x');
      } else {
        td.innerText = cartela[j][i];
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(thead);
  table.appendChild(tbody);

  div_cartela.appendChild(h4);
  div_cartela.appendChild(table);

  div_cartelas.appendChild(div_cartela);
}

function jogar() {
  var cartelas = document.querySelectorAll('#cartelas table');
  if (cartelas.length < 2) {
    alert("É necessário ter pelo menos duas tabelas geradas.");
    return;
  }

  var divAreaJogo = document.querySelector('#area_jogo');

  divAreaJogo.innerHTML = ''; // Limpar a seção antes de adicionar os números gerados

  var h2 = document.createElement('h2');
  h2.innerText = 'Jogo';

  var ul = document.createElement('ul');
  ul.classList.add('numeros-gerados');

  divAreaJogo.appendChild(h2);
  divAreaJogo.appendChild(ul);

  var numerosGerados = [];
  var contadorNumeros = 0;
  var tabelasCompletas = 0;
  var todasTabelasMarcadas = false;
  var nomeVencedor = null;

  var intervalo = setInterval(function () {
    if (contadorNumeros >= 75 || todasTabelasMarcadas) {
      clearInterval(intervalo);
      if (nomeVencedor) {
        alert(nomeVencedor + " é o vencedor!");
      }
      return;
    }

    var numeroGerado = gerarNumeroAleatorio(1, 75);

    while (numerosGerados.includes(numeroGerado)) {
      numeroGerado = gerarNumeroAleatorio(1, 75);
    }

    numerosGerados.push(numeroGerado);
    contadorNumeros++;

    var li = document.createElement('li');
    li.innerText = numeroGerado;
    ul.appendChild(li);

    tabelasCompletas = 0;
    cartelas.forEach(function (cartela) {
      if (!verificarCartelaCompleta(cartela)) {
        var tds = cartela.getElementsByTagName('td');

        for (var i = 0; i < tds.length; i++) {
          if (tds[i].innerText === numeroGerado.toString()) {
            tds[i].classList.add('marcado');
            break;
          }
        }

        if (verificarCartelaCompleta(cartela)) {
          tabelasCompletas++;
          nomeVencedor = cartela.parentNode.querySelector('h4').innerText;
        }
      }
    });

    todasTabelasMarcadas = tabelasCompletas === cartelas.length;
  }, 500); 
}

function verificarCartelaCompleta(cartela) {
  var tds = cartela.getElementsByTagName('td');
  var marcados = 0;

  for (var i = 0; i < tds.length; i++) {
    if (tds[i].classList.contains('marcado')) {
      marcados++;
    }
  }

  return marcados === 24; 
}

function verificarVencedor(cartelas) {
  var todosMarcados = true;

  cartelas.forEach(function (cartela) {
    var tds = cartela.getElementsByTagName('td');

    for (var i = 0; i < tds.length; i++) {
      if (!tds[i].classList.contains('marcado')) {
        todosMarcados = false;
        break;
      }
    }

    if (todosMarcados) {
      return true;
    }
  });

  return false;
}

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

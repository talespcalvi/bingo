var jogadores = []

function gerarNumerosAleatorios(quantidade, min, max){

    if(quantidade > (max - min)){
        console.log("Intervalo insuficiente ...");
        return;
    }

    var numeros = [];

    while(numeros.length < quantidade){
        var aleatorio = Math.floor(Math.random()*(max - min) + min);
        
        if(!numeros.includes(aleatorio)){
            numeros.push(aleatorio);
        }
    }

    return numeros;

}

function gerarCartela(){
    var nomeJogador = prompt('Digite o nome do Jogador')

    var cartela = [gerarNumerosAleatorios(5,1,15),
                   gerarNumerosAleatorios(5,16,30), 
                   gerarNumerosAleatorios(5,31,45),
                   gerarNumerosAleatorios(5,46,60), 
                   gerarNumerosAleatorios(5,61,75)]

    jogadores.push({
        nomeJogador: nomeJogador,
        cartela: cartela
    });

    desenharCartela(nomeJogador, cartela);

    console.log(jogadores)
}

function reiniciarJogo(){
    jogadores = []
}

function desenharCartela(nome, cartela){

    var div_cartelas = document.querySelector('#cartelas')

    var h4 = document.createElement('h4');
    h4.innerText = nome;

    div_cartelas.appendChild(h4);

    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var thB = document.createElement('th');
    thB.innerText = "B"
    var thI = document.createElement('th');
    thI.innerText = "I"
    var thN = document.createElement('th');
    thN.innerText = "N"
    var thG = document.createElement('th');
    thG.innerText = "G"
    var thO = document.createElement('th');
    thO.innerText = "O"

    thead.appendChild(thB)
    thead.appendChild(thI)
    thead.appendChild(thN)
    thead.appendChild(thG)
    thead.appendChild(thO)

    var tbody = document.createElement('tbody');
    for(var i = 0; i < 5; i++) {
      var tr = document.createElement('tr');
        for(var j = 0; j < 5; j++){
        var td = document.createElement('td');
        if(i == 2 && j == 2){
            td.innerText = "X";
            tr.appendChild(td);
        }else{
            td.innerText = cartela[j][i]
            tr.appendChild(td);
            td.innerText = "X"
        }
    tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    div_cartelas.appendChild(table);

}
}

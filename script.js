function desenharCartela(){
    //Criar div chamada cartela

    var div_cartela = document.createElement('div')
    div_cartela.className = 'cartela';

    //Criando H4 para colocar o nome do jogador
    var h4 = document.createElement('h4');
    h4.innerText = 'Nome do jogador';

    //Colocando o h4 dentro da DIV
    div_cartela.appendChild(h4);

    //Criando tabela
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var thB = document.createElement('th');
    thB.innerText = 'B'
    var thI = document.createElement('th');
    thB.innerText = 'I'
    var thN = document.createElement('th');
    thB.innerText = 'N'
    var thG = document.createElement('th');
    thB.innerText = 'G'
    var thO = document.createElement('th');
    thB.innerText = 'O'

    thead.appendChild(thB)
    thead.appendChild(thI)
    thead.appendChild(thN)
    thead.appendChild(thG)
    thead.appendChild(thO)

    var tbody = document.createElementNS('tbody');

    for(var i = 0; i < 5; i++){
        var tr = document.createElement('tr');
        for(var j = 0; j < 5; j++){
            var td = document.createElement('td');
            td.innerText = X
        }
    }


}
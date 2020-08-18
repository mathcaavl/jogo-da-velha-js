// ...
const listBtn = []
const players = ['x', 'o']

// Definindo Variaveis
listBtn.push(document.querySelector('.casa1'));
listBtn.push(document.querySelector('.casa2'));
listBtn.push(document.querySelector('.casa3'));
listBtn.push(document.querySelector('.casa4'));
listBtn.push(document.querySelector('.casa5'));
listBtn.push(document.querySelector('.casa6'));
listBtn.push(document.querySelector('.casa7'));
listBtn.push(document.querySelector('.casa8'));
listBtn.push(document.querySelector('.casa9'));

// Eventos
for (let i = 0; i < listBtn.length; i++) {
    listBtn[i].addEventListener('click', preencherValor);
}

function preencherValor (e) {
    const vezJogar = verificarJogador()
    console.log(vezJogar);
    const item = document.createElement('img');
    if (vezJogar == "x") {
        item.src="images/x.jpg";
        e.target.appendChild(item);
    } else {
        item.src="images/bola.jpg";
        e.target.appendChild(item);
    }
    //item.src = "images/bola.jpg";
    //e.target.appendChild(item);
}

function verificarJogador () {
    var jogador = 'x';
    return jogador;
}
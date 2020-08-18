// ...
const listBtn = []

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

// Objeto para definir a vez 
var turno = {
    atual: 0,

    get: function () {
        return this.atual;
    },

    set: function(turn) {
        this.atual = turn;
    }
}

// Funções
function preencherValor (e) {
    const imagem = document.createElement('img');

    if (turno.atual == 0) {
        imagem.src="images/x.jpg";
        e.target.appendChild(imagem)
        turno.set(1);
    } else { 
        imagem.src="images/bola.jpg"
        e.target.appendChild(imagem);
        turno.set(0);
    }
}
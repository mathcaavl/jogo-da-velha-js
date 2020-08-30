// ...
const listBtn = []
const restart = document.querySelector('.btnRestart');

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

restart.addEventListener('click', reiniciar);

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
    if (turno.atual == 0) {
        e.target.value = "X"
        e.target.innerHTML = e.target.value;
        verificarVencedor();
        turno.set(1);
    } else { 
        e.target.value = "O"
        e.target.innerHTML = e.target.value;
        verificarVencedor();
        turno.set(0);
    }
}

function verificarVencedor () {
    if (listBtn[0].value == 'X' && listBtn[1].value == 'X' && listBtn[2].value == 'X') {
        alert('X Venceu')
        reiniciar();
    } else if (listBtn[3].value == 'X' && listBtn[4].value == 'X' && listBtn[5].value == 'X') {
        alert('X Venceu')
        reiniciar();
    } else if (listBtn[6].value == 'X' && listBtn[7].value == 'X' && listBtn[8].value == 'X') {
        alert('X Venceu')
        reiniciar();
    } else if (listBtn[0].value == 'X' && listBtn[3].value == 'X' && listBtn[6].value == 'X') {
        alert('X Venceu')
        reiniciar();
    } else if (listBtn[1].value == 'X' && listBtn[4].value == 'X' && listBtn[7].value == 'X') {
        alert('X Venceu');
        reiniciar();
    } else if (listBtn[2].value == 'X' && listBtn[5].value == 'X' && listBtn[8].value == 'X') {
        alert('X Venceu')
        reiniciar();
    } else if (listBtn[0].value == 'X' && listBtn[4].value == 'X' && listBtn[8].value == 'X') { 
        alert('X Venceu')
        reiniciar();
    } else if (listBtn[2].value == 'X' && listBtn[4].value == 'X' && listBtn[6].value == 'X') { //
        alert('X Venceu')
        reiniciar();
    } else if (listBtn[0].value == 'O' && listBtn[1].value == 'O' && listBtn[2].value == 'O') {
        alert('O Venceu');
        reiniciar();
    } else if (listBtn[3].value == 'O' && listBtn[4].value == 'O' && listBtn[5].value == 'O') {
        alert('O Venceu');
        reiniciar();
    } else if (listBtn[6].value == 'O' && listBtn[7].value == 'O' && listBtn[8].value == 'O') {
        alert('O Venceu');
        reiniciar();
    } else if (listBtn[0].value == 'O' && listBtn[3].value == 'O' && listBtn[6].value == 'O') {
        alert('O Venceu');
        reiniciar();
    } else if (listBtn[1].value == 'O' && listBtn[4].value == 'O' && listBtn[7].value == 'O') {
        alert('O Venceu');
        reiniciar();
    } else if (listBtn[2].value == 'O' && listBtn[5].value == 'O' && listBtn[8].value == 'O') {
        alert('O Venceu');
        reiniciar();
    } else if (listBtn[0].value == 'O' && listBtn[4].value == 'O' && listBtn[8].value == 'O') {
        alert('O Venceu');
        reiniciar();
    } else if (listBtn[2].value == 'O' && listBtn[4].value == 'O' && listBtn[6].value == 'O') {
        alert('O Venceu')
        reiniciar();
    } else if (listBtn[0].value != "" && listBtn[1].value != "" && listBtn[2].value != "" && listBtn[3].value != "" && listBtn[4].value != "" && listBtn[5].value != "" && listBtn[6].value != "" && listBtn[7].value != "" && listBtn[8].value != "") {
        alert('Deu Velha!')
        reiniciar();
    }
}

function reiniciar () {
    for (let i = 0; i < listBtn.length; i++) {
        listBtn[i].innerHTML = "";
    }
}

 // Gera um número aleatório entre 1 e 10
 function geraNumeroAleatorio() {
    return Math.floor(Math.random() * 10 + 1);
}

// Armazena os números já sorteados
var numerosSorteados = [];

// Verifica se o número ja foi sorteado
function numeroJaSorteado(numero) {
    for (var i = 0; i < numerosSorteados.length; i++) {
        if (numerosSorteados[i] == numero) {
            return true;
        }
    }
    return false;
}

// Gera o número sorteado
function sorteiaNumero() {
    var numero = geraNumeroAleatorio();
    while (numeroJaSorteado(numero)) {
        numero = geraNumeroAleatorio();
    }
    numerosSorteados.push(numero);
    return numero;
}

// Mensagem que será exibida
var mensagem = "";

// Função que exibe a mensagem
function exibeMensagem() {
    document.getElementById("mensagem").innerHTML = mensagem;
}

// Função que exibe a imagem
function exibeImagem(caminho) {
    document.getElementById("imagem").src = caminho;
}


// Função que inicia o jogo
function iniciarJogo() {
    mensagem = "Adivinhe o número entre 1 e 10";
    exibeMensagem();
    exibeImagem("");
}

// Função que verifica a resposta
function verificaResposta(numero) {
    var numeroSorteado = sorteiaNumero();
    if (numero == numeroSorteado) {
        mensagem = "Você acertou! O número era " + numeroSorteado;
        exibeImagem("img/certo.png");
    } else {
        mensagem = "Você errou! O número era " + numeroSorteado;
        exibeImagem("img/errado.png");
    }   
    exibeMensagem();
}

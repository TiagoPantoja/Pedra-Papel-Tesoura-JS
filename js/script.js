function jogar() {

    var jogador = document.getElementById("jogo").value
    var CPU = parseInt(Math.random()*(4-1)+1)
    var abreviacao
    var resultado

    jogador = jogador.toUpperCase()

    abreviacao = jogador[0] + jogador[1]

    if (abreviacao == "PE") {

        abreviacao = 1

    } else if (abreviacao == "PA") {

        abreviacao = 2

    } else if (abreviacao == "TE") {

        abreviacao = 3

    }

    if (abreviacao == 1 && CPU == 3) {

        resultado = "Você ganhou"

        CPU = "Tesoura"

    } else if (abreviacao == 1 && CPU == 2) {

        resultado = "Você perdeu"

        CPU = "Papel"

    } else if (abreviacao == 2 && CPU == 1) {

        resultado = "Você ganhou"

        CPU = "Pedra"

    } else if (abreviacao == 2 && CPU == 3) {

        resultado = "Você perdeu"

        CPU = "Tesoura"

    } else if (abreviacao == 3 && CPU == 2) {

        resultado = "Você ganhou"

        CPU = "Papel"

    } else if (abreviacao == 3 && CPU == 1) {

        resultado = "Você perdeu"

        CPU = "Pedra"

    } else if (abreviacao == CPU) {

        resultado = "Empate"

        CPU = jogador

    } else {

        resultado = "Valor inválido"

    }

    if (resultado == "Valor inválido") {

    document.getElementById("resposta").innerHTML =

    `
    Resultado: ${resultado}
    `
    }else {

    document.getElementById("resposta").innerHTML =

    `
    Resultado:
    <br>
    <br>
    Você jogou: ${jogador}
    <br>
    <br>
    O computador jogou: ${CPU}
    <br>
    <br>
    Resultado: ${resultado}
    `
    }
}

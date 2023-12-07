//2º desafio do Felipão - Calculadora de partidas Ranqueadas

//função para calcular ranking de partidas
function calculaRanking(victory, defeated){

    //calculando o saldo de partidas rankeadas
    let winningBalance = victory - defeated;

    let nivel = " "

    //determinando o nível do player
    if (nivel <= 10){
        nivel = "Ferro"
    }else if(nivel <= 20){
        nivel = "Bronze"
    }else if(nivel <= 30){
        nivel = "Prata"
    }else if(nivel <= 40){
        nivel = "Ouro"
    }else if(nivel <= 50){
        nivel = "Diamante"
    }else if(nivel <= 60){
        nivel = "Lendário"
    }else(nivel = "Imortal")

    // retornando o resultado como objeto
    return {winningBalance: winningBalance,
    nivel: nivel
    }

}


// utilizando a função
function exibirMensagem(){
    let resultadoTeste = calculaRanking(35,17)
    console.log("O Herói tem saldo de " + resultadoTeste.winningBalance + " e está no nivel " + resultadoTeste.nivel)
}

//chamando a função

exibirMensagem()
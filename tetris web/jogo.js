
// Código feito com base no video "Code Tetris: JavaScript Tutorial for Beginners"
// do canal freeCodeCamp.org no Youtube
// https://www.youtube.com/watch?v=rAUn1Lom6dw


document.addEventListener ('DOMContentLoaded', () => {

    // definicoes gerais de elementos

    var dentro = document.querySelector('#dentro')
    let quadrados = Array.from(document.querySelectorAll('#dentro div'))

    const pontuacao = document.querySelector('#score')
    var pontos = 0

    const cores = [
        'orange',
        'red',
        'purple',
        'green',
        'blue',
        'pink',
    ]

    const start = document.querySelector('#start-button')
    const restart = document.querySelector('#restart-button')

    // quadradinhos no tabuleiro
    var largura = 10

    let proximoRandom = 0

    let ritmo

    var velocidade = 2000

    var nivel_numero = 1
    const nivel = document.querySelector('#nivel')
    nivel.innerHTML = nivel_numero

    var eliminadas_numero = 0
    const linhas_eliminadas = document.querySelector('#linhas_eliminadas')
    linhas_eliminadas.innerHTML = eliminadas_numero

    ////////////////////////////////////////////////////

    // Desenho de peças considerando uma planilha

    // A1 0
    // A2 width
    // A3 width * 2
    // A4 width * 3

    // B1 1
    // B2 width + 1
    // B3 width * 2 + 1
    // B4 width * 3 + 1

    // C1 2
    // C2 width + 2
    // C3 width * 2 + 2
    // C4 width * 3 + 2

    // D1 3
    // D2 width + 3
    // D3 width * 2 + 3
    // D4 width * 3 + 3

    ////////////////////////////////////////////////////

    // construcao das pecas

    // pecas
    const ipeca = [
        // desenhos no tabuleiro de acordo com rotacoes
        [1, largura + 1, largura * 2 + 1, largura * 3 + 1], // 1
        [largura, largura + 1, largura + 2, largura + 3], // 2
        [1, largura + 1, largura * 2 + 1, largura * 3 + 1], // 3
        [largura, largura + 1, largura + 2, largura + 3], // 4
    ]

    const opeca = [
        // desenhos no tabuleiro de acordo com rotacoes
        [largura + 1, largura * 2 + 1, largura + 2, largura * 2 + 2], // 1
        [largura + 1, largura * 2 + 1, largura + 2, largura * 2 + 2], // 2
        [largura + 1, largura * 2 + 1, largura + 2, largura * 2 + 2], // 3
        [largura + 1, largura * 2 + 1, largura + 2, largura * 2 + 2], // 4
    ]

    const lpeca = [
        // desenhos no tabuleiro de acordo com rotacoes
        [1, largura + 1, largura * 2 + 1, largura * 2 + 2], // 1
        [largura, largura * 2, largura + 1, largura + 2], // 2
        [0, 1, largura + 1, largura * 2 + 1], // 3
        [largura, largura + 1, 2, largura + 2], // 4
    ]

    const jpeca = [
        // desenhos no tabuleiro de acordo com rotacoes
        [largura * 2, 1, largura + 1, largura * 2 + 1], // 1
        [0, largura, largura + 1, largura + 2], // 2
        [1, largura + 1, largura * 2 + 1, 2], // 3
        [largura, largura + 1, largura + 2, largura * 2 + 2], // 4
    ]

    const tpeca = [
        // desenhos no tabuleiro de acordo com rotacoes
        [largura, 1, largura + 1, largura + 2], // 1
        [1, largura + 1, largura * 2 + 1, largura + 2], // 2
        [largura, largura + 1, largura * 2 + 1, largura + 2], // 3
        [largura, 1, largura + 1, largura * 2 + 1], // 4
    ]

    const upeca = [
        // desenhos no tabuleiro de acordo com rotacoes
        [largura, largura * 2, largura * 2 + 1, largura + 2, largura * 2 + 2], // 1
        [0, largura, largura * 2, 1, largura * 2 + 1], // 2
        [0, largura, 1, 2, largura + 2], // 3
        [1, largura * 2 + 1, 2, largura + 2, largura * 2 + 2], // 4
        [largura, largura * 2, largura * 2 + 1, largura + 2, largura * 2 + 2], // 1
        // houve algum erro ao fazer a rotacao completa da peca, entao sao duas vezes mesmo uma mesma rotacao para funcionar
    ]

    const blockpeca = [
        // desenhos no tabuleiro de acordo com rotacoes
        [largura + 1], // 1
        [largura + 1], // 2
        [largura + 1], // 3
        [largura + 1], // 4
    ]

    // objeto para selecao aleatoria
    const pecas = [ipeca, opeca, lpeca, jpeca, tpeca, upeca, blockpeca]

    ////////////////////////////////////////////////////

    // posicionamento e selecao de pecas

    // posicao no tabuleiro de onde aparecem ao topo
    var posicaoAtual = 3
    let rotacaoAtual = 0

    // selecao aleatoria de pecas
    let random = Math.floor(Math.random() * pecas.length)
    let pecaAtual = pecas[random][rotacaoAtual]

    ////////////////////////////////////////////////////

    // efeito de movimentacao na tela

    // desenho
    function desenhar () {
        pecaAtual.forEach (index => {
            if (pecaAtual.length == 1) {
                // certificar de que o bloco unico é preto
                quadrados[posicaoAtual + index].style.backgroundColor = 'black'
            } else {
                quadrados[posicaoAtual + index].classList.add('peca')
                quadrados[posicaoAtual + index].style.backgroundColor = cores[random]
            }
        })
    }
    // desenhar()

    function apagar() {
        pecaAtual.forEach(index => {
            quadrados[posicaoAtual + index].classList.remove('peca')
            quadrados[posicaoAtual + index].style.backgroundColor = ''
        })
    }
    // apagar()

    ////////////////////////////////////////////////////

    // controles

    // definicao de teclas para facilitar ao girar o tabuleiro
    var teclaEsquerda = 37
    var teclaCima = 38
    var teclaBaixo = 40
    var teclaDireita = 39

    // tecla pressionada
    function controle (k) {
        if (k.keyCode === teclaEsquerda) {
            paraEsquerda()
        } else if (k.keyCode === teclaCima) {
            rodar()
        } else if (k.keyCode === teclaDireita) {
            paraDireita()
        } else if (k.keyCode === teclaBaixo) {
            descer()
        }
    }
    document.addEventListener('keydown', controle)

    ////////////////////////////////////////////////////

    // movimentacao geral

    // descer
    function descer() {
        apagar()
        posicaoAtual += largura
        desenhar()
        parar()
    }

    // interromper descida
    function parar() {
        if (pecaAtual.some(index => quadrados[posicaoAtual + index + largura].classList.contains('linhaAbaixo'))) {
            pecaAtual.forEach(index => quadrados[posicaoAtual + index].classList.add('linhaAbaixo'))
            // aparecer nova
            random = proximoRandom
            proximoRandom = Math.floor(Math.random() * pecas.length)
            pecaAtual = pecas[random][rotacaoAtual]
            posicaoAtual = 4
            desenhar()
            mostrarProxima()
            addPonto()
            gameOver()
        }
    }

    // mover para esquerda
    function paraEsquerda() {
        apagar()

        // definicao da borda sendo algum quadrado multiplo do tamanho do tabuleiro
        const bordaEsquerda = pecaAtual.some(index => (posicaoAtual + index) % largura === 0)
        // se a peca anterior, a esquerda, nao for a borda, pode movimentar
        if (!bordaEsquerda) posicaoAtual -= 1

        if (pecaAtual.some(index => quadrados[posicaoAtual + index].classList.contains('linhaAbaixo'))) {
            posicaoAtual += 1
        }

        desenhar()
    }

    // mover para direita
    function paraDireita () {
        apagar()

        // definicao da borda sendo algum quadrado multiplo do tamanho do tabuleiro, menos 1
        const bordaDireita = pecaAtual.some(index => (posicaoAtual + index) % largura === largura - 1)
        // se a peca posterior, a direita, nao for a borda, pode movimentar
        if (!bordaDireita) posicaoAtual += 1

        if (pecaAtual.some(index => quadrados[posicaoAtual + index].classList.contains('linhaAbaixo'))) {
            posicaoAtual -= 1
        }

        desenhar()
    }

    // rotacao das pecas
    function rodar () {
        apagar()
        rotacaoAtual++

        if (rotacaoAtual === pecaAtual.length) {
            rotacaoAtual = 0
        }

        pecaAtual = pecas[random][rotacaoAtual]
        desenhar()
    }

    ////////////////////////////////////////////////////

    // mostrar proxima
    const quadradosDisplay = document.querySelectorAll('.mini-dentro div')
    const larguraDisplay = 4
    let indexDisplay = 0

    // pecas sem rotacao
    const proximaPeca = [
        [1, larguraDisplay + 1, larguraDisplay * 2 + 1, larguraDisplay * 3 + 1], // i
        [larguraDisplay + 1, larguraDisplay * 2 + 1, larguraDisplay + 2, larguraDisplay * 2 + 2], // o
        [1, larguraDisplay + 1, larguraDisplay * 2 + 1, larguraDisplay * 2 + 2], // l
        [larguraDisplay * 2, 1, larguraDisplay + 1, larguraDisplay * 2 + 1], // j
        [larguraDisplay, 1, larguraDisplay + 1, larguraDisplay + 2], // t
        [larguraDisplay, larguraDisplay * 2, larguraDisplay * 2 + 1, larguraDisplay + 2, larguraDisplay * 2 + 2], // u
        [larguraDisplay + 1], // block
    ]

    // mostrar a proxima
    function mostrarProxima () {
        // apagar peca anterior
        quadradosDisplay.forEach(quadrado => {
            quadrado.classList.remove('peca')
            quadrado.style.backgroundColor = ''
        })
        proximaPeca[proximoRandom].forEach(index => {
            quadradosDisplay[indexDisplay + index].classList.add('peca')
            quadradosDisplay[indexDisplay + index].style.backgroundColor = cores[proximoRandom]
        })
    }

    ////////////////////////////////////////////////////

    // botao play pause
    start.addEventListener('click', () => {
        // on_off = false -> no bloco do cronometro, ao inicio do jogo
        if (ritmo) {
            if (on_off == true) {
                clearInterval(cronometro)
                on_off = false
            }
            clearInterval(ritmo)
            ritmo = null
        } else {
            if (on_off == false) {
                clearInterval(cronometro)
                cronometro = setInterval(() => {contadorTempo();}, 10)
                on_off = true
            }
            desenhar()
            ritmo = setInterval(descer, velocidade)
            proximoRandom = Math.floor(Math.random() * pecas.length)
            mostrarProxima()
        }
    })
    // botao restart do jogo
    restart.addEventListener('click', () => {
        window.location.reload()
    })

    ////////////////////////////////////////////////////

    // add pontos
    function addPonto () {
        for (let p = 0; p < 199; p += largura) {
            const linha = [p, p+1, p+2, p+3, p+4, p+5, p+6, p+7, p+8, p+9]

            if (linha.every(index => quadrados[index].classList.contains('linhaAbaixo'))) {
                // a cada linha eliminada
                // somam-se 10 pontos
                pontos += 10
                pontuacao.innerHTML = pontos
                // a cada 20 pontos, a frequencia de queda aumenta com a diminuicao do intervalo de tempo
                if (pontos % 20 == 0) {
                    nivel_numero += 1
                    nivel.innerHTML = nivel_numero
                    velocidade -= 200
                }
                // e aumenta o numero de linhas eliminadas
                eliminadas_numero++
                linhas_eliminadas.innerHTML = eliminadas_numero
                linha.forEach(index => {
                    quadrados[index].classList.remove('linhaAbaixo')
                    quadrados[index].classList.remove('peca')
                    if (quadrados[index].style.backgroundColor == 'black') {
                        // ao girar o tabuleiro, gira 180 graus e os controles sao invertidos
                        if (dentro.classList.contains('roll')) {
                            dentro.classList.remove('roll')
                            teclaEsquerda = 37
                            teclaCima = 38
                            teclaBaixo = 40
                            teclaDireita = 39
                        } else {
                            dentro.classList.add('roll')
                            teclaEsquerda = 39
                            teclaCima = 40
                            teclaBaixo = 38
                            teclaDireita = 37
                        }
                    }
                    quadrados[index].style.backgroundColor = ''
                })
                // a linha abaixo é removida e uma linha acima é adicionada para o efeito
                const linhaRemovida = quadrados.splice(p, largura)
                quadrados = linhaRemovida.concat(quadrados)
                quadrados.forEach(celula => dentro.appendChild(celula))
            }
        }
    }

    ////////////////////////////////////////////////////

    // game over
    function gameOver () {
        if (pecaAtual.some(index => quadrados[posicaoAtual + index].classList.contains('linhaAbaixo'))) {
            // finalizacao do jogo
            var resultado = confirm("Jogo finalizado! Jogar novamente?")
            if (resultado == true) {
                window.location.reload()
            } else {
                clearInterval(ritmo)
            }
        }
    }

    ////////////////////////////////////////////////////

    // cronometro
    let hour = 0
    let minute = 0
    let second = 0
    let millisecond = 0
    let cronometro
    let on_off = false

    function contadorTempo () {
        if ((millisecond += 10) == 1000) {
            millisecond = 0
            second++
        }
        if (second == 60) {
            second = 0
            minute++
        }
        if (minute == 60) {
            minute = 0
            hour++
        }

        document.querySelector('#hour').innerText = returnData(hour)
        document.querySelector('#minute').innerText = returnData(minute)
        document.querySelector('#second').innerText = returnData(second)
    }
    function returnData (input) {
        return input > 10 ? input : `0${input}`
    }
})


// infelizmente nao consegui fazer funcionar a selecao de diferentes tamanhos de tabuleiro
function mudarTamanho () {
    if (document.querySelector('#opcoes_tamanho').value == 2) {
        var tabuleiro = document.querySelector('#dentro')
        for (var p = 0; p < 10; p++) {
            var linhas_abaixo = tabuleiro.querySelector('.linhaAbaixo')
            linhas_abaixo.remove()
        }
        for (p = 0; p < 200; p++) {
            var linhas_abaixo = tabuleiro.querySelector('div')
            linhas_abaixo.remove()
        }
        
        posicaoAtual = 6
        largura = 22

        tabuleiro.style.width = '225px'
        tabuleiro.style.height = '445px'

        for (p = 0; p < 22 * 44; p++) {
            var linhas_abaixo = document.createElement('div')
            tabuleiro.appendChild(linhas_abaixo)
        }
        for (p = 0; p < 22; p++) {
            var linhas_abaixo = document.createElement('div')
            linhas_abaixo.setAttribute('class', 'linhaAbaixo')
            tabuleiro.appendChild(linhas_abaixo)
        }

        var filhos = tabuleiro.children
 
        for (p = 0; p < 22 * 44; p++) {
            filhos[p].style.width = '10px'
            filhos[p].style.height = '10px'
        }
    } else {
        let linhas_abaixo = document.querySelector('.linhaAbaixo')
        document.querySelector('#dentro').remove(linhas_abaixo)
        let quantidade_total = document.querySelector('div')
        document.querySelector('#dentro').remove(quantidade_total)

        posicaoAtual = 3
        largura = 10

        document.querySelector('#dentro').style.width = '200px'
        document.querySelector('#dentro').style.height = '400px'

        document.querySelector('#dentro div').style.width = '20px'
        document.querySelector('#dentro div').style.height = '20px'

        document.querySelector('.mini-dentro div').style.width = '20px'
        document.querySelector('.mini-dentro div').style.height = '20px'
    }
}
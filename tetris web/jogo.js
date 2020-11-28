
document.addEventListener('DOMContentLoaded', () => {
    var dentro = document.querySelector('#dentro')
    let quadrados = Array.from(document.querySelectorAll('#dentro div')) // squares

    const pontuacao = document.querySelector('#score') // scoredisplay
    var pontos = 0
    const cores = [
        'orange',
        'red',
        'purple',
        'green',
        'blue',
        'pink',
    ]
    const start = document.querySelector('#start-button') //startbtn

    var largura = 10 // var cause it may change to bigger size

    let proximoRandom = 0

    let ritmo

    var velocidade = 2000

    var nivel_numero = 1
    const nivel = document.querySelector('#nivel')
    nivel.innerHTML = nivel_numero

    var eliminadas_numero = 0
    const linhas_eliminadas = document.querySelector('#linhas_eliminadas')
    linhas_eliminadas.innerHTML = eliminadas_numero

    var tempo_numero = 0
    const tempo = document.querySelector('#tempo')
    tempo.innerHTML = tempo_numero

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

    // pecas tetrominoes
    const ipeca = [
        [1, largura + 1, largura * 2 + 1, largura * 3 + 1], // 1
        [largura, largura + 1, largura + 2, largura + 3], // 2
        [1, largura + 1, largura * 2 + 1, largura * 3 + 1], // 3
        [largura, largura + 1, largura + 2, largura + 3], // 4
    ]

    const opeca = [
        [largura + 1, largura * 2 + 1, largura + 2, largura * 2 + 2], // 1
        [largura + 1, largura * 2 + 1, largura + 2, largura * 2 + 2], // 2
        [largura + 1, largura * 2 + 1, largura + 2, largura * 2 + 2], // 3
        [largura + 1, largura * 2 + 1, largura + 2, largura * 2 + 2], // 4
    ]

    const lpeca = [
        [1, largura + 1, largura * 2 + 1, largura * 2 + 2], // 1
        [largura, largura * 2, largura + 1, largura + 2], // 2
        [0, 1, largura + 1, largura * 2 + 1], // 3
        [largura, largura + 1, 2, largura + 2], // 4
    ]

    const jpeca = [
        [largura * 2, 1, largura + 1, largura * 2 + 1], // 1
        [0, largura, largura + 1, largura + 2], // 2
        [1, largura + 1, largura * 2 + 1, 2], // 3
        [largura, largura + 1, largura + 2, largura * 2 + 2], // 4
    ]

    const tpeca = [
        [largura, 1, largura + 1, largura + 2], // 1
        [1, largura + 1, largura * 2 + 1, largura + 2], // 2
        [largura, largura + 1, largura * 2 + 1, largura + 2], // 3
        [largura, 1, largura + 1, largura * 2 + 1], // 4
    ]

    const upeca = [
        [largura, largura * 2, largura * 2 + 1, largura + 2, largura * 2 + 2], // 1
        [0, largura, largura * 2, 1, largura * 2 + 1], // 2
        [0, largura, 1, 2, largura + 2], // 3
        [1, largura * 2 + 1, 2, largura + 2, largura * 2 + 2], // 4
    ]

    const blockpeca = [
        [largura + 1], // 1
        [largura + 1], // 2
        [largura + 1], // 3
        [largura + 1], // 4
    ]

    const pecas = [ipeca, opeca, lpeca, jpeca, tpeca, upeca, blockpeca]

    let posicaoAtual = 3 // posicao no grid currentPosition
    let rotacaoAtual = 0 // currentRotation

    // select random
    let random = Math.floor(Math.random() * pecas.length)
    let pecaAtual = pecas[random][rotacaoAtual] // current

    // desenho
    function desenhar() {
        pecaAtual.forEach(index => {
            if (pecaAtual.length == 1) {
                quadrados[posicaoAtual + index].style.backgroundColor = 'black'
                console.log("pegou")
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

    // descer a cada segundo
    // ritmo = setInterval(descer, velocidade)

    var teclaEsquerda = 37
    var teclaCima = 38
    var teclaBaixo = 40
    var teclaDireita = 39

    // tecla pressionada
    function controle(k) {
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

    // descer
    function descer() {
        apagar()
        posicaoAtual += largura
        desenhar()
        parar()
    }

    // freeze
    function parar() {
        if (pecaAtual.some(index => quadrados[posicaoAtual + index + largura].classList.contains('linhaAbaixo'))) {
            pecaAtual.forEach(index => quadrados[posicaoAtual + index].classList.add('linhaAbaixo'))
            // aparecer novo
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

    // mover pra esquerda
    function paraEsquerda() {
        apagar()
        const bordaEsquerda = pecaAtual.some(index => (posicaoAtual + index) % largura === 0)

        if (!bordaEsquerda) posicaoAtual -= 1

        if (pecaAtual.some(index => quadrados[posicaoAtual + index].classList.contains('linhaAbaixo'))) {
            posicaoAtual += 1
        }

        desenhar()
    }

    // mover pra direita
    function paraDireita () {
        apagar()
        const bordaDireita = pecaAtual.some(index => (posicaoAtual + index) % largura === largura - 1)

        if (!bordaDireita) posicaoAtual += 1

        if (pecaAtual.some(index => quadrados[posicaoAtual + index].classList.contains('linhaAbaixo'))) {
            posicaoAtual -= 1
        }

        desenhar()
    }

    // tempo de video 1 hora -> rotacao

    // ERRO PRA RODAR U E BLOCK, AINDA NAO SEI
    function rodar () {
        apagar()
        rotacaoAtual++

        if (rotacaoAtual === pecaAtual.length) {
            rotacaoAtual = 0
        }

        pecaAtual = pecas[random][rotacaoAtual]
        desenhar()
    }
    /////////////////////////////////////////////

    // mostrar proximo
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

    // mostrar a proxmia
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

    // botao play pause
    start.addEventListener('click', () => {
        if (ritmo) {
            console.log("pause")
            clearInterval(ritmo)
            ritmo = null
        } else {
            console.log("play")
            desenhar()
            ritmo = setInterval(descer, velocidade)
            proximoRandom = Math.floor(Math.random() * pecas.length)
            mostrarProxima()
        }
    })

    // add pontos
    function addPonto () {
        for (let p = 0; p < 199; p += largura) { // modificar pontuacao aqui?
            const linha = [p, p+1, p+2, p+3, p+4, p+5, p+6, p+7, p+8, p+9]

            if (linha.every(index => quadrados[index].classList.contains('linhaAbaixo'))) {
                pontos += 10
                pontuacao.innerHTML = pontos
                if (pontos % 20 == 0) {
                    nivel_numero += 1
                    nivel.innerHTML = nivel_numero
                    velocidade -= 100
                }
                eliminadas_numero++
                linhas_eliminadas.innerHTML = eliminadas_numero
                linha.forEach(index => {
                    quadrados[index].classList.remove('linhaAbaixo')
                    quadrados[index].classList.remove('peca')
                    if (quadrados[index].style.backgroundColor == 'black') {
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
                const linhaRemovida = quadrados.splice(p, largura)
                quadrados = linhaRemovida.concat(quadrados)
                quadrados.forEach(celula => dentro.appendChild(celula))
            }
        }
    }

    // game over
    function gameOver () {
        if (pecaAtual.some(index => quadrados[posicaoAtual + index].classList.contains('linhaAbaixo'))) {
            alert("acabou")
            clearInterval(ritmo)
        }
    }


})




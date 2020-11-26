
document.addEventListener('DOMContentLoaded', () => {
    var dentro = document.querySelector('#dentro')
    let quadrados = Array.from(document.querySelectorAll('#dentro div')) // squares

    const pontuacao = document.querySelector('#score') // scoredisplay
    const start = document.querySelector('#start-button') //startbtn

    var largura = 10 // var cause it may change to bigger size

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
            quadrados[posicaoAtual + index].classList.add('peca')
        })
    }
    // desenhar()

    function apagar() {
        pecaAtual.forEach(index => {
            quadrados[posicaoAtual + index].classList.remove('peca')
        })
    }

    // descer a cada segundo
    var ritmo = setInterval(descer, 1000)

    // tecla pressionada
    function controle(k) {
        if (k.keyCode === 37) {
            paraEsquerda()
        } else if (k.keyCode === 38) {
            // rodar()
        } else if (k.keyCode === 39) {
            paraDireita()
        } else if (k.keyCode === 40) {
            // paraBaixo()
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
            random = Math.floor(Math.random() * pecas.length)
            pecaAtual = pecas[random][rotacaoAtual]
            posicaoAtual = 4
            desenhar()
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




})
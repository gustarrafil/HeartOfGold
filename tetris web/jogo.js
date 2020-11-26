
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
        'black'
    ]
    const start = document.querySelector('#start-button') //startbtn

    var largura = 10 // var cause it may change to bigger size

    let proximoRandom = 0

    let ritmo

    var velocidade = 1000
    // funcao pra aumentar velocidade de acordo com nivel
    // aumentar nivel de acordo com pontos

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
            quadrados[posicaoAtual + index].style.backgroundColor = cores[random]
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

    // tecla pressionada
    function controle(k) {
        if (k.keyCode === 37) {
            paraEsquerda()
        } else if (k.keyCode === 38) {
            rodar()
        } else if (k.keyCode === 39) {
            paraDireita()
        } else if (k.keyCode === 40) {
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
        [larguraDisplay, larguraDisplay * 2, larguraDisplay * 2 + 1, larguraDisplay + 2, larguraDisplay * 2 + 2], // 1
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
            clearInterval(ritmo)
            ritmo = null
        } else {
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
                linha.forEach(index => {
                    quadrados[index].classList.remove('linhaAbaixo')
                    quadrados[index].classList.remove('peca')
                    quadrados[index].style.backgroundColor = ''
                })
                const linhaRemovida = quadrados.splice(p, largura)
                console.log(linhaRemovida)
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
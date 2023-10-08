function iniciar() {
    window.location.href = 'jogo.html'
}

function singlePlayer() {
    sessionStorage.setItem('jogadores', '2')
    document.querySelector('input#start').disabled = false
    document.querySelector('input#play1').disabled = true
    document.querySelector('input#play2').disabled = false
}

function twoPlayers() {
    sessionStorage.setItem('jogadores', '2')
    document.querySelector('input#start').disabled = false
    document.querySelector('input#play1').disabled = false
    document.querySelector('input#play2').disabled = true
}

function fade() {
    let logo = document.querySelector('div#logo')
    let iniciar = document.querySelector('input#start')
    let p1 = document.querySelector('input#play1')
    let p2 = document.querySelector('input#play2')
    logo.style.transition = '1s'
    logo.style.opacity = '1'
    setTimeout (function(){
        iniciar.style.transition = '1s'
        iniciar.style.opacity = '1'
        play1.style.transition = '1s'
        play1.style.opacity = '1'
        play2.style.transition = '1s'
        play2.style.opacity = '1'
    }, 1000)
}
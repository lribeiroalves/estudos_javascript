function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora < 12) {
        document.body.style.backgroundColor = '#e2cd9f'
        img.src = 'imagens/manha_.png'
    } else if (hora < 18) {
        document.body.style.backgroundColor = '#b984cf'
        img.src = 'imagens/tarde_.png'
    } else {
        document.body.style.backgroundColor = '#515154'
        img.src = 'imagens/noite_.png'
    }
}
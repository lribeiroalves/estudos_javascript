function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var input_ano = document.querySelector('input[type="number"]')
    var user_ano = input_ano.value
    var radio_masc = document.getElementById('masc')
    var radio_fem = document.getElementById('fem')
    var msg = document.getElementById('msg')
    var foto = document.querySelector('div#foto')
    var imagem = document.querySelector('img')

    if (user_ano != '') {
        var idade = Number(ano) - Number(user_ano)
        msg.style.textAlign = 'center'
        foto.style.display = 'block'
        if (radio_masc.checked == true) {
            msg.innerHTML = `Detectamos Homem com ${idade} anos`
            if (idade < 0) {
                alert('[ERRO] Verifique as informações e tente novamente')
                msg.innerHTML = '[ERRO] Verifique as informações e tente novamente'
                foto.style.display = 'none'
            } else if (idade < 10) {
                // criança
                imagem.src = 'imagens/menino.png'
            } else if (idade < 21) {
                // jovem
                imagem.src = 'imagens/jovem-homem.png'
            } else if (idade < 65) {
                // adulto
                imagem.src = 'imagens/homem.png'
            } else {
                // idoso
                imagem.src = 'imagens/idoso.png'
            }
        } else if (radio_fem.checked == true) {
            msg.innerHTML = `Detectamos Mulher com ${idade} anos`
            if (idade < 0) {
                alert('[ERRO] Verifique as informações e tente novamente')
                msg.innerHTML = '[ERRO] Verifique as informações e tente novamente'
                foto.style.display = 'none'
            } else if (idade < 10) {
                // criança
                imagem.src = 'imagens/menina.png'
            } else if (idade < 21) {
                // jovem
                imagem.src = 'imagens/jovem-mulher.png'
            } else if (idade < 65) {
                // adulto
                imagem.src = 'imagens/mulher.png'
            } else {
                // idoso
                imagem.src = 'imagens/idosa.png'
            }
        }
    } else {
        alert('[ERRO] Verifique as informações e tente novamente.')
    }
}
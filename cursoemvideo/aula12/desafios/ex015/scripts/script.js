function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        imagem.setAttribute('alt', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                imagem.setAttribute('src', 'imagens/menino.png')
            } else if ( idade < 21) {
                imagem.setAttribute('src', 'imagens/jovem-homem.png')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'imagens/homem.png')
            } else {
                imagem.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade < 10) {
                imagem.setAttribute('src', 'imagens/menina.png')
            } else if ( idade < 21) {
                imagem.setAttribute('src', 'imagens/jovem-mulher.png')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'imagens/mulher.png')
            } else {
                imagem.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(imagem)
    }
}
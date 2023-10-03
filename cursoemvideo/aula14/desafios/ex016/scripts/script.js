function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key])
    }
}

function contar() {
    var inicio = input_inicio.value
    var fim = input_fim.value
    var passo = input_passo.value

    if(inicio == '' || fim == '' || passo == '') {
        msg.innerHTML = 'Impossível contar!'
    } else {
        if (passo == '0') {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        msg.innerHTML = ''
        for (var c = Number(inicio); c <= Number(fim); c+=Number(passo)) {
            msg.innerHTML += c
            msg.innerHTML += String.fromCodePoint(0x1F449)
        }
        msg.innerHTML += String.fromCodePoint(0x1F3C1)
    }
}

var form = document.querySelector('div#form')
var res = document.querySelector('div#res')

var p_inicio = document.createElement('p')
var p_fim = document.createElement('p')
var p_passo = document.createElement('p')

var lbl_inicio = document.createElement('label')
lbl_inicio.setAttribute('for', 'txtinicio')
lbl_inicio.innerHTML = 'Início: '

var input_inicio = document.createElement('input')
setAttributes(input_inicio, {'id':'txtinicio', 'type':'number'})

var lbl_fim = document.createElement('label')
lbl_fim.setAttribute('for', 'txtfim')
lbl_fim.innerHTML = 'Fim: '

var input_fim = document.createElement('input')
setAttributes(input_fim, {'id':'txtfim', 'type':'number'})

var lbl_passo = document.createElement('label')
lbl_passo.setAttribute('for', 'txtpasso')
lbl_passo.innerHTML = 'Passo: '

var input_passo = document.createElement('input')
setAttributes(input_passo, {'id':'txtpasso', 'type':'number'})

var button_contar = document.createElement('input')
setAttributes(button_contar, {'type':'button', 'value':'Contar', 'onclick':'contar()'})

var msg = document.createElement('p')
msg.innerHTML = 'Preparando contagem...'


p_inicio.appendChild(lbl_inicio)
p_inicio.appendChild(input_inicio)
p_fim.appendChild(lbl_fim)
p_fim.appendChild(input_fim)
p_passo.appendChild(lbl_passo)
p_passo.appendChild(input_passo)

form.appendChild(p_inicio)
form.appendChild(p_fim)
form.appendChild(p_passo)
form.appendChild(button_contar)

res.appendChild(msg)
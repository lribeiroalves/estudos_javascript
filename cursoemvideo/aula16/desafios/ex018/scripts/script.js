var valores = []

function adicionar() {
    let num = Number(document.querySelector('input#num').value)
    let res = document.querySelector('select#lista')
    let msg = document.querySelector('div#msg')
    if (num < 1 || num > 100) {
        alert('[ERRO] Verifique o intervalo de números aceito.')
    } else if (valores.indexOf(num) != -1) {
        alert('[ERRO] O mesmo número não pode ser inserido duas vezes.')
    } else {
        valores.push(num)
        document.querySelector('input#num').value = ''
        document.querySelector('input#num').focus()
        let item = document.createElement('option')
        item.value = `valor${num}`
        item.text = `Valor ${num} adicionado`
        res.appendChild(item)
        msg.innerHTML = ''
    }
}

function finalizar() {
    let msg = document.querySelector('div#msg')
    if (valores.length < 1) {
        alert('[ERRO] Insira algum número')
    } else {
        let paragrafos = []
        for (let i = 0; i < 5; i++) {
            paragrafos.push(document.createElement('p'))
        }

        let soma = function(lista){
            let x = 0
            for(itens of lista) {
                x += itens
            }
            return x
        }
        let media = function(lista) {
            let x = 0
            x = soma(lista) / lista.length
            return x
        }

        paragrafos[0].innerHTML = `Ao todo temos ${valores.length} números cadastrados.`
        paragrafos[1].innerHTML = `O maior valor informado foi ${Math.max(...valores)}`
        paragrafos[2].innerHTML = `O menor valor informado foi ${Math.min(...valores)}`
        paragrafos[3].innerHTML = `Somando todos os valores, temos ${soma(valores)}`
        paragrafos[4].innerHTML = `A média dos valores digitados é ${media(valores).toString().replace('.', ',')}`

        for (item in paragrafos) {
            msg.appendChild(paragrafos[item])
        }
    }
}
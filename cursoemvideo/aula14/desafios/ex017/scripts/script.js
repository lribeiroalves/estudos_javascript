function gerarTabuada() {
    let txtnum = document.querySelector('input#txtnum').value
    if (txtnum == '') {
        alert('Por favor, digite um número!')
    } else {
        let tabuada = document.querySelector('select#tab')
        tabuada.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.setAttribute('value', `v${i}`)
            item.innerHTML = `${txtnum} x ${i} = ${Number(txtnum) * i}`
            tabuada.appendChild(item)
        }
    }
}
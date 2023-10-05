lista = [4, 5, 6, 7, 8]

console.log(lista)

console.log('USANDO O LOOP FOR')
for (let i = 0; i < lista.length; i++) {
    console.log(`Na posição ${i} da lista está o valor ${lista[i]}`)
}

console.log('')

console.log('USANDO O FOR IN')
for (let pos in lista) {
    console.log(`Na posição ${pos} da lista está o valor ${lista[pos]}`)
}

console.log('')

console.log('USANDO O FOR OF')
for (let pos of lista) {
    console.log(`Na posição ${lista.indexOf(pos)} da lista está o valor ${pos}`)
}
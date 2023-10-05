var vetor = [10, 11, 12] // declaração de um vetor ou array ou lista

for (let i = 0; i < 10; i++) {
    vetor.push(i) // adiciona um elemento ao final da lista (semelhante ao append do python)
}

console.log(vetor) // exibir toda a lista
console.log(vetor.length) // exibir o tamanho da lista

vetor.sort() // o método sort organiza a lista considerando os elementos como string e em ordem crescente
console.log(vetor)
vetor.reverse() // reorganiza a lista de forma decrescente
console.log(vetor)

vetor.sort(function(a, b){return a-b})  // ao passar esse função como parametro do sort ele reorganiza a 
                                        // função fazendo comparações enrte os elementos, podendo assim organizar numeros corretamente 
console.log(vetor)
vetor.sort(function(a, b){return b-a}) // pode ser passado o retorno como b-a para que seja feita a ordem decrescente
console.log(vetor)
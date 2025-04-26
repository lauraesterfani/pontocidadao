//Implementar um subprograma que dados dois vetores, copia o conteúdo do primeiro para segundo vetor (elemento por elemento);

function copiar(vetor1,vetor2=[]){
    for(let i=0; i<vetor1.length;i++){
        vetor2.push(vetor1[i])
    }
    return vetor2
}
let vetor1=[1,2,3,4,5,6]

let vetor2=  copiar(vetor1)

console.log(vetor2)
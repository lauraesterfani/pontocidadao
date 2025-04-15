//Implementar um subprograma que dados dois vetores, copia o conteúdo do primeiro no segundo vetor (elemento por elemento) na ordem inversa.
//Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1];

function reverso(vetor1, vetor2){
     for(let i=vetor1.length-1; i>=0;i--){
        vetor2.push(vetor1[i])
     }
     return vetor2
}

let vetor1=[2,5,8,9]
let vetor2=[]
reverso(vetor1,vetor2)
console.log(vetor2)

//ou


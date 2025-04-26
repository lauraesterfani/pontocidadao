//Implementar um subprograma que dado um vetor, computa a média dos seus elementos e retorna quantos elementos acima da média ele possui.

function mediadeles(vetor){
    let soma=0
    let cont=0
    
    for(let i=0;i<vetor.length;i++){
        soma+=vetor[i]
    }
    let media=soma/vetor.length

    for(let i=0; i<vetor.length;i++){
        if(vetor[i]>media){
            cont++
        }
    }
    return cont
}

let vetor=[5,8,9,2]
let quantos=mediadeles(vetorn)
console.log(quantos)
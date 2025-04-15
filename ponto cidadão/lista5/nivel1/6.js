//Implementar um subprograma que dado um vetor e um número, subtraí o número de todos os elementos do vetor;


function subtrair(vetor,numero){
    for(let i=0;i<vetor.length;i++){
        vetor[i]=vetor[i]-numero
    }
    return vetor
}

let vetoratual=[1,5,8,6,5]

let number=5

let result= subtrair(vetoratual,number)

console.log(result)
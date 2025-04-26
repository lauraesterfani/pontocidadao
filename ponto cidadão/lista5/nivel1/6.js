//Implementar um subprograma que dado um vetor e um número, subtraí o número de todos os elementos do vetor;


function subtrair(vetor,numero){
    for(let i=0;i<vetor.length;i++){
        vetor[i]=vetor[i]-numero
    }
    return vetor
}

let vetor=[1,5,8,6,5]

let numero=5

let result= subtrair(vetor,numero)

console.log(result)
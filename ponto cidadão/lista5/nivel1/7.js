//Implementar um subprograma que dado um vetor e um número, divide todos os elementos do vetor pelo número;

function dividir(vetor,numero){
    for(let i=0;i<vetor.length;i++){
        vetor[i]=vetor[i]/numero
    }
    return vetor
}

let vetor=[1,6,8,3,8]

let numero=5

let result=dividir(vetor, numero)

console.log(result)
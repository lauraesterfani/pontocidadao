//Implementar um subprograma que dados um vetor e um número, multiplica cada elemento do vetor pelo número recebido como parâmetro;

function multiplicar(vetor,numero){
    for(let i=0;i<vetor.length;i++){
        vetor[i]=vetor[i]*numero
    }
    return vetor
}

let vetoratual=[1,2,3,4,5,6]
let mutiplicador=3

let resultado= multiplicar(vetoratual,mutiplicador)

console.log(resultado)
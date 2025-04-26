//Implementar um subprograma que dados um vetor e um número, multiplica cada elemento do vetor pelo número recebido como parâmetro;

function multiplicar(vetor,numero=3){
    for(let i=0;i<vetor.length;i++){
        vetor[i]=vetor[i]*numero
    }
}

let vetor=[1,2,3,4,5,6]

 multiplicar(vetor)

console.log(vetor)
//Implementar um subprograma que retorna a quantidade de elementos ímpares em um vetor;

function impar(vetor){
    let cont=0
    for(let i=0;i<vetor.length;i++){
        if(vetor[i]%2!==0){
            cont++
        }
    }
    return cont
}
let vetor=[1,2,3,4,5,6]

let imparn=impar(vetor)

console.log(imparn)
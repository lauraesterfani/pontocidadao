//Implementar um subprograma que dado um vetor, retorna true se a soma dos seus elementos for positiva ou false, caso contrário;

function verdade(vetor){
    let soma=0
    for(let i=0; i<vetor.length;i++){
        soma+=vetor[i]
    }
    if(soma>0){
        return true
    }
    else{
        return false
    }
}

let vetorn=[5,8,9,6,2]
let somar=verdade(vetorn)
console.log(somar)
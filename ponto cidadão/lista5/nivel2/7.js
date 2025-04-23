//Implementar um subprograma que dado um vetor de booleans, retorna true se ao menos um dos elementos do vetor for verdadeiro ou false, caso contrário;

function verificar(vetor){
    for(let i=0; i<vetor.length; i++){
        if(vetor[i]===true){
            return true
        }
    }
    return false;
}

let vetor=[true,true,false];
console.log(verificar(vetor));
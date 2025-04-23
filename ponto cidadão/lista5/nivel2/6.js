//Implementar um subprograma que dado um vetor de booleans, retorna true se todos os elementos do vetor forem verdadeiros ou false, caso contrário;

function verificar(vetor) {
    for (var i = 0; i < vetor.length; i++) {
        if(vetor[i]===false){
            return false;
        }
    }
    return true
}
vetor=[true,true,false];
console.log(verificar(vetor));
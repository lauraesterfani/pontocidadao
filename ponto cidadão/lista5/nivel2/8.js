//Implementar um subprograma que dados dois vetores, retorna true caso todos os elementos de ambos sejam iguais, ou false, caso contrário;

function verificar(vetor1,vetor2){
    for (let i=0; i<vetor1.length; i++){
        if (vetor1[i] !== vetor2[i]){
            return false;
        }
    }
    return true;
}
let vetor1=[true,true,false];
let vetor2=[true,true,false];
console.log(verificar(vetor1,vetor2));
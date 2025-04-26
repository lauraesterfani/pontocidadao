//Implementar subprograma que retorna a soma todos os elementos de um vetor;

function somar(vetor){
    let soma=0;

    for(let i=0;i<vetor.length; i++){
        soma +=vetor[i]
    }
    return soma
}

const vetor=[1,2,3,4,5,6]



console.log("a soma dos elementos é:"+somar(vetor))
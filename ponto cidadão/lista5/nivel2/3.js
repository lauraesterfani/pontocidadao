//Implementar um subprograma que computa e retorna o valor da multiplicação de dois vetores (pesquise a fórmula da multiplicação de vetores);

function multiplica(vetor1,vetor2){
    let result=0

    for(let i=0; i<vetor1.length;i++){
        result+=vetor1[i]*vetor2[i]
    }
    return result
}

let vetor1=[5,6,8,3]
let vetor2=[5,8,9,6]
let resultado=multiplica(vetor1,vetor2)
console.log(resultado)
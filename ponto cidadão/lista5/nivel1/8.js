//Implementar um subprograma que dados dois vetores, retorna qual deles possui a maior soma de seus elementos;

function maior(vetor1, vetor2){
    let soma1=0
    let soma2=0
    for(let i=0;i<vetor1.length;i++){
        soma1+=vetor1[i]
    }

    for(let i=0;i<vetor2.length;i++){
        soma2+=vetor2[i]
    }
    if(soma1>soma2){
        return ("o vetor 1 tem a maior soma:"+soma1)
    }
    if(soma2>soma1){
        return("o vetor 2 tem a maior soma:"+soma2)
    }
    
    else{
        return("ambos tem a mesma soma:")
    }
}

let vetorum=[16,55,8,2]
let vetordois=[5,8,2,1]

let maiorentre=maior(vetorum,vetordois)

console.log(maiorentre)
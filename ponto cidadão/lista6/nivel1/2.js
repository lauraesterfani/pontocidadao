//Implementar um subprograma que dado um array bidimensional retorna true se a soma dos seus elementos for positiva ou false, caso contrário;

function somar(array){
    let soma = 0
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array[i].length; j++){
            soma += array[i][j];
        }
    }
    return soma>0;
}

let array=[
    [1,2,3,4],
    [3,4,5,6],
]
console.log(somar(array))
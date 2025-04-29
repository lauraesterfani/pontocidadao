//Implementar um subprograma que retorna a quantidade de elementos ímpares em um array de duas dimensões;

function impares(array){
    let cont=0

    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){

            if(array[i][j]%2!==0){
                cont++
            }
        }
    }
    return cont
}

let array=[
    [3,4,5,7],
    [4,5,5,6],
]
console.log(impares(array))
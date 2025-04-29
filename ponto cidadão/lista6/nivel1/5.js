//Implementar um subprograma que dados um array bidimensional e um número, subtrai o número de todos os elementos do array;

function subtrair(array, numero=3) {
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array[i].length;j++){
            array[i][j]-=numero;
        }
    }
    return array;
}

let array=[
    [1,2,3,4,5],
    [3,4,5,6],
]
console.log(subtrair(array))
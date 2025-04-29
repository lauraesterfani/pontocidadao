//Implementar um subprograma que dado um array bidimensional e um número, divide todos os elementos do array pelo número;

function dividir(array, numero=3){
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array[i].length;j++){
            array[i][j]/=numero;
        }
    }
    return array;
}

let array=[
    [1,2,3,4],
    [3,4,5,6]
]

console.log(dividir(array));
//Implementar um subprograma que dado um array bidimensional e um número, multiplica cada elemento do array pelo número;

function multiplicar(array, numero=3) {
    for(let i = 0; i <array.length; i++) {
        for(let j = 0; j <array[i].length; j++) {
            array[i][j] *= numero;
        }
    }
    return array;
}

let array=[
    [1,2,3,4],
    [3,4,5,6],
]

console.log(multiplicar(array))
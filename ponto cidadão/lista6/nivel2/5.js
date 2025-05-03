//Implementar um subprograma que dado um array tridimensional, computa a média de seus elementos.

function media(array){
    let soma=0
    let cont=0

    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            for(let k=0;k<array[i][j].length;k++){
                soma+=array[i][j][k]
                cont++
            }
        }
    }
    let media1=soma/cont
    return media1;
}

let array=[
    [
        [1,2,3,4],
        [1,2,3,4],
    ],
    [
        [1,2,3,4],
        [1,2,3,4],
    ]
]
console.log(media(array));
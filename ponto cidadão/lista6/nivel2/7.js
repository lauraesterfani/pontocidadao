//Implementar um subprograma que dado um array bidimensional, computa a média dos seus elementos, conta e retorna quantos elementos acima da média ele possui;
function media(array){
    let cont=0
    let soma=0
    let contador=0

    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            soma+=array[i][j];
            cont++
        }
    }
    let result=soma/cont;

    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(array[i][j]>result){
                contador++
            }
        }
    }
    return contador;
}
let array=[
    [1,2,3,8],
    [1,2,3,4],
]

console.log(media(array));
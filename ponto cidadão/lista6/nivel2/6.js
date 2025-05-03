//Implementar um subprograma que dados dois arrays bidimensionais, retorna qual deles possui a maior soma de seus elementos;

function somar(array1,array2){
    let soma1=0
    let soma2=0

    for(let i=0;i<array1.length;i++){
        for(let j=0;j<array1[i].length;j++){
            soma1+=array1[i][j]
        }
    }
    for(let i=0;i<array2.length;i++){
        for(let j=0;j<array2[i].length;j++){
            soma2+=array2[i][j]
        }
    }
    if(soma1>soma2){
        return array1
    }
    if(soma1<soma2){
       return array2
    }
    else{
        console.log("são iguais");
    }
}

let array1=[
    [1,2,3,8],
    [1,2,3,4],
]

let array2=[
    [1,2,3,4],
    [1,2,3,4],
]

console.log(somar(array1,array2));

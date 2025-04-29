//Implementar subprograma que dados dois arrays bidimensionais, copia o conteúdo do primeiro no segundo array;

function copiar(array1,array2){
    for(let i=0;i<array1.length;i++){
        array2[i]=[];
        for(let j=0;j<array1[i].length;j++){
            array2[i].push(array1[i][j]);
        }
    }
    return array2;
}

let array1=[
    [1,2,3,4,5],
    [1,2,3,4,5],
]

let array2=[]

console.log(copiar(array1,array2))
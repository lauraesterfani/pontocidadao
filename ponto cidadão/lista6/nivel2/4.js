//Implementar um subprograma que dados dois arrays bidimensionais, escreve no segundo array a transcrição do primeiro.
// Exemplo: b[linha,coluna] = a[coluna,linha];

function transcrever(array1,array2){

    for(let i=0;i<array1[0].length;i++){
        array2[i]=[]

        for(let j=0;j<array1.length;j++){
            array2[i][j]=array1[j][i];
        }
    }
    return array2;
}

let array2=[]

let array1=[
    [1,2,3,4],
    [1,2,3,4],
];
console.log(transcrever(array1,array2));
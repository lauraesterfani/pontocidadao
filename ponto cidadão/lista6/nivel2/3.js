//Implementar subprograma que dados três arrays bidimensionais, guarda no terceiro array a soma dos índices equivalentes nos dois primeiros.
// Exemplo: c[1][2] = a[1][2] + b[1][2]; // e assim por diante;

function guardar(array1,array2, array3){

    for(let i=0;i<array1.length;i++){
        array3[i]=[]

        for(let j=0; j<array1[i].length;j++){
            array3[i][j]=array2[i][j]+array1[i][j];
        }
    }
    return array3;
}

let array1=[
    [1,2,3,4],
    [1,2,3,4],
]

let array2=[
    [1,2,3,4],
    [1,2,3,4],
]

let array3=[]

console.log(guardar(array1,array2, array3))
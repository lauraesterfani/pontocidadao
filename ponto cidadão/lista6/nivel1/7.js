//Implementar um subprograma que dados dois arrays bidimensionais, retorna true se ambos forem iguais ou false caso contrário;

function igualizar(array1, array2){

    if(array1.length!==array2.length) return false;

    for(let i=0; i<array1.length;i++){
        for(let j=0;j<array1[i].length;j++){
            if(array1[i][j]!==array2[i][j]) return false;
        }
    }
    return true;
}

let array1 = [
    [1,2,3,4,5,6],
    [4,5,9,8,2,3]
];

let array2 = [
    [1,2,3,4,5,6],
    [4,5,9,8,2,3]
]
console.log(igualizar(array1, array2));
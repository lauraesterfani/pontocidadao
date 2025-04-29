//Implementar um subprograma que dados um array bidimensional de booleans, imprime true se ao menos um dos elementos do array forem verdadeiros ou false, caso contrário.

function comparar(array){

    for(let i=0; i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(array[i][j]==true) return true;
        }
    }
    return false;
}
let array=[
    [false,false,false,false],
    [false,false,false,false],
];
console.log(comparar(array));
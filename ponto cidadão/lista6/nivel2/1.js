//Implementar um subprograma que dadas a quantidade de linhas e de colunas, cria um array de duas dimensões com a quantidade de linhas e colunas especificadas, inicializa seus índices com o valor -1, o imprime e o retorna;
function array(linha, coluna){
    const novo=[]
    for(let i=0;i<linha;i++){
        const linha=[]
        for(let j=0;j<coluna;j++){
            linha.push(-1);
        }
        novo.push(linha);
    }
    for(let i=0; i<novo.length; i++){
        console.log(novo[i]);
    }
    return novo;
}

let linha=3
let coluna=4

console.log(array(linha,coluna));
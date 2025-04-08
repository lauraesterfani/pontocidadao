//Implementar uma função que recebe como parâmetro três números e retorna o maior valor entre eles;

function maiordeles(a,b,c){
    let maior=a

    if(b>a && b>c){
        return(b)
    }

    if(c>a && c>b){
        return(c)
    }

    else{
        return(a)
    }
}
console.log(maiordeles(5,3,7))
//Implementar uma função que recebe como parâmetro três números e retorna o menor valor entre eles;

function menordeles(a,b,c){
    let menor=a

    if(b<a && b<c){
        return(b)
    }
    
    if(c<a && c<b){
        return(c)
    }

    else{
        return(a)
    }
}
console.log(menordeles(2,5,7))
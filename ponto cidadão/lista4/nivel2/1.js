//Implementar uma função que recebe três números como parâmetro e imprime aqueles que são múltiplos de 2 e de 3 ao mesmo tempo;

 function multiplo(a,b,c){

    if(a%2==0 && a%3==0){
        console.log(a)
    }

    if(b%2==0 && b%3==0){
        console.log(b)
    }

    if(c%2==0 && c%3==0){
        console.log(c)
    }
 }
 multiplo(5,6,7)
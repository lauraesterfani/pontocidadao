//Implementar uma função que recebe como parâmetro quatro números e retorna o maior entre eles.

function maiordeles(a,b,c,d){
    let maior=a

    if(b>maior){
        maior=b
    }

    if(c>maior){
        maior=c
    }

    if(d>maior){
        maior=d
    }
    return maior
}
console.log(maiordeles(1,8,3,5))
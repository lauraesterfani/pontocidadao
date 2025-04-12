//Implementar uma função que recebe como parâmetro quatro números e retorna quantos números ímpares há entre eles;

function impares(a,b,c,d){
    let cont=0

    if(a%2!==0){
        cont++
    }

    if(b%2!==0){
        cont++
    }

    if(c%2!==0){
        cont++
    }

    if(d%2!==0){
        cont++
    }
    return cont
}
console.log(impares(1,2,3,4))

//ou

const a=5
const b=8
const c=6
const d=9
let cont=0
function impar(numero){
    if(numero%2!==0){
        cont++
    }
    return cont
}
console.log(impar(a))
console.log(impar(b))
console.log(impar(c))
console.log(impar(d))

//Implementar uma função que recebe como parâmetro quatro números e retorna quantos números pares há entre eles;

function pares(a,b,c,d){
    let cont=0

    if(a%2==0){
        cont++
    }

    if(b%2==0){
        cont++
    }

    if(c%2==0){
        cont++
    }

    if(d%2==0){
        cont++
    }
    return cont
}
console.log(pares(1,2,3,4))

//ou

const a=5
const b=8
const c=6
const d=9
let cont=0
function pares(numero){
    if(numero%2==0){
        cont++
    }
    return cont
}
console.log(pares(a))
console.log(pares(b))
console.log(pares(c))
console.log(pares(d))
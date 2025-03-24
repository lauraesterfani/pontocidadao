//Implemente um programa capaz de, dados quatro números, contar quantos entre eles são divisíveis por 5 e 7 ao mesmo tempo;

const a=35
const b=5
const c=8
const d=9
let cont=0

if(a%5==0 && a%7==0){
    cont++
}

if (b%5==0 && b%7==0){
    cont++
}

if(c%5==0 && c%7==0){
    cont++
}

if(d%5==0 && d%7==0){
    cont++
}
console.log(cont)
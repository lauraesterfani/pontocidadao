//Implemente um programa capaz de, dados quatro números, contar quantos dentre eles são divisíveis por 3 ou 4;

const a=5
const b=2
const c=8
const d=9
let cont=0

if(a%3==0 || a%4==0){
    cont++
}

if(b%3==0 || b%4==0){
    cont++
}

if(c%3==0 || c%4==0){
    cont++
}

if(d%3==0 || d%4==0){
    cont++
}
console.log(cont)
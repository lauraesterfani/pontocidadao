//Implemente um programa capaz de dividir dois números sem usar o operador da divisão (Dica: 9/3 = 9 - 3 - 3 - 3);

let a=9
let b=3
let resultado=0

for(let i=a; i>=b; i-=b){
    resultado++
} 
console.log(resultado)
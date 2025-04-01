//Implemente um programa capaz de computar o resto da divisão de dois números sem utilizar o operador %;

let a=5
let b=3
let resto=a

for(let i=a; i>=b; i-=b){
    resto-=b
}
console.log(resto)
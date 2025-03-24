//Implemente um programa capaz de identificar se há exatamente (apenas) um número ímpar entre três números dados.

const a=2
const b=5
const c=8
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

if(cont==1){
    console.log("há exatamente um número ímpar")
}

else{
    console.log("depende")
}
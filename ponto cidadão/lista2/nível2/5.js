//Implemente um programa capaz de identificar se há exatamente (apenas) um número positivo entre três números dados;

const a=5
const b=8
const c=9
let cont=0

if(a>0){
    cont++
}

if(b>0){
    cont++
}

if(c>0){
    cont++
}

if(cont==1){
    console.log('exatamente um número positivo')
}

else("depende")
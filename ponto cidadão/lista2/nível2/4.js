//Implemente um programa capaz de identificar se há exatamente (apenas) um número negativo entre três números dados;

const a=4
const b=5
const c=8
let cont=0

if(a<0){
    cont++
}

if(b<0){
    cont++
}

if(c<0){
    cont++
}

if(cont==1){
    console.log("há exatamente 1 negativo")
}

else{
    console.log("depende")
}

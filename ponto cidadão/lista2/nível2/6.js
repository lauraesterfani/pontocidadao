//Implemente um programa capaz de identificar se há exatamente dois números negativos entre três número dados;

const a=5
const b=6
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

if(cont==2){
    console.log(" há exatamente dois números negativos")
}

else{
    console.log("depende")
}
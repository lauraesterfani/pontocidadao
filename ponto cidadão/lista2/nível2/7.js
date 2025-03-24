//Implemente um programa capaz de identificar se há exatamente dois números positivos entre três número dados;

const a=2
const b=5
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

if(cont==2){
    console.log('Há exatamente dois números positivos')
}

else{
    console.log("depende")
}
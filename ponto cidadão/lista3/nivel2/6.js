//Implemente um programa capaz de testar se um número não é primo.
//Dica: um número é primo quando ele é divisível apenas por 1 além de ele próprio;

let a=4
let primo=true
for(let i=2; i<a; i++){
    if(a%i==0){
        primo=false
    }
}
if(!primo){
    console.log('não é primo')
}
else{
    console.log('primo')
}
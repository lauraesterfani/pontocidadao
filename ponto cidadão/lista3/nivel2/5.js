//Implemente um programa capaz de testar se um número é primo.
//Dica: um número é primo quando ele é divisível apenas por 1 além de ele próprio;
 let n=7
 let primo= true

 for(let i=2; i<n; i++){
    if(n%i===0){
        primo=false
    }
 }
 if(primo){
    console.log('primo')
 }
 else{
    console.log('não é primo')
 }
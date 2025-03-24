//Implemente um programa capaz de, dados três números, encontrar o número do meio (não é o menor, nem o maior);

const a=2
const b=5
const c=8
let meio;

if((a>b && a<c) || (a<b && a<c)){
    meio=a
}
else if((b>a && b<c) || (b<a && b>c)){
    meio=b
}

else{
    meio=c
}

console.log('número do meio é:'+meio)

//Implementar um subprograma que retorna a quantidade de elementos pares em um vetor;

 function par(vetor){
    let cont=0
    for(let i=0;i<vetor.length;i++){
        if(vetor[i]%2==0){
            cont++
        }
    }
    return cont
 }
 
 let vetor=[1,5,8,2,6]

 let paresn=par(pares)

 console.log(paresn)
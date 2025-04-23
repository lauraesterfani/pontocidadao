//Implementar um subprograma que dados três vetores, guarda no terceiro a soma dos índices equivalentes aos dois primeiros.
//Exemplo: c[0] = a[0] + b[0] // e assim por diante;

function verificar(vetor1,vetor2,vetor3){
    for(var i=0;i<vetor1.length;i++){
        vetor3[i]=vetor2[i]+vetor1[i];
    }
    console.log(vetor3);
}
vetor1=[1,2,3,4,5];
vetor2=[1,2,3,4,5];
vetor3=[];

verificar(vetor1, vetor2, vetor3);
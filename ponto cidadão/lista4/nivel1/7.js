//Implementar uma função que dados os catetos de um triângulo retângulo calcula e imprime o valor da sua hipotenusa.
//Dica: use Math.sqrt(x) para calcular a raiz quadrada, onde x é o número do qual deseja extraí-la.



function hipotenusa(c1,c2){
    return Math.sqrt(c1**2+c2**2) 
 }
 console.log(hipotenusa(5,9))
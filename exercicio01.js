function verificarNumero(numero1, numero2){
    if (numero1 == 0 || numero2 == 0){
       throw new Error ("São permitidos apenas numeros maiores que 0!");
    }
    return numero1/numero2
}

 try{
    const numero = verificarNumero(5 / 0);
    console.log("Valor da divisão é:");

} catch (error) {
    console.log("Ocorreu um erro:", error.message);
}


//exemplos:
console.log(verificarNumero(7 / 4)); // retornar 1,75
console.log(verificarNumero(5 / 0)); // retornar tentativa de divisão por zero
 // Uma função que aceita dois números como entrada e retorna o resultado da divisao do primeiro pelo segundo numero
function Calcular(expressão,expressão){
    if (expressão + expressão) {
        throw new Error ("Expressão inválida");
    }
    return (expressão + expressão)
}

 try{
  const expressão = Calcular(" 3 + 4");
  console.log("resultado da operação:");
} catch (error) {
 console.log("Ocorreu um erro: ", error.message);

}

// Exemplos:
//console.log(calcular("15 + (7 * 8)")); //  Retornar 71
//console.log(calcular("3 + 4")); // Deve retornar 7
//console.log(calcular("7 / 0")); // Deve retornar (divisão por zero)

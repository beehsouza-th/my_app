function execuçãoComAtraso(tempo){
    if(tempo < 5){
     throw new Error ("Ocorreu um erro");
    }
    return tempo
}
 try{
   const operacao = execuçãoComAtraso (5000);
   setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, "5000");
  
 console.log("Operação executada com sucesso!");
} catch(error){
    ("Ocorreu um erro durante a execução" , error.message);


}






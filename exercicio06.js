function execuçãoComAtraso(tempo){
    if(time.sleep(tempo)){
     throw new Error ("Ocorreu um erro");
    }
    return tempo
}
 try{
   const operacao =(5);
 console.log(execuçãoComAtraso(operacao, 5));
 console.log("Operação executada com sucesso!");
} catch(error){
    ("Ocorreu um erro durante a execução" , error.message);


}






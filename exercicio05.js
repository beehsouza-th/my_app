function elemento (palavra){
    if(texto){
        throw new Error ("Não existe esse elemento!");
      
    }
    return texto
}
 try {
    const element = elemento ("Não existe esse elemento");
    console.log(elemento.texto); 

} catch (error) {
    console.error("O elemento não  encontrado:", error.message);
}
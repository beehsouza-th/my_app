function indiceElemento(array,indice) {
    if (indice < 0 || indice >= array.length){
        throw new Error("Índice fora de intervalo ");
    }
      return array[indice];
}
try{
    const elementoarray =[7, 5, 6, 8, 9];
    console.log("retornar indice");
    console.log(indiceElemento(elementoarray, 3));
} catch (error) {
    console.log("Ocorreu um erro", error.message);
}

  
// Exemplo :
 // console.log(indiceElemento(elementoarray, 3)); //  retornar 6
  //console.log(indiceElemnto(elementoarray, 8)); //  retornar Índice fora do intervalo 
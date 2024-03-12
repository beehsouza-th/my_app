function objetospropriedades(){
   if (propriedades ){
     throw new Error ("Objeto não encontrado!");
    }  
 return objeto
}

try{
  const valor = objetospropriedades[" proprie1, proprie2, propri3, propri4"];
    console.log(objetospropriedades(valor, propri1));
}catch (error){
    console.log("A propriedade 'propri4' não existe neste objeto.");
}
    
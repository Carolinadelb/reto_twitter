//DOM para llamar al botón
const boton = document.getElementById("btn");
boton.addEventListener("click", () =>{

  //acá va las variables para los comentarios

  let comments = document.getElementById("comment").value;
  
  //limpie el text area para que el comentario se limpie
  document.getElementById("comment").value = " ";

  //contenedor donde dejare mis comentarios en html
  const cont = document.getElementById("cont");

  //Primero crear todo 
  //div contenedor
  const newComments = document.createElement("div");
  //validar que el text area tenga un comentario 
  if(comments.length === 0 || comments === null){
    alert ("debes ingresar un mensaje");
    return false;
  }

  characterN = document.getElementsByTagName("txt").length;
  console.log(characterN);
 hacer que 140 , usuario funcion add event tecla apregta una tecla, descuemnta




//contar letras
/*
let max_letras = 140;

let texto = comments.value.length;

let resultado = max_letras - texto;

document.getElementById("counter").innerHTML = resultado;

}
*/




  
  

  /*if(contador < 0) {  
   parrafo = '<p class="advertencia">';  
}  
else {  
   parrafo = '<p class="indicador">';  
}  */


  /*let countChar = comments.length; 
   if (comments.length > 140){
     return "stop!"
   }*/ 
  
  //crear icono corazón
  const heart = document.createElement("i");
  heart.classList.add('fas', 'fa-heart', 'heart');
  //crear icono basura
  const trash = document.createElement("i");
  trash.classList.add('fas', 'fa-trash', 'trash');
  //nodos de texto del textarea
  let textNewComment = document.createTextNode(comments); 

  const contenedorElemento = document.createElement("p");
  //para poner quien es el padre se asigna con el hijo
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(trash);
  newComments.appendChild(heart);
  newComments.appendChild(contenedorElemento); 

  //hay que asignarle 
  cont.appendChild(newComments);

});
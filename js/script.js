let arrowConteudo = document.querySelectorAll('.cursos-box-area');

function clickCursos(event){
   console.log (event.currentTarget.children[1].classList.toggle('on-conteudo')); 

   if(event.currentTarget.children[1].classList.toggle('on-conteudo')== false){
    console.log(event.currentTarget.children[1]);
   }else{

   }
   
}
arrowConteudo.forEach((cursos) =>{
    cursos.addEventListener('click',clickCursos);
})

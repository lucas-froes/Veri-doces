let arrowConteudo = document.querySelectorAll('.cursos-box-area');
let click = 0

function clickCursos(event){ 

  if(event.currentTarget.children[1].classList[2]){
    event.currentTarget.children[1].classList.remove('on-conteudo');
  }
  else{
    event.currentTarget.children[1].classList.add('on-conteudo');
  }
  
  arrowConteudo.forEach((click, i) =>{

    if(event.currentTarget != click){
       click.children[1].classList.remove('on-conteudo');
    }
  })
}

arrowConteudo.forEach((cursos) =>{
    cursos.addEventListener('click',clickCursos);
})

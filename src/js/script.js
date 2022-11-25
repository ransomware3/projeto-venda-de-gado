const elementosAnimados = document.querySelectorAll('[data-anime]')

function animacaoScroll(){
    const topoDaPagina = window.pageYOffset + ((window.innerHeight * 3) / 4)
    elementosAnimados.forEach((item) => {
        if(topoDaPagina > item.offsetTop){
            item.classList.add('animate')
        }else{
            item.classList.remove('animate')
        }
    })
}

animacaoScroll()

if(elementosAnimados.length){
    window.addEventListener('scroll', () => {
        animacaoScroll()
    })
}
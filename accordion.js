function initAccordion(){
    const listaAcorddion = document.querySelectorAll('.faq-list dt')
    const ativo = 'ativo';

    if(listaAcorddion.length){
        listaAcorddion[0].classList.add(ativo)
        listaAcorddion[0].nextElementSibling.classList.add(ativo)
    

        function activeAccordion(){
            this.classList.toggle(ativo)
            this.nextElementSibling.classList.toggle(ativo)
            trocarImagem()
            
        }


        listaAcorddion.forEach((item)=>{
            item.addEventListener('click', activeAccordion)
        });
    }

}

initAccordion()

function trocarImagem(){
    const teste = document.querySelectorAll('dt img')
    teste.forEach((item)=>{
        item.classList.toggle('ativo')
    })
    

    
}




const Modal = {
    open(){
        // Abrir a caixinha 
        // Adicionar a class active a caixinha
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active') // adicionar ou remover várias classes

    },
    close(){
        // fechar o modal(caixinha)
        // remover a class active do modal 
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')// adicionar ou remover várias classes
    }
}
export default class Modal {
    constructor (buttonOpen,containerModal,colorShare){
        this.buttonOpen = document.querySelector(buttonOpen);
        this.containerModal = document.querySelector(containerModal);
        this.colorShare = document.querySelector(colorShare);

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.clickOutModal = this.clickOutModal.bind(this);
    }

    // abre ou fecha o modal
    toggleModal(){
        this.containerModal.classList.toggle('active');
    }

    changeColor(){
        this.colorShare.classList.toggle('change');
    }

    // adiciona o evento de toggle ao modal
    eventToggleModal(event){
        event.preventDefault();
        this.toggleModal();
        this.changeColor();
    }

    // fecha o modal ao clicar do lado de fora
    clickOutModal(event){
        if (event.target === this.containerModal){
            this.toggleModal();
            this.changeColor();
        }
    }

    // adiciona os eventos aos elementos do modal
    addModalEvents(){
        this.buttonOpen.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.eventToggleModal);
    }

    init(){
        if(this.buttonOpen && this.containerModal &&this.colorShare){
            this.addModalEvents();
        }
        return this;
    }
}



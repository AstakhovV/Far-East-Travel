let buttons = document.querySelectorAll('.button')
let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let modalNoButton = document.querySelector('.modal__action--negative')

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        backdrop.classList.add('open')
        modal.classList.add('open')
    })
})

backdrop.addEventListener('click', ()=>{
    mobileNav.classList.remove('open')
    closeModal()
})

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal)

}

function closeModal() {
    backdrop.classList.remove('open')
    if (modal) {
        modal.classList.remove('open')
    }
}

// navMenu mobile

let toggleButton = document.querySelector('.toggle-button')
let mobileNav = document.querySelector('.mobile-nav')

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})
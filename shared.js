let buttons = document.querySelectorAll('.button')
let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let modalNoButton = document.querySelector('.modal__action--negative')
const ctaButton = document.querySelector('.main-nav__item--cta')

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        backdrop.style.display = 'block'
        setTimeout(()=>{
            backdrop.classList.add('open')
        }, 10)
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
    setTimeout(()=>{
        backdrop.style.display = 'none'
    }, 310)
    if (modal) {
        modal.classList.remove('open')
    }
}

// navMenu mobile

let toggleButton = document.querySelector('.toggle-button')
let mobileNav = document.querySelector('.mobile-nav')

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open')

    backdrop.style.display = 'block'
    setTimeout(()=>{
        backdrop.classList.add('open')
    }, 10)
})

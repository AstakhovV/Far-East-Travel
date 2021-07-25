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

// animation show

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-element');
        }
    });
}
let options = { threshold: 0.02 };
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.package');
const elementsMain = document.querySelectorAll('.plan');
const elementsKeyFeature = document.querySelectorAll('.key-features__list li');

for (let elm of elements) {
    observer.observe(elm);
}
for (let elm of elementsMain) {
    observer.observe(elm);
}
for (let elm of elementsKeyFeature) {
    observer.observe(elm);
}
// show maximize image

const imagesPreview = document.querySelectorAll('.popupbox_preview')
const popupbox = document.querySelector('.popupbox')
const bodyBox = document.querySelector('body')
const popupbox_header = document.querySelector('.popupbox_header')
const popupbox_image = document.querySelector('.popupbox_image')
const closeImage = document.querySelector('[title="Закрыть"]')
imagesPreview.forEach(image => image.addEventListener('click', (e) => {
    backdrop.style.display = 'block'
    setTimeout(()=>{
        backdrop.classList.add('open')
    }, 10)
    bodyBox.style.overflow = 'hidden'
    popupbox.style.display = 'block'
    popupbox_header.firstChild.data = image.closest('section').childNodes[1].children[0].innerText
    popupbox_image.children[0].alt = image.children[0].alt
    popupbox_image.children[0].src = image.children[0].alt + '.jpg'

}))

if (closeImage) {
    closeImage.addEventListener('click', () => {
        popupbox.style.display = 'none'
        bodyBox.style.overflow = ''
        closeModal()
    })
}

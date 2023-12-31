//Nav hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))


//Animation
const hiddenElements = document.querySelectorAll('.hidden-card, .hidden-title, .hidden-abt');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.target.classList.contains('card')){
            entry.target.classList.toggle("show-card", entry.isIntersecting)
        }
        else if (entry.target.classList.contains('about-card')){
            entry.target.classList.toggle("show-abt-card", entry.isIntersecting)
        }
        else if (entry.target.classList.contains('hero-container')){
            entry.target.classList.toggle("show-title", entry.isIntersecting)
        }        
    })
})

hiddenElements.forEach(element => {
    observer.observe(element)
})


//Modal
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close');
const modalOpenBtn = document.querySelector('.modal-open');

modalOpenBtn.addEventListener('click', () => {
    modal.showModal();
})

modalCloseBtn.addEventListener('click', () => {
    modal.close();
})


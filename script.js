const menuToggle = document.querySelector('.menu-toggle')
const navMenu = document.querySelector('nav ul')

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('animation')
    navMenu.classList.toggle('slide')
})
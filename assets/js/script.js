const toggleButton = document.getElementsByClassName('menu')[0];
const navbar = document.getElementsByTagName('nav')[0];

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
})
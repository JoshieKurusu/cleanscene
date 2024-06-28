const button = document.querySelector('#navbar-btn'); // Hamburger Btn
const menu = document.querySelector('#navbar-menu'); // Navbar Menu
const btn1 = document.querySelector('#hamburger');  // Hamburger Icon
const btn2 = document.querySelector('#close'); // Close Icon

button.addEventListener('click', () => {
    document.body.classList.toggle('overflow-hidden');
    menu.classList.toggle('hidden');
    btn1.classList.toggle('hidden');
    btn2.classList.toggle('hidden');
});
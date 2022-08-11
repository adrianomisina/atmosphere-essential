// nmenu-hamburguer
const btn = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu-container')
const toggleMenu = () => {
  menu.classList.toggle('menu-container-active')
}
btn.addEventListener('click', toggleMenu)

//GO TO TOP
// Get the element
const topBtn = document.querySelector(".top-btn");

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// On scroll, Show/Hide the btn with animation
window.onscroll = () => (window.scrollY > 20 ? (topBtn.style.opacity = 1) : (topBtn.style.opacity = 0));
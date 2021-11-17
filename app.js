// Navigation
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const menulog = document.querySelector('#menu-log');
const login = document.querySelector('.login');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

menulog.onclick = () => {
    login.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// // Scroll Reveal
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '40px',
//     duration: 2000,
//     reset: true
// });  

// sr.reveal('.home-text, .home-img, .about-img, .about-text, .box, .s-box, .btn, .contact-box, .heading, .copyright', {interval: 200})

// Popup view
var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.bx-cart');
var closeBtns = document.querySelectorAll('.close-btn');

//javascript for quick view button
var popup = function(popupClick){
    popupViews[popupClick].classList.add('active');
  }

  popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
      popup(i);
    });
  });

  //javascript for close button
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      popupViews.forEach((popupView) => {
        popupView.classList.remove('active');
      });
    });
  });
const boxNotif = document.querySelector('.box-notif');
let notif = false;
window.addEventListener('scroll', function() {
  if (window.scrollY > 0  && !notif) {
    boxNotif.classList.add('shownotif');
    notif = true;
  } 
});

document.querySelector('#close').addEventListener('click', function() {
    if (notif === true) {
    boxNotif.classList.remove('shownotif')
    }
})

const navbarnav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
})
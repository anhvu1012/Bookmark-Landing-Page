const mobileNavOpenBtn = document.getElementById('mobile-nav-open-btn');
const mobileNavCloseBtn = document.getElementById('mobile-nav-close-btn');
const mobileNav = document.getElementById('mobile-nav-wrapper');
mobileNavOpenBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.classList.remove('hidden');
})
mobileNavCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.classList.add('hidden');
});
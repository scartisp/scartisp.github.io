document.getElementById('toggle-nav-img').addEventListener('click', () => {

  document.getElementById('toggle-nav-div').classList.toggle('toggle-nav-click');
  const navUl = document.querySelector('.main-navigation-ul')
  navUl.classList.toggle('is-active');
});
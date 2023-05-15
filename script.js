const openNav = document.getElementById('bar_icon');
openNav.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
});

const closeNav = document.getElementById('close_icon');
closeNav.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
});
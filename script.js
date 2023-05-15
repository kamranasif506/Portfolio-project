const openNav = document.getElementById('bar_icon');
openNav.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
});

const closeNav = document.getElementById('close_icon');
closeNav.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
});
let menuItems = document.getElementsByClassName('navlinks-items');
Array.from(menuItems).forEach(li => {
  li.addEventListener('click', handleClick);
});
function handleClick(event) {
  document.getElementById('myNav').style.width = '0%';
}
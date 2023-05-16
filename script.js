const openNav = document.getElementById('bar_icon');
const take_tour = document.getElementById('take_tour');
const modal = document.getElementById('myModal');
openNav.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
});

const closeNav = document.getElementById('close_icon');
closeNav.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
});
const menuItems = document.getElementsByClassName('navlinks-items');
Array.from(menuItems).forEach((li) => {
  li.addEventListener('click', () => {
    document.getElementById('myNav').style.width = '0%';
  });
});
take_tour.addEventListener('click',function(){
  modal.style.display = "block";
})

const openNav = document.getElementById('bar_icon');
openNav.addEventListener('click', function() {
  console.log('Button clicked!');
  document.getElementById("myNav").style.width = "100%";
});

const closeNav = document.getElementById('close_icon');
closeNav.addEventListener('click', function() {
  console.log('Button clicked!');
  document.getElementById("myNav").style.width = "0%";
});
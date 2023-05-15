const openNav = document.getElementById('bar_icon');
console.log('sad');
// Add a click event handler
openNav.addEventListener('click', function() {
  // Code to be executed when the button is clicked
  console.log('Button clicked!');
  document.getElementById("myNav").style.width = "100%";
});

const closeNav = document.getElementById('close_icon');
console.log('sad');
// Add a click event handler
closeNav.addEventListener('click', function() {
  // Code to be executed when the button is clicked
  console.log('Button clicked!');
  document.getElementById("myNav").style.width = "0%";
});
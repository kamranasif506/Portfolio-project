
const openNav = document.getElementById('bar_icon');
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

project_lists = {
  project1:{
    name:'Project Name goes here',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['Computer','Monitor','Keyboard','Mouse'],
    image: 'images/project_1.png',
    live_link: '#',
    source_link: '#',
  },
  project2:{
    name:'Project Name goes here',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['HTML/CSS','Ruby on Rails','Javascript'],
    image: 'images/project_2.png',
    live_link: '#',
    source_link: '#',
  },
  project3:{
    name:'Project Name goes here',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['Computer','Monitor','Keyboard','Mouse'],
    image: 'images/project_3.png',
    live_link: '#',
    source_link: '#',
  },
  project4:{
    name:'Project Name goes here',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['Computer','Monitor','Keyboard','Mouse'],
    image: 'images/project_4.png',
    live_link: '#',
    source_link: '#',
  },
  project5:{
    name:'Project Name goes here',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['Computer','Monitor','Keyboard','Mouse'],
    image: 'images/project_5.png',
    live_link: '#',
    source_link: '#',
  },
  project6:{
    name:'Project Name goes here',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies:['Computer','Monitor','Keyboard','Mouse'],
    image: 'images/project_6.png',
    live_link: '#',
    source_link: '#',
  }
};

const take_tour = document.getElementsByClassName('take_tour');
Array.from(take_tour).forEach(take_tour => {
  take_tour.addEventListener('click', function(event){
    var index = event.target.getAttribute('data-id');
    const keys = Object.keys(project_lists);
    const project = project_lists[keys.find(key => key === index)];
    console.log(project);
    document.getElementById('modal_title').innerHTML=project.name;
    document.getElementById('modal_banner').src=project.image;
    const images = document.querySelectorAll('.modal_slider_img');
    images.forEach((image) => {
      image.src = project.image;
    });
    var tech = project.technologies;
    var tech_html='';
    for(let i=0;i<tech.length; i++){
      tech_html += '<li>'+tech[i]+'</li>';
    }
    document.getElementById('modal_ul').innerHTML = tech_html;
    document.getElementById('project_desc').innerHTML = project.description;
    document.getElementById('see_sources').href = project.source_link;
    document.getElementById('see_live').href = project.live_link;
    modal.style.display = "block";
  });
});
// function handleClick(event){
  
// }
const closeModel = document.getElementById('close_model');
  closeModel.addEventListener('click', function(){
    modal.style.display = "none";
  });

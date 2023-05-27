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

const projectLists = {
  project1: {
    name: 'Project Name goes here',
    shortName: '',
    mobileName: 'Your Project Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['Computer', 'Monitor', 'Keyboard', 'Mouse'],
    image: 'images/project_1.png',
    imageDesktop: 'images/project1-desktop.png',
    live_link: '#',
    source_link: '#',
  },
  project2: {
    name: 'Project Name goes here',
    shortName: '',
    mobileName: 'Your Project Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image: 'images/project_2.png',
    imageDesktop: 'images/Rectangle 46.png',
    live_link: '#',
    source_link: '#',
  },
  project3: {
    name: 'Project Name goes here',
    shortName: '',
    mobileName: 'Your Project Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['Computer', 'Monitor', 'Keyboard', 'Mouse'],
    image: 'images/project_3.png',
    imageDesktop: 'images/Rectangle 27.png',
    live_link: '#',
    source_link: '#',
  },
  project4: {
    name: 'Project Name goes here',
    shortName: '',
    mobileName: 'Your Project Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['Computer', 'Monitor', 'Keyboard', 'Mouse'],
    image: 'images/project_4.png',
    imageDesktop: 'images/Rectangle 47.png',
    live_link: '#',
    source_link: '#',
  },
  project5: {
    name: 'Project Name goes here',
    shortName: 'Project Name goes...',
    mobileName: 'Your Project Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['Computer', 'Monitor', 'Keyboard', 'Mouse'],
    image: 'images/project_5.png',
    imageDesktop: 'images/Rectangle 26.png',
    live_link: '#',
    source_link: '#',
  },
  project6: {
    name: 'Project Name goes here',
    shortName: '',
    mobileName: 'Your Project Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br>    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['Computer', 'Monitor', 'Keyboard', 'Mouse'],
    image: 'images/project_6.png',
    imageDesktop: 'images/Rectangle 25.png',
    live_link: '#',
    source_link: '#',
  },
};
const tech1 = projectLists.project1.technologies;
const techHtml1 = tech1.map((item) => `<li>${item}</li>`).join('');
const tech2 = projectLists.project2.technologies;
const techHtml2 = tech2.map((item) => `<li>${item}</li>`).join('');
const tech3 = projectLists.project3.technologies;
const techHtml3 = tech3.map((item) => `<li>${item}</li>`).join('');
const tech4 = projectLists.project4.technologies;
const techHtml4 = tech4.map((item) => `<li>${item}</li>`).join('');
const tech5 = projectLists.project5.technologies;
const techHtml5 = tech5.map((item) => `<li>${item}</li>`).join('');
const tech6 = projectLists.project6.technologies;
const techHtml6 = tech6.map((item) => `<li>${item}</li>`).join('');

const projectSection = `<section class="main-desktop">
              <div class="desktop-grid">
                <div class="desktop-grid-item box_1"><h2>Projects</h2></div>
                <div class="desktop-grid-item box_2"><img src="images/project-dots.png" alt=""></div>
                <div class="desktop-grid-item box_3">
                  <img class="box_3_img" src="${projectLists.project1.imageDesktop}" alt="">
                  <div class="overlay-project1">
                    <h3>${projectLists.project1.name}</h3>
                    <ul>${techHtml1}</ul>
                  </br>
                    <button class="take_tour" id="take_tour" data-id="project1">
                      <span class="btn_text" data-id="project1">See this project </span>
                      <img src="images/ic_arrow_right.png" data-id="project1" alt="" class="arrow" />
                    </button>
                  </div>
                </div>
                
              </div>
              <div class="desktop-grid2">
                <div class="desktop-grid2-item box_4"><img class="box_4_img" src="${projectLists.project2.imageDesktop}" alt=""></div>
                <div class="desktop-grid2-item box_5"><img class="box_5_img" src="images/project-dots.png" alt=""></div>
                <div class="desktop-grid2-item box_6">
                  <div class="d_img">
                    <img class="box_6_img" src="images/D.png" alt="">
                  </div>
                  <div class="egg_img">
                    <img class="box_egg_img" src="images/egg.png" alt="">
                  </div>
                  <div class="square_img">
                    <img class="box_square_img" src="images/square.png" alt="">
                  </div>
                </div>
                <div class="desktop-grid2-item box_7">
                  <img class="box_7_img" src="${projectLists.project6.imageDesktop}" alt="">
                  <div class="overlay-project2">
                    <h3>${projectLists.project5.shortName}</h3>
                    <ul>${techHtml5}</ul>
                  
                    <button class="take_tour row-2" data-id="project2">
                      <span class="btn_text" data-id="project1">See this project </span>
                      <img src="images/ic_arrow_right.png" data-id="project1" alt="" class="arrow" />
                    </button>
                    <img src="${projectLists.project5.imageDesktop}" alt="" class="hover_img">
                  </div>
                </div>
              </div>
              <div class="desktop-grid3">
                <div class="desktop-grid-item3 box_8"><img src="${projectLists.project3.imageDesktop}" alt="" class="row3_img"></div>
                <div class="desktop-grid-item3 box_9"><img src="images/Shape.png" alt=""></div>
                <div class="desktop-grid-item3 box_10">
                  <img class="box_10_img" src="images/Group 83.png" alt="">
                </div>
                
              </div>
              <div class="desktop-grid4">
                <div class="desktop-grid-item4 box_11">
                  <img src="images/Group 85.png" alt="" class="row4_img">
                </div>
                <div class="desktop-grid-item4 box_12">
                  <img src="images/Shape_egg.png" alt="" class="row4_egg_img">
                </div>
              
                <div class="desktop-grid-item4 box_13">
                  <img class="box_14_img" src="images/image-geometry_4.png" alt="">
                </div>
                <div class="desktop-grid-item4 box_14">
                  <img class="box_15_img" src="${projectLists.project4.imageDesktop}" alt="">
                </div>
                
              </div>
              </section>
              <section class="main main-mobile">
              <h2>Projects</h2>

              <article class="sale-item">
              <img src="${projectLists.project1.image}" alt="" />
              <h3 class="project_name">${projectLists.project1.mobileName}</h3>

              <ul>${techHtml1} </ul>
              <button class="take_tour"  data-id="project1">
                <span class="btn_text"  data-id="project1">See this project </span>
                <img src="images/Union.png" data-id="project1" alt="" class="arrow" />
              </button>
              </article>

              <article class="sale-item">
              <img src="${projectLists.project2.image}" alt="" />
              <h3 class="project_name">${projectLists.project2.mobileName}</h3>

              <ul>${techHtml2}</ul>
              <button class="take_tour" data-id="project2">
                <span class="btn_text" data-id="project2">See this project </span>
                <img src="images/Union.png"  data-id="project2" alt="" class="arrow" />
              </button>
              </article>

              <article class="sale-item">
              <img src="${projectLists.project3.image}" alt="" />
              <h3 class="project_name">${projectLists.project3.mobileName}</h3>

              <ul>${techHtml3}</ul>
              <button class="take_tour" data-id="project3">
                <span class="btn_text" data-id="project3">See this project </span>
                <img src="images/Union.png" data-id="project3" alt="" class="arrow" />
              </button>
              </article>

              <article class="sale-item">
              <img src="${projectLists.project4.image}" alt="" />
              <h3 class="project_name">${projectLists.project4.mobileName}</h3>

              <ul>${techHtml4}</ul>
              <button class="take_tour" data-id="project4">
                <span class="btn_text" data-id="project4">See this project </span>
                <img src="images/Union.png" data-id="project4" alt="" class="arrow" />
              </button>
              </article>

              <article class="sale-item">
              <img src="${projectLists.project5.image}" alt="" />
              <h3 class="project_name">${projectLists.project5.mobileName}</h3>

              <ul>${techHtml5}</ul>
              <button class="take_tour" data-id="project5">
                <span class="btn_text" data-id="project5">See this project </span>
                <img src="images/Union.png" data-id="project5" alt="" class="arrow" />
              </button>
              </article>

              <article class="sale-item">
              <img src="${projectLists.project6.image}" alt="" />
              <h3 class="project_name">${projectLists.project6.mobileName}</h3>

              <ul>${techHtml6}</ul>
              <button class="take_tour" data-id="project6">
                <span class="btn_text" data-id="project6">See this project </span>
                <img src="images/Union.png" alt="" data-id="project6" class="arrow" />
              </button>
              </article>
              </section>`;
const projectContainer = document.querySelector('#portfolio');
projectContainer.innerHTML = projectSection;
const takeTour = document.getElementsByClassName('take_tour');
Array.from(takeTour).forEach((takeTour) => {
  takeTour.addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-id');
    const keys = Object.keys(projectLists);
    const project = projectLists[keys.find((key) => key === index)];

    const tech = project.technologies;
    let techHtml = '';

    techHtml = tech.map((item) => `<li>${item}</li>`).join('');

    const modalBody = ` <div class="modal-content">
      <div class="modal-header">
          <div class="title_div">
              <h2 class="modal_title" id="modal_title">${project.name}</h2>
              <ul class="modal_ul" id="modal_ul">
                ${techHtml}
              </ul>
          </div>
          <div id="close_model" class="close_icon"><span class="close">&times;</span></div>
      </div>
      <div class="modal-banner-img">
        <img src="${project.image}" alt="" class="modal_banner" id="modal_banner">
        <img src="images/Vector 4.png" alt="" class="left_handle">
        <img src="images/Vector 5.png" alt="" class="right_handle">
      </div>
      <div class="modal-slider-img">
        <img src="${project.image}" alt="" class="modal_slider_img">
        <img src="${project.image}" alt="" class="modal_slider_img">
        <img src="${project.image}" alt="" class="modal_slider_img">
        <img src="${project.image}" alt="" class="modal_slider_img">
        <img src="${project.image}" alt="" class="modal_slider_img">
      </div>
      <div class="modal_description">
        <p class="project_desc" id="project_desc">${project.description}</p>
       
      </div>
      <div class="btn_wrapper">
        <div class="btn_grid">
          <a href="${project.live_link}" class="see_live" id="see_live">
            <span class="live_text">See Live</span>
            <img src="images/ic_link.png" alt="" class="arrow_live" />
          </a>
          <a href="${project.source_link}" class="see_sources" id="see_sources">
            <span class="sources_text">See Resource</span>
            <img src="images/ic_github_black.png" alt="" class="arrow_source" />
          </a>
        </div>
      </div>
      <div class="modal_footer">
        <img src="images/Group 107.png" alt="" class="footer-left">
        <img src="images/Group 108.png" alt="" class="footer-right">
       
      </div>
        
    </div> `;
    modal.innerHTML = modalBody;

    modal.style.display = 'block';
    const closeModel = document.getElementById('close_model');
    if (closeModel) {
      closeModel.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  });
});

const form = document.getElementById('formFields');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const sendFeed = document.getElementById('send_feeed');
const errorMessage = document.getElementById('error');

function isValidEmail(email) {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let error = '';
  const contact = document.getElementById('contact');

  const errorBox = document.getElementById('error_div');
  if (nameInput.value.trim() === '') {
    error = 'Please enter your name';
    errorMessage.innerHTML = error;
    errorBox.style.display = 'block';
    contact.style.height = '44.5rem';
    sendFeed.style.top = '41rem';
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === '') {
    error = 'Please enter your email';
    errorMessage.innerHTML = error;
    errorBox.style.display = 'block';
    contact.style.height = '44.5rem';
    sendFeed.style.top = '41rem';
    emailInput.focus();
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    errorMessage.innerHTML = 'Your email should be in Lowercase';
    errorBox.style.display = 'block';
    contact.style.height = '44.5rem';
    sendFeed.style.top = '41rem';
    emailInput.focus();
    return;
  }

  if (messageInput.value.trim() === '') {
    error = 'Please enter your message';
    errorMessage.innerHTML = error;
    errorBox.style.display = 'block';
    contact.style.height = '44.5rem';
    sendFeed.style.top = '41rem';
    messageInput.focus();
    return;
  }

  errorMessage.innerHTML = '';
  contact.style.height = '43.5rem';
  sendFeed.style.top = '40rem';
  form.submit();
});

const formData = JSON.parse(localStorage.getItem('formData')) || {};

function updateFormData(event) {
  const input = event.target;
  const { name } = input;
  const { value } = input;
  formData[name] = value;
  localStorage.setItem('formData', JSON.stringify(formData));
}
form.addEventListener('input', updateFormData);

Object.keys(formData).forEach((field) => {
  const input = form.elements[field];
  if (input && input.type !== 'checkbox' && input.type !== 'radio') {
    input.value = formData[field];
  }
});


const navLinks = document.querySelectorAll('.link');

let objectClicked;

function scrollSection(section) {

  document.querySelector(`#section-3 .${objectClicked}`).classList.addClass('show');
  window.scroll({
    top: document.getElementById(section).offsetTop,
    behavior: 'smooth' 
  });
}

navLinks.forEach(function(element) {
  element.addEventListener('click', function(e) {
    e.preventDefault();
  
    objectClicked = this.classList[0];
    console.log(objectClicked);
    let target = this.dataset.link;
  
    scrollSection(target);
  });
});
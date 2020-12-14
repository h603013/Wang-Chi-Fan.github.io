const navLinks = document.querySelectorAll('.link');

let objectClicked;

function scrollSection(section) {
  console.log(`#section-3 .${objectClicked}`);
  document.querySelector(`#section-3 .${objectClicked}`).classList.add('show');
  
  window.scroll({
    top: document.getElementById(section).offsetTop,
    behavior: 'smooth' 
  });
}

navLinks.forEach(function(element) {
  element.addEventListener('click', function(e) {
    e.preventDefault();
  
    objectClicked = this.classList[0];
    let target = this.dataset.link;
  
    scrollSection(target);
  });
});
// Showing and hiding mobile navigation
let closeButton = document.querySelector('#close-img'),
    hamburgerButton = document.querySelector('#hamburger-icon'),
    mobileNav = document.querySelector('.mobile-nav'),
    mobileNavItems = document.querySelectorAll('.mobile-nav-link');

mobileNavItems.forEach(navItem => {
  navItem.addEventListener('click', function(e){
    mobileNav.classList.remove('mobile-nav-active');
  });
});

closeButton.addEventListener('click', function(e){
  mobileNav.classList.remove('mobile-nav-active');
});

hamburgerButton.addEventListener('click', function(e){
  mobileNav.classList.add('mobile-nav-active');
});

// Slider on home page
let sponsors = document.querySelectorAll(".sponsor"),
    nextBtn = document.getElementById("right-controller"),
    backBtn = document.getElementById("left-controller"),
    selectors = document.querySelectorAll(".sponsor-selector-item"),
    counter = 0;

function nextSponsor() {
  if(counter>=0 && counter < 4) {
    sponsors[counter].classList.remove("active-sponsor")
    selectors[counter].classList.remove("sponsor-selector-item-active")
    counter += 1;
    sponsors[counter].classList.add("active-sponsor")
    selectors[counter].classList.add("sponsor-selector-item-active")
  } else {
    sponsors[counter].classList.remove("active-sponsor")
    selectors[counter].classList.remove("sponsor-selector-item-active")
    counter = 0;
    sponsors[counter].classList.add("active-sponsor")
    selectors[counter].classList.add("sponsor-selector-item-active")
  }
};

function backSponsor() {
  if(counter>=1 && counter < 5) {
    sponsors[counter].classList.remove("active-sponsor")
    selectors[counter].classList.remove("sponsor-selector-item-active")
    counter -= 1;
    sponsors[counter].classList.add("active-sponsor")
    selectors[counter].classList.add("sponsor-selector-item-active")

  } else {
    sponsors[counter].classList.remove("active-sponsor")
    selectors[counter].classList.remove("sponsor-selector-item-active")
    counter = 4
    sponsors[counter].classList.add("active-sponsor")
    selectors[counter].classList.add("sponsor-selector-item-active")
  }
};

nextBtn.addEventListener("click",nextSponsor);
backBtn.addEventListener("click",backSponsor);

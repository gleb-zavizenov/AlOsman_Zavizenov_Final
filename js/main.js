

//console.log("JS works!")
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

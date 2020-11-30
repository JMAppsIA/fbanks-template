const enter = document.querySelectorAll(".enter");
const enterBottom = document.querySelectorAll(".enter-bottom");
const imagePiece = document.querySelectorAll(".image-piece");
const image5Report = document.querySelectorAll(".image-5-report");

// const arrowDropDownFooter = document.querySelector("body > footer > div > div.flxb-footer-meta > div.footer-meta-block2 > div > div > a > i");
let dropDownTarget = document.querySelector("body > footer > div > div.flxb-footer-meta > div.footer-meta-block2 > div > div");
let closeDropDown = document.querySelector("body > footer > div > div.flxb-footer-meta > div.footer-meta-block2 > div > div > div > div > span");
let dropdownShown = false;
document.addEventListener("DOMContentLoaded", function(e) { 
  setTimeout(function() { 
    for (var x = 0; x < enter.length; x++) {

      enter[x].style.transform = 'none';
      enter[x].style.opacity = '1';
      
      
    }

    for (var x = 0; x < enterBottom.length; x++) {
      enterBottom[x].style.transform = 'none';
    }

    for(var x = 0; x < imagePiece.length; x++) {
      imagePiece[x].style.opacity = '1';
      imagePiece[x].style.transform='none';
    }

    for(var x = 0; x < imagePiece.length; x++) {
      image5Report[x].style.opacity = '1';
    }
  
  },300);
});

dropDownTarget.addEventListener("click", function(e){
  e.preventDefault();
  if(!dropdownShown) {
    dropDownTarget.classList.add('flxb-dropdown--is-open');
    dropdownShown = true;    
  } else {    
    dropDownTarget.classList.remove('flxb-dropdown--is-open');
    dropdownShown = false;
    
  }
});

closeDropDown.addEventListener("click", function(){ 
  dropDownTarget.classList.remove('flxb-dropdown--is-open');
});

// TESTIMONIALS

const slides=document.querySelector(".testimonials-slider").children;
const indicatorImages=document.querySelector(".testimonials-slider-indicator").children;

 for(let i=0; i<indicatorImages.length; i++){
   indicatorImages[i].addEventListener("click",function(){
      
        for(let j=0; j<indicatorImages.length; j++){
          indicatorImages[j].classList.remove("active");
        }
         this.classList.add("active");
         const id=this.getAttribute("data-id");
        for(let j=0; j<slides.length; j++){
          slides[j].classList.remove("active");
        }

         slides[id].classList.add("active");

   })
 }
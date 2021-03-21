var slides1 = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide1 = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides1.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides1[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides1[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides1.length == i) {
        i = 0;
      }
      if (i >= slides1.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

// const track = document.querySelector(".carousel_track");
// const slides = Array.from(track.children);
// const nextButton = document.querySelector(".carousel_button--right");
// const prevButton = document.querySelector(".carousel_button--left");
// const dotsNav = document.querySelector(".carousel_nav");
// const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;

// /* long wait to write
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px'; */

// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + "px";
// };
// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//   track.style.transform = "translateX(-" + targetSlide.style.left + ")";
//   currentSlide.classList.remove("current-slide");
//   targetSlide.classList.add("current-slide");
// };
// const updateDots = (currentDot, targetDot) => {
//   currentDot.classList.remove("current-slide");
//   targetDot.classList.add("current-slide");
// };

// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//   if (targetIndex === 0) {
//     prevButton.classList.add("is-hidden");
//     nextButton.classList.remove("is-hidden");
//   } else if (targetIndex === slides.length - 1) {
//     prevButton.classList.remove("is-hidden");
//     nextButton.classList.add("is-hidden");
//   } else {
//     prevButton.classList.remove("is-hidden");
//     nextButton.classList.remove("is-hidden");
//   }
// };

// prevButton.addEventListener("click", (e) => {
//   const currentSlide = track.querySelector(".current-slide");
//   const prevSlide = currentSlide.previousElementSibling;
//   const currentDot = dotsNav.querySelector(".current-slide");
//   const prevDot = currentDot.previousElementSibling;
//   const prevIndex = slides.findIndex((slide) => slide === prevSlide);

//   moveToSlide(track, currentSlide, prevSlide);
//   updateDots(currentDot, prevDot);
//   hideShowArrows(slides, prevButton, nextButton, prevIndex);
// });

// nextButton.addEventListener("click", (e) => {
//   const currentSlide = track.querySelector(".current-slide");
//   const nextSlide = currentSlide.nextElementSibling;
//   const currentDot = dotsNav.querySelector(".current-slide");
//   const nextDot = currentDot.nextElementSibling;
//   const nextIndex = slides.findIndex((slide) => slide === nextSlide);

//   moveToSlide(track, currentSlide, nextSlide);
//   updateDots(currentDot, nextDot);
//   hideShowArrows(slides, prevButton, nextButton, nextIndex);
// });

// dotsNav.addEventListener("click", (e) => {
//   const targetDot = e.target.closest("button");

//   if (!targetDot) return;

//   const currentSlide = track.querySelector(".current-slide");
//   const currentDot = dotsNav.querySelector(".current-slide");
//   const targetIndex = dots.findIndex((dot) => dot === targetDot);
//   const targetSlide = slides[targetIndex];

//   moveToSlide(track, currentSlide, targetSlide);
//   updateDots(currentDot, targetDot);
//   hideShowArrows(slides, prevButton, nextButton, targetIndex);
// });

const prevButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next");
const slideNav = document.getElementById("carousel-slide-nav");
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;
let slidePos = 0;
let navigation = slideNav.childNodes;

slideNavigation();

function displaySlide(element, className) {
  for (let item = 0; item < totalSlides; item++) {
    item === slidePos
      ? element[item].classList.add(className)
      : element[item].classList.remove(className);
  }
}

function nextSlide() {
  if (slidePos === totalSlides - 1) {
    slidePos = 0;
  } else {
    slidePos++;
  }
  displaySlide(slides, "carousel-item-visible");
  displaySlide(navigation, "nav-current");
}

function prevSlide() {
  if (slidePos === 0) {
    slidePos = totalSlides - 1;
  } else {
    slidePos--;
  }
  displaySlide(slides, "carousel-item-visible");
  displaySlide(navigation, "nav-current");
}

function slideNavigation() {
  for (let slide = 0; slide < totalSlides; slide++) {
    let span = document.createElement("span");
    if (slide === slidePos) {
      span.classList.add("nav-current");
    }
    slideNav.append(span);
    span.addEventListener("click", function () {
      slidePos = slide;
      displaySlide(slides, "carousel-item-visible");
      displaySlide(navigation, "nav-current");
    });
  }
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

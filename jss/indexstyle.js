
// filter section

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-buttons button");
    const items = document.querySelectorAll(".items .col-lg-4");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            // Show/hide items based on filter
            items.forEach(item => {
                if (filter === "all") {
                    item.style.display = "block";
                } else if (item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});




// typing code
const text = "Delux Foods at Your Service";
const typingContainer = document.getElementById("typing-container");
const totalDuration = 7 * 1000; // 10 seconds for a full cycle
const typingSpeed = totalDuration / (text.length * 2); // Same time for typing and deleting
let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting && index <= text.length) {
    // Typing the text
    typingContainer.innerHTML = text.substring(0, index);
    index++;
  } else if (isDeleting && index >= 0) {
    // Deleting the text
    typingContainer.innerHTML = text.substring(0, index);
    index--;
  }

  // Toggle typing and deleting states
  if (index === text.length) {
    isDeleting = true;
  } else if (index === 0) {
    isDeleting = false;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();


// slide show

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideshow = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
  slideshow.style.transform = `translateX(${-slideIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active-dot"));
  dots[slideIndex].classList.add("active-dot");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

setInterval(nextSlide, 3000);
showSlides();




// numbers counting
function animateCount(elementId, target, duration) {
  let start = 0;
  let startTime = null;

  function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let count = Math.min(start + (progress / duration) * target, target);
      document.getElementById(elementId).innerText = Math.floor(count);

      if (count < target) {
          requestAnimationFrame(updateCounter);
      }
  }

  requestAnimationFrame(updateCounter);
}

// Start all counters at the same time
animateCount("counter1", 750, 9000);  // 0 to 5500 in 5 seconds
animateCount("counter2", 120, 12000);  // 0 to 7200 in 7 seconds
animateCount("counter3", 990, 9000);   // 0 to 5900 in 6.5 seconds
animateCount("counter4", 1000, 10000); // 0 to 10000 in 10 seconds


  // Show the button when scrolling down
  window.onscroll = () => {
    document.getElementById("scrollToTopBtn").style.display = 
        (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
};

// Scroll to top when button is clicked
document.getElementById("scrollToTopBtn").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


// preloader
 // Preloader function (5 seconds delay)
 setTimeout(() => {
  document.getElementById("preloader").style.opacity = "0"; // Fade out
  setTimeout(() => {
      document.getElementById("preloader").style.display = "none"; // Hide preloader
      document.getElementById("content").style.display = "block"; // Show content
  }, 500); // Match fade-out transition time
}, 500); //  seconds delay


function toggleMenu() {
  var navf = document.getElementById("navf");
  if (navf.style.display === "flex") {
      navf.style.display = "none";
  } else {
      navf.style.display = "flex";
  }
}
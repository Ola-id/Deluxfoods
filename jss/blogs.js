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
}, 500); // 2 seconds delay

function toggleMenu() {
  var navf = document.getElementById("navf");
  if (navf.style.display === "flex") {
      navf.style.display = "none";
  } else {
      navf.style.display = "flex";
  }
}
// Typewriter Effect
document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with the class "typewriter-text"
  var typingTextElements = document.querySelectorAll(".typewriter-text");

  // Set the typing speed in milliseconds (lower value means faster typing)
  var typingSpeed = 45; // Adjust this value to make it faster

  // Function to simulate the typing effect
  function typeWriter(element) {
    var text = element.innerText; // Get the text from the element
    element.innerHTML = ""; // Clear the existing text

    var i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, typingSpeed);
      }
    }
    type();
  }

  // Apply the typewriter effect to each element with class "typewriter-text"
  typingTextElements.forEach(function(element) {
    typeWriter(element);
  });
});


// Mobile Menu

function toggleMobileMenu() {
  var mobileMenuContainer = document.getElementById("mobileMenuContainer");
  
  if (mobileMenuContainer.style.display === "block") {
    // If the mobile menu is currently visible, hide it
    mobileMenuContainer.style.animation = "slideOut 0.5s ease-out";
    setTimeout(function() {
      mobileMenuContainer.style.display = "none";
      mobileMenuContainer.style.animation = ""; // Clear animation property
    }, 500); // Wait for the animation to complete (500 milliseconds)
  } else {
    // If the mobile menu is currently hidden, show it
    mobileMenuContainer.style.display = "block";
    mobileMenuContainer.style.animation = "slideIn 0.5s ease-in";
  }
}

// JavaScript code to handle scroll-triggered animations
document.addEventListener('DOMContentLoaded', function () {
  const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`Element is in view: ${entry.target.className}`);
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  animateOnScrollElements.forEach((element) => {
    observer.observe(element);
  });
});

  // Email form submission
  function handleFormSubmission() {
    alert('Submission successful!'); // You can customize this alert message
    // Add additional actions or modifications to your page as needed
  }


// JavaScript code for image slideshow
let globalSlideIndex = 0;

(function () {
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    globalSlideIndex++;

    if (globalSlideIndex > slides.length) {
      globalSlideIndex = 1;
    }

    slides[globalSlideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change 2000 to the desired interval in milliseconds
  }

  document.addEventListener("DOMContentLoaded", function () {
    showSlides();
  });
})();



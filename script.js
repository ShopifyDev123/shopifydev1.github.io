// Typewriter Effect
document.addEventListener("DOMContentLoaded", function() {
  // Get the first element with the class "content"
  var firstContentSection = document.querySelector(".content");

  if (firstContentSection) {
    // Get the element that contains the typing text within the first section
    var typingTextElement = firstContentSection.querySelector("#typing-text");

    // Set the typing speed in milliseconds (lower value means faster typing)
    var typingSpeed = 45; // Adjust this value to make it faster

    // Function to simulate typing effect
    function typeWriter() {
      var text = typingTextElement.innerText; // Get the text from the element
      typingTextElement.innerHTML = ""; // Clear the existing text

      var i = 0;
      function type() {
        if (i < text.length) {
          typingTextElement.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, typingSpeed);
        }
      }
      type();
    }

    // Call the typeWriter function
    typeWriter();
  }
});


  // Image Carousel
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-slide').length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-slide').length) % document.querySelectorAll('.carousel-slide').length;
  updateCarousel();
}

function updateCarousel() {
  const container = document.querySelector('.carousel-container');
  const slideWidth = document.querySelector('.carousel-slide').offsetWidth;
  container.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

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

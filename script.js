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

// Slide

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}
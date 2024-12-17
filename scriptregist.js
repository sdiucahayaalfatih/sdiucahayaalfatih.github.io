// DOM Elements
const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator-step"),
  prevButton = document.getElementById("prevew-pendaftaran"),
  nextButton = document.getElementById("next-pendaftaran"),
  stepForms = document.querySelectorAll(".step-form");

let currentStep = 1;

// Function to show/hide forms based on current step
const updateFormVisibility = () => {
  stepForms.forEach((form) => {
    if (parseInt(form.dataset.step) === currentStep) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });
};

// Function that updates the current step and updates the DOM
const updateSteps = (e) => {
  // Update current step based on the button clicked
  currentStep = e.target.id === "next-pendaftaran" ? ++currentStep : --currentStep;

  // Loop through all circles and add/remove "active" class based on their index and current step
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active-c");
  });

  // Update progress bar width based on current step
  progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

  // Show/hide form sections based on current step
  updateFormVisibility();

  // Check if current step is last step or first step and disable corresponding buttons
  if (currentStep === circles.length) {
    nextButton.disabled = true;
  } else if (currentStep === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }

  // Scroll to top of the form after changing step
  window.scrollTo({
    top: 0, // Scroll to the top
    behavior: "smooth" // Smooth scroll effect
  });
};

// Initial form visibility
updateFormVisibility();

// Add click event listeners to specific buttons
prevButton.addEventListener("click", updateSteps);
nextButton.addEventListener("click", updateSteps);

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');
  const circleButtonsContainer = document.querySelector('.circle-buttons');

  let currentSlide = 0;

  // Function to show slide by index
  function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slider.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;

    // Update circle buttons
    updateCircleButtons();
  }

  // Function to update circle buttons
  function updateCircleButtons() {
    const circleButtons = document.querySelectorAll('.circle-button');
    circleButtons.forEach((button, index) => {
      if (index === currentSlide) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  // Initialize circle buttons
  slides.forEach((_, index) => {
    const button = document.createElement('button');
    button.classList.add('circle-button');
    if (index === 0) button.classList.add('active');
    circleButtonsContainer.appendChild(button);
    button.addEventListener('click', () => showSlide(index));
  });

  // Event listeners for left and right buttons
  leftButton.addEventListener('click', () => showSlide(currentSlide - 1));
  rightButton.addEventListener('click', () => showSlide(currentSlide + 1));

  // Automatic slide change
  setInterval(() => showSlide(currentSlide + 1), 3000);
});

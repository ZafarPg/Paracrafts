// const thumbnails = document.querySelectorAll('.thumbnail');
// const fullscreenOverlay = document.getElementById('fullscreenOverlay');
// const fullscreenImage = document.getElementById('fullscreenImage');
// const closeBtn = document.getElementById('closeBtn');

// thumbnails.forEach(thumbnail => {
//     thumbnail.addEventListener('click', function() {
//         fullscreenImage.src = this.src;
//         fullscreenOverlay.style.display = 'flex';
//     });
// });

// closeBtn.addEventListener('click', function() {
//     fullscreenOverlay.style.display = 'none';
// });

// fullscreenOverlay.addEventListener('click', function(event) {
//     if (event.target === fullscreenOverlay || event.target === closeBtn) {
//         fullscreenOverlay.style.display = 'none';
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   window.closeFullscreen = function () {
//     const fullscreenOverlay = document.getElementById('fullscreenOverlay');
//     fullscreenOverlay.style.display = 'none';
//   }
// });




function openFullscreen(src) {
  const overlay = document.getElementById('fullscreenOverlay');
  const image = document.getElementById('fullscreenImage');
  image.src = src;
  overlay.style.display = 'flex';
  
  // Trigger animation
  requestAnimationFrame(() => {
    overlay.classList.add('active');
  });
}

function closeFullscreen() {
  const overlay = document.getElementById('fullscreenOverlay');
  overlay.classList.remove('active');

  // Wait for animation to finish before hiding
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300); // Match the CSS transition time
}


const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function () {
    openFullscreen(this.src);
  });
});

function handleOverlayClick(event) {
  // Only close if the click was directly on the overlay background
  if (event.target.id === 'fullscreenOverlay') {
    closeFullscreen();
  }
}

document.getElementById('fullscreenImage').addEventListener('click', function (e) {
  e.stopPropagation(); // Prevent image clicks from closing overlay
});

// Add intersection observer for animation triggers
const createAnimationObserver = (observerId) => {
  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated');
        observerId.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
};

// Create observers for different sections
const observer1 = createAnimationObserver('observer1');
const observer2 = createAnimationObserver('observer2');
const observer3 = createAnimationObserver('observer3');
const observer4 = createAnimationObserver('observer4');

// Initialize observers
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate__animated').forEach((element) => {
    observer1.observe(element);
    observer2.observe(element);
    observer3.observe(element);
    observer4.observe(element);
  });
}); 
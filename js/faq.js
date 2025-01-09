document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('svg');
    const allContents = document.querySelectorAll('.faq-content');
    const allArrows = document.querySelectorAll('.faq-toggle svg');
    
    // Close all other FAQs
    allContents.forEach(otherContent => {
      if (otherContent !== content) {
        otherContent.style.maxHeight = '0';
        otherContent.classList.add('hidden');
        setTimeout(() => {
          if (otherContent.classList.contains('hidden')) {
            otherContent.style.maxHeight = null;
          }
        }, 300);
      }
    });
    
    // Reset all arrows
    allArrows.forEach(otherArrow => {
      if (otherArrow !== arrow) {
        otherArrow.style.transform = 'rotate(0deg)';
      }
    });
    
    // Toggle current FAQ
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      content.style.maxHeight = content.scrollHeight + 'px';
      arrow.style.transform = 'rotate(180deg)';
    } else {
      content.style.maxHeight = '0';
      arrow.style.transform = 'rotate(0deg)';
      setTimeout(() => {
        content.classList.add('hidden');
      }, 300);
    }
  });
});

// Update maxHeight on window resize
window.addEventListener('resize', () => {
  document.querySelectorAll('.faq-content:not(.hidden)').forEach(content => {
    content.style.maxHeight = content.scrollHeight + 'px';
  });
}); 
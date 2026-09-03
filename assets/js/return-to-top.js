document.addEventListener('DOMContentLoaded', function() {
    // Create the return-to-top button
    const returnButton = document.createElement('button');
    returnButton.className = 'return-to-top';
    returnButton.setAttribute('aria-label', 'Return to top');
    returnButton.setAttribute('title', 'Return to top');
    
    document.body.appendChild(returnButton);
    
    // Show/hide the button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) { // Show button after scrolling down 300px
        returnButton.classList.add('visible');
      } else {
        returnButton.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    returnButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // For smooth scrolling
      });
    });
});
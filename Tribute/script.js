function showScrollButton() {
    var scrollButton = document.getElementById('scroll-button');
    scrollButton.style.display = 'block';
  }
  
  function scrollToAbout() {
    var About = document.querySelector('.About');
    About.scrollIntoView({ behavior: 'smooth' });
  }
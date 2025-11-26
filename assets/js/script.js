function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    smoothScroll(this.getAttribute('href'));
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('success-toast');
  
  if (window.location.search.includes('success=true')) {
      
      if (toast) {
          toast.classList.add('show');
          
          setTimeout(() => {
              toast.classList.remove('show');
          }, 5000);
          

          history.replaceState(null, null, window.location.pathname);
      }
  }
});
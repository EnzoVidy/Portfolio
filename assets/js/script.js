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
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('success-toast');

  if (form) {
    form.addEventListener('submit', async function(event) {
      event.preventDefault(); 

      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          form.reset();
          if (toast) {
            toast.classList.add('show');
            setTimeout(() => {
              toast.classList.remove('show');
            }, 5000);
          }
        } else {
          alert("Oups ! Il y a eu un problème lors de l'envoi du formulaire.");
        }
      } catch (error) {
        alert("Erreur de connexion. Veuillez réessayer.");
      }
    });
  }
});
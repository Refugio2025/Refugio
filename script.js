document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Back to top button functionality
const backToTopButton = document.createElement('div');
backToTopButton.id = 'back-to-top';
backToTopButton.textContent = '↑';
document.body.appendChild(backToTopButton);

// Mostrar el botón de "Volver arriba" al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Carousel functionality
const carousel = document.querySelector('.carousel');
let index = 0;

setInterval(() => {
    index = (index + 1) % carousel.children.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

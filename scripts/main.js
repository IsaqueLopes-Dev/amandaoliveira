const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const revealItems = document.querySelectorAll('.reveal');
const testimonials = document.querySelector('.testimonials');
const testimonialPrev = document.querySelector('.testimonial-prev');
const testimonialNext = document.querySelector('.testimonial-next');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (testimonials && testimonialPrev && testimonialNext) {
  const scrollTestimonials = (direction) => {
    testimonials.scrollBy({
      left: direction * testimonials.clientWidth * 0.78,
      behavior: 'smooth',
    });
  };

  testimonialPrev.addEventListener('click', () => scrollTestimonials(-1));
  testimonialNext.addEventListener('click', () => scrollTestimonials(1));
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealItems.forEach((item) => observer.observe(item));

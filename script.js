// Add this to your script.js
document.addEventListener('DOMContentLoaded', function() {
    // Existing menu item code
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        item.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });

    // New project hover effect
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.querySelector('.left').style.color = 'white';
            this.querySelector('.right').style.color = 'white';
            this.querySelector('.line').style.background = 'white';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.querySelector('.left').style.color = '';
            this.querySelector('.right').style.color = '#bbb';
            this.querySelector('.line').style.background = '#333';
        });
    });
});

/* === Scroll-reveal for #p2box elements === */
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");   // fade/slide in
        } else {
          entry.target.classList.remove("show");// fade/slide out (optional)
        }
      });
    },
    { threshold: 0.2 }  // 20 % of element visible triggers it
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});

              /**page5 starting */

/* === reveal each .service card when it enters view === */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service");

  const showOnScroll = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.3 }                // 30 % visible ⇒ show
  );

  cards.forEach(card => showOnScroll.observe(card));
});

            /**page6 starting */

const section  = document.querySelector('.horizontal-scroll-section');
const gallery  = document.querySelector('.image-gallery');

// Make the section tall enough to allow scrolling
const extraScroll = gallery.scrollWidth - innerWidth;
section.style.height = innerHeight + extraScroll + 'px';

addEventListener('scroll', () => {
  const top = section.getBoundingClientRect().top;
  const progress = Math.min(Math.max(-top / extraScroll, 0), 1);
  gallery.style.transform = `translateX(${-progress * extraScroll}px)`;
});
              
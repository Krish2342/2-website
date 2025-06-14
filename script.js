document.addEventListener('DOMContentLoaded', function () {
    // ... (existing code for calendarModal, bookCallText, closeButton, fullCalendarDiv) ...
    const calendarModal = document.getElementById('calendarModal');
    const bookCallText = document.getElementById('bookCallText');
    const closeButton = document.querySelector('.close-button');
    const fullCalendarDiv = document.getElementById('fullCalendar');

    const bookCallButton = document.getElementById('bookCallButton'); // New: Get the #button1 element

    let calendar; // Declare calendar variable outside to make it accessible

    // Initialize FullCalendar (existing function)
    function initializeCalendar() {
        if (!calendar) {
            calendar = new FullCalendar.Calendar(fullCalendarDiv, {
                initialView: 'dayGridMonth',
                initialDate: '2025-06-12', // Set initial date to current date for real-time
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                events: [
                    { title: 'Meeting', start: '2025-06-15' },
                    { title: 'Call', start: '2025-06-18T10:30:00' }
                ],
                dateClick: function(info) {
                    alert('Date clicked: ' + info.dateStr);
                    // Here you would typically open a form to book the slot
                }
            });
        }
        calendar.render(); // Render the calendar
    }

    // When the user clicks on the "Let's Collaborate" text (existing listener)
    if (bookCallText) {
        bookCallText.addEventListener('click', function() {
            calendarModal.style.display = 'flex'; // Use flex to center the modal content
            initializeCalendar(); // Initialize and render calendar when modal opens
        });
    }

    // New: When the user clicks on the "Book a call" button, open the modal
    if (bookCallButton) {
        bookCallButton.addEventListener('click', function() {
            calendarModal.style.display = 'flex'; // Use flex to center the modal content
            initializeCalendar(); // Initialize and render calendar when modal opens
        });
    }

    // When the user clicks on <span> (x), close the modal (existing listener)
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            calendarModal.style.display = 'none';
        });
    }

    // When the user clicks anywhere outside of the modal content, close it (existing listener)
    window.addEventListener('click', function(event) {
        if (event.target == calendarModal) {
            calendarModal.style.display = 'none';
        }
    });

    // --- New: Social Dropdown Logic ---
    const socialDropdownToggle = document.getElementById('socialDropdownToggle');
    const socialDropdown = document.getElementById('socialDropdown');

    if (socialDropdownToggle) {
        socialDropdownToggle.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from immediately bubbling up to the window listener
            socialDropdown.style.display = socialDropdown.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (socialDropdown && event.target !== socialDropdown && !socialDropdown.contains(event.target) && event.target !== socialDropdownToggle) {
            socialDropdown.style.display = 'none';
        }
    });

    // ... (rest of your existing script.js code) ...

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
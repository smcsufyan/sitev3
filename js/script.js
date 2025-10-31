document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links (e.g., Contact Us button)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) { // Check if it's not just "#"
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Play muted background music on user interaction
    /*
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        document.body.addEventListener('click', () => {
            if (bgMusic.muted) {
                bgMusic.muted = false;
                bgMusic.play().catch(e => console.error("Autoplay prevented:", e));
                bgMusic.muted = true; // Still keep it muted by default, play is just to handle the user gesture
            }
        }, { once: true });
    }
    */
    
    // Future expansion: Parallax Effect for Hero Section
    window.addEventListener('scroll', () => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            let scrollY = window.scrollY;
            heroContent.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
    });

    // Future expansion: Form Submission Handling (Placeholder)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real site, you would use fetch API here to send data to a server
            console.log("Form Submitted! (This is a placeholder)");
            alert("Thank you for contacting Sarigama Music Corner! We will get back to you soon.");
            this.reset();
        });
    }

});
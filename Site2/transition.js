document.addEventListener("DOMContentLoaded", function() {
    const splash = document.getElementById("splash-screen");
    if (splash) {
        // Fade out on load
        setTimeout(() => {
            splash.classList.add("splash-hidden");
        }, 300); // give it a short delay to ensure rendering
    }

    // Intercept clicks on internal links to show splash before navigating
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = link.getAttribute('href');
            // If it's an internal html link (not # or external)
            if (target && target.endsWith('.html') && !link.hasAttribute('target')) {
                e.preventDefault();
                splash.classList.remove("splash-hidden");
                splash.classList.add("splash-visible");
                
                // Wait for animation to cover screen before navigating
                setTimeout(() => {
                    window.location.href = target;
                }, 400); // Matches the CSS transition duration
            }
        });
    });
});

// For back/forward cache restore
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        const splash = document.getElementById("splash-screen");
        if (splash) splash.classList.add("splash-hidden");
    }
});

// Smart Header Logic
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.querySelector('.u-header');

    if (header) {
        header.style.transition = 'transform 0.3s ease-in-out';
        
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                // Scroll down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scroll up
                header.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop;
        });
    }
});

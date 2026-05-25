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

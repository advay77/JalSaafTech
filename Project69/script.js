document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const imageContainer = document.querySelector('.image-container');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add overlap styles
                    box.style.transform = 'translateX(-50%) translateY(0)';
                    box.style.opacity = '1';
                } else {
                    // Remove overlap styles
                    box.style.transform = 'translateX(-50%) translateY(20px)';
                    box.style.opacity = '0.5';
                }
            });
        },
        {
            root: null, // Use viewport
            threshold: 0.5, // Trigger when 50% of the box is visible
        }
    );

    observer.observe(imageContainer);
});

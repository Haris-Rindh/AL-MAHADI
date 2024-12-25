document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const toggleMenu = document.querySelector('.toggle-menu');
    const navLinks = document.querySelector('.nav-links');

    toggleMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Intersection Observer for Animations
    const animatedElements = document.querySelectorAll('.animated');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Start animation
            } else {
                entry.target.classList.remove('active'); // Remove animation if needed
            }
        });
    }, {
        threshold: 0.2, // 20% of the element must be visible
    });

    animatedElements.forEach((element) => observer.observe(element));

    // Scrollspy for Active Navigation Links
    const sections = document.querySelectorAll('section');
    const navLinksArray = document.querySelectorAll('.nav-links a');

    const highlightNav = () => {
        const scrollPosition = window.scrollY + 100; // Adjust offset to highlight correctly

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach((link) => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav);

    // Read More and Collapse Functionality for Blogs (Mobile-Friendly Adjustments)
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    const collapseButtons = document.querySelectorAll(".collapse-btn");
    const allBlogDetails = document.querySelectorAll(".blog-details");

    // Function to close all blogs
    const closeAllBlogs = () => {
        allBlogDetails.forEach(blog => blog.style.display = "none");
        readMoreButtons.forEach(button => button.style.display = "inline-block");
    };

    // Show blog details
    readMoreButtons.forEach(button => {
        button.addEventListener("click", () => {
            closeAllBlogs(); // Close others before opening the selected one
            const target = document.querySelector(button.dataset.target);
            if (target) {
                target.style.display = "block"; // Show the full blog
                button.style.display = "none"; // Hide "Read More" button
            }
        });
    });

    // Collapse blog details
    collapseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const target = document.querySelector(button.dataset.target);
            if (target) {
                target.style.display = "none"; // Hide the full blog
                const readMoreButton = document.querySelector(`.read-more-btn[data-target="${button.dataset.target}"]`);
                if (readMoreButton) readMoreButton.style.display = "inline-block"; // Show "Read More" button
            }
        });
    });

    // Additional Touch Support for Mobile
    document.body.addEventListener('touchstart', () => {
        // This ensures touch responsiveness on all devices
    });
});

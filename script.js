document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded!');

    // Function to highlight navigation link based on the current page
    const currentPath = window.location.pathname;  // Gets the current URL path
    const navLinks = document.querySelectorAll('nav a');  // Select all navigation links

    navLinks.forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add('active');  // Add 'active' class if the link corresponds to the current page
        } else {
            link.classList.remove('active');  // Remove 'active' class otherwise
        }
    });
});

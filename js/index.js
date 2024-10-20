        // Wait for the DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function () {
            // Get all nav links
            const navLinks = document.querySelectorAll('.nav-link');
            
            // Add click event listeners to each nav link
            navLinks.forEach(link => {
              link.addEventListener('click', function () {
                // Remove 'active' class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add 'active' class to the clicked link
                this.classList.add('active');
              });
            });
          });
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
    
    // Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(filterBtn => {
                filterBtn.classList.remove('active');
            });
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Project Detail Popup
    const portfolioDetailLinks = document.querySelectorAll('.portfolio-info .btn-small');
    const projectDetail = document.getElementById('project-detail');
    const projectContent = document.querySelector('.project-content');
    const closeProject = document.querySelector('.close-project');
    
    // Project content loading handler - simulate AJAX call
    portfolioDetailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const projectUrl = this.getAttribute('href');
            
            // In a real project, you'd fetch the content via AJAX
            // For now, we'll just simulate with sample content
            const projectHTML = `
                <h2>Shipment Consolidation Analytics for a Leading Med Tech Company</h2>
                <div class="project-media">
                    <video width="100%" controls>
                        <source src="js/ProjectFiles/P1/P1_GIF.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="project-description">
                    <h3>Project Overview</h3>
                    <p>This is a detailed description of the supply chain dashboard project. In a real implementation, this content would be loaded dynamically based on which project was clicked.</p>
                    
                    <h3>Challenge</h3>
                    <p>Describe the business challenge this project addressed.</p>
                    
                    <h3>Solution</h3>
                    <p>Explain how you approached the problem and what solutions you implemented.</p>
                    
                    <h3>Results</h3>
                    <p>Share the impact and outcomes of your project, including metrics and improvements.</p>
                    
                    <h3>Technologies Used</h3>
                    <ul>
                        <li>Power BI</li>
                        <li>SQL</li>
                        <li>Excel</li>
                        <li>Python</li>
                    </ul>
                </div>
            `;
            
            projectContent.innerHTML = projectHTML;
            projectDetail.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close project detail popup
    closeProject.addEventListener('click', () => {
        projectDetail.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === projectDetail) {
            projectDetail.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Contact Form Handler (would need backend integration)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you'd send form data to a server
            // For now, just simulate success
            alert('Thanks for your message! This is a demo form - in a real website, your message would be sent.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Navbar scroll behavior
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(44, 62, 80, 0.95)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.background = 'var(--primary-color)';
            navbar.style.padding = '15px 0';
        }
    });
});


// Video background optimization
document.addEventListener('DOMContentLoaded', function() {
    const videoElements = document.querySelectorAll('.animation-box video');
    
    // Check if the browser supports the Intersection Observer API
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Play video when it comes into view
                    entry.target.play();
                } else {
                    // Pause video when it's not in view
                    entry.target.pause();
                }
            });
        }, { threshold: 0.2 });
        
        // Observe all video elements
        videoElements.forEach(video => {
            videoObserver.observe(video);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        videoElements.forEach(video => {
            video.play();
        });
    }
});

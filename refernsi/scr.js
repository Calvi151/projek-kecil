// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '1rem 5%';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '1.5rem 5%';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Product Card Animation on Scroll
const animateOnScroll = () => {
    const productCards = document.querySelectorAll('.product-card');
    const windowHeight = window.innerHeight;
    
    productCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const animationPoint = windowHeight - 100;
        
        if (cardPosition < animationPoint) {
            card.classList.add('active');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Hero Image Animation
const heroImage = document.getElementById('hero-shoe');

window.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        // Create notification
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#111';
        notification.style.color = '#fff';
        notification.style.padding = '15px 25px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
        notification.style.zIndex = '1000';
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        notification.style.transition = 'all 0.3s ease';
        notification.innerHTML = `
            <p>Added <strong>${productName}</strong> (${productPrice}) to cart</p>
        `;
        
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 10);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateY(100px)';
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input');
    const email = emailInput.value;
    
    // Simple validation
    if (email.includes('@') && email.includes('.')) {
        alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
})
// Navigation toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Quiz functionality
    const startQuizBtn = document.querySelector('.btn-quiz-start');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', function(e) {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            if (!isLoggedIn && !window.location.href.includes('login.html')) {
                e.preventDefault();
                if (confirm('Please create an account to track your progress. Continue to login?')) {
                    window.location.href = 'login.html';
                }
            }
        });
    }
    
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (email && password) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                alert('Login successful! Redirecting to dashboard...');
                window.location.href = 'dashboard.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }
    
    // Check login status
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail && document.querySelector('.user-info')) {
        document.querySelector('.user-info').textContent = `Welcome, ${userEmail}`;
    }
    
    // Progress bar animation
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const width = progressFill.style.width;
        progressFill.style.width = '0%';
        setTimeout(() => {
            progressFill.style.width = width;
        }, 500);
    }
});

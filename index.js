// AI Portfolio Interactive Features
// ====================================

// 1. Button Click Handlers
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤖 AI Portfolio Loaded');

    const exploreBtn = document.querySelector('.btn-primary');
    const learnMoreBtn = document.querySelector('.btn-secondary');

    // Explore Projects Button
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            showNotification('Projects coming soon! 🚀');
            console.log('Explore Projects clicked');
        });
    }

    // Learn More Button
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            scrollToSection('features');
            console.log('Learn More clicked');
        });
    }

    // Add hover effects to feature cards
    addFeatureCardEffects();
});

// 2. Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 3. Smooth Scroll Function
function scrollToSection(sectionId) {
    const element = document.querySelector(`.${sectionId}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// 4. Feature Card Effects
function addFeatureCardEffects() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });

        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            showNotification(`${title} selected! ✨`);
            console.log(`Card clicked: ${title}`);
        });
    });
}

// 5. Add CSS Animations Dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(30px);
        }
    }

    .feature-card {
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
`;
document.head.appendChild(style);

// 6. Dark Mode Toggle (Optional Feature)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// 7. Console Welcome Message
console.log('%c🤖 Welcome to AI Portfolio!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cThis is an AI-powered project portfolio.', 'font-size: 14px; color: #764ba2;');
console.log('%cCheck out the features and projects!', 'font-size: 14px; color: #667eea;');

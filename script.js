// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });

    // Add special animation for features section on scroll
    const featuresSection = document.querySelector('.features');
    if (featuresSection) {
        const featuresObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

        featuresSection.style.opacity = '0';
        featuresSection.style.transform = 'translateY(80px)';
        featuresSection.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        featuresObserver.observe(featuresSection);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }

    // H1 swallowing effect behind phone mockup
    const h1 = document.querySelector('.phone-container h1');
    const phoneMockup = document.querySelector('.phone-mockup');
    const heroText = document.querySelector('.hero-text');

    if (h1 && phoneMockup && heroText) {
        const hero = document.querySelector('.hero');
        const heroHeight = hero.offsetHeight;

        // Calculate scroll progress within the hero section only
        const effectiveScroll = Math.max(0, Math.min(scrolled, heroHeight * 0.6));
        const scrollProgress = Math.min(effectiveScroll / (heroHeight * 0.4), 1);

        // Move the h1 down and fade it out as user scrolls
        const translateY = scrollProgress * 250; // Move down 250px
        const opacity = 1 - (scrollProgress * 2.5); // Fade out much faster
        const scale = 1 - (scrollProgress * 0.3); // More scale down

        h1.style.transform = `translateY(${translateY}px) scale(${scale})`;
        h1.style.opacity = Math.max(0, opacity);

        // Phone mockup moves with scroll but stops early
        const phoneTranslate = Math.min(effectiveScroll * 0.3, heroHeight * 0.15);
        phoneMockup.style.transform = `translateY(${phoneTranslate}px)`;

        // Hero text emerging upward to stay below the phone
        const textProgress = Math.min(effectiveScroll / (heroHeight * 0.5), 1);
        const textTranslate = Math.min(effectiveScroll * 0.25, heroHeight * 0.15);
        const textOpacity = Math.min(1, textProgress * 2); // Fade in

        heroText.style.transform = `translateY(${textTranslate}px)`;
        heroText.style.opacity = textOpacity;
    }
});

// Add mouse move effect for feature cards (3D tilt)
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Animate numbers in stat items when they come into view
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const number = entry.target.querySelector('.stat-number');
            if (number) {
                const text = number.textContent.trim();
                const value = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(value)) {
                    number.dataset.suffix = text.replace(/\d/g, '');
                    animateValue(number, 0, value, 2000);
                }
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.stat-item').forEach(stat => {
        statObserver.observe(stat);
    });
});

// Add floating animation to score number
const scoreObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const scoreNum = entry.target.querySelector('.score-number');
            if (scoreNum) {
                const finalValue = parseInt(scoreNum.textContent);
                animateValue(scoreNum, 0, finalValue, 2500);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const scoreVisual = document.querySelector('.score-visual');
    if (scoreVisual) {
        scoreObserver.observe(scoreVisual);
    }
});

// Add cursor glow effect
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
cursorGlow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 221, 255, 0.15) 0%, transparent 70%);
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
    mix-blend-mode: screen;
    opacity: 0;
    transition: opacity 0.3s ease;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

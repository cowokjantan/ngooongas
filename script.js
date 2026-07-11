document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading Screen Logic
    const loader = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        progressBar.style.width = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 800);
            }, 500);
        }
    }, 100);

    // 2. Mouse Glow Effect
    const glow = document.getElementById('cursor-glow');
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    });

    // 3. Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Parallax Effect for Hero Content
    const heroBg = document.querySelector('.hero-background');
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            requestAnimationFrame(() => {
                heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 1.5;
            });
        }
    });

    // 5. Scroll Reveal with Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -100px 0px', threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 6. 3D Tilt Effect on Cards
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });

    // 7. Floating Leaves Generator
    const leavesContainer = document.getElementById('leaves-container');
    const createLeaf = () => {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        
        // Random properties
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 5; // 5-10s
        const delay = Math.random() * 5;
        const scale = Math.random() * 0.5 + 0.5;
        
        leaf.style.left = `${left}vw`;
        leaf.style.animationDuration = `${duration}s`;
        leaf.style.animationDelay = `${delay}s`;
        leaf.style.transform = `scale(${scale})`;
        
        leavesContainer.appendChild(leaf);
        
        setTimeout(() => {
            leaf.remove();
        }, (duration + delay) * 1000);
    };

    // Keep active leaves running
    setInterval(createLeaf, 800);
    for(let i=0; i<15; i++) createLeaf(); // Initial batch

    // 8. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });
            
            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
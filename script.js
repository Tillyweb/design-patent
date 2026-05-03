/**
 * Design Patent Website v2 - Interactive Features
 * Features: Timeline, Checklist with localStorage, Progress Bar
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavbar();
    initTimeline();
    initChecklist();
    initScrollAnimations();
});

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Interactive Timeline - Click to expand
 */
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        const toggle = item.querySelector('.timeline-toggle');
        
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Close other items
                timelineItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('expanded');
                        const otherToggle = otherItem.querySelector('.timeline-toggle');
                        if (otherToggle) {
                            otherToggle.setAttribute('aria-expanded', 'false');
                        }
                    }
                });
                
                // Toggle current item
                item.classList.toggle('expanded');
                const isExpanded = item.classList.contains('expanded');
                toggle.setAttribute('aria-expanded', isExpanded.toString());
            });
        }
        
        // Click anywhere on content to toggle
        if (content) {
            content.addEventListener('click', () => {
                const toggleBtn = item.querySelector('.timeline-toggle');
                if (toggleBtn) {
                    toggleBtn.click();
                }
            });
        }
    });
}

/**
 * Checklist with localStorage persistence
 */
function initChecklist() {
    const STORAGE_KEY = 'design_patent_checklist';
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const resetBtn = document.getElementById('resetChecklist');
    const saveBtn = document.getElementById('saveChecklist');
    
    // Load saved state
    function loadState() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const state = JSON.parse(saved);
                checkboxes.forEach((checkbox, index) => {
                    checkbox.checked = state[index] || false;
                });
            } catch (e) {
                console.warn('Failed to load checklist state');
            }
        }
        updateProgress();
    }
    
    // Save state
    function saveState() {
        const state = {};
        checkboxes.forEach((checkbox, index) => {
            state[index] = checkbox.checked;
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    
    // Update progress bar
    function updateProgress() {
        const total = checkboxes.length;
        const checked = document.querySelectorAll('.checklist-checkbox:checked').length;
        const percent = Math.round((checked / total) * 100);
        
        if (progressFill) {
            progressFill.style.width = `${percent}%`;
        }
        if (progressPercent) {
            progressPercent.textContent = `${percent}%`;
        }
        
        // Update visual state of items
        checkboxes.forEach((checkbox, index) => {
            const item = checkbox.closest('.checklist-item');
            if (item) {
                if (checkbox.checked) {
                    item.classList.add('checked');
                } else {
                    item.classList.remove('checked');
                }
            }
        });
    }
    
    // Event listeners
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateProgress();
            saveState();
        });
    });
    
    // Reset button
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            updateProgress();
            localStorage.removeItem(STORAGE_KEY);
        });
    }
    
    // Save button
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            saveState();
            // Visual feedback
            saveBtn.textContent = 'บันทึกแล้ว ✓';
            setTimeout(() => {
                saveBtn.textContent = 'บันทึก checklist';
            }, 2000);
        });
    }
    
    // Initialize
    loadState();
}

/**
 * Scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scope-card, .case-card, .benefit-card, .legal-card, .postreg-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay based on index
                const siblings = entry.target.parentElement.querySelectorAll('.animate-on-scroll');
                const siblingIndex = Array.from(siblings).indexOf(entry.target);
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animated');
                }, siblingIndex * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Set initial state and observe
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Special handling for hero section - animate immediately
    const heroElements = document.querySelectorAll('.hero .fade-in, .hero .slide-up');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.2}s`;
        el.style.animationFillMode = 'forwards';
    });
}

/**
 * Utility: Smooth scroll to element
 */
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
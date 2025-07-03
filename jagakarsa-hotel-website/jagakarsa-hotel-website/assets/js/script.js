// ===== GLOBAL VARIABLES =====
let currentSlide = 0;
let currentTestimonialSlide = 0;
let gallerySlides = [];
let testimonialSlides = [];

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initNotificationBanner();
    initGallerySlider();
    initTestimonialSlider();
    initContactForm();
    initImageModal();
    initSmoothScrolling();
    initAnimations();
});

// ===== MOBILE NAVIGATION =====
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// ===== NOTIFICATION BANNER =====
function initNotificationBanner() {
    const notificationBanner = document.getElementById('notificationBanner');
    const closeButton = document.getElementById('closeNotification');

    if (notificationBanner && closeButton) {
        // Check if banner was previously closed
        const bannerClosed = localStorage.getItem('notificationBannerClosed');
        
        if (bannerClosed === 'true') {
            notificationBanner.style.display = 'none';
        }

        closeButton.addEventListener('click', function() {
            notificationBanner.style.display = 'none';
            localStorage.setItem('notificationBannerClosed', 'true');
        });

        // Auto-hide banner after 10 seconds
        setTimeout(function() {
            if (notificationBanner.style.display !== 'none') {
                notificationBanner.style.opacity = '0.8';
            }
        }, 10000);
    }
}

// ===== GALLERY SLIDER =====
function initGallerySlider() {
    const slider = document.getElementById('gallerySlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');

    if (slider) {
        gallerySlides = slider.querySelectorAll('.slide');
        
        if (gallerySlides.length > 0) {
            // Create dots
            if (dotsContainer) {
                gallerySlides.forEach((_, index) => {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    if (index === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => goToSlide(index));
                    dotsContainer.appendChild(dot);
                });
            }

            // Previous button
            if (prevBtn) {
                prevBtn.addEventListener('click', function() {
                    currentSlide = currentSlide === 0 ? gallerySlides.length - 1 : currentSlide - 1;
                    updateSlider();
                });
            }

            // Next button
            if (nextBtn) {
                nextBtn.addEventListener('click', function() {
                    currentSlide = currentSlide === gallerySlides.length - 1 ? 0 : currentSlide + 1;
                    updateSlider();
                });
            }

            // Auto-play slider
            setInterval(function() {
                if (gallerySlides.length > 1) {
                    currentSlide = currentSlide === gallerySlides.length - 1 ? 0 : currentSlide + 1;
                    updateSlider();
                }
            }, 5000);

            // Touch/swipe support
            let startX = 0;
            let endX = 0;

            slider.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
            });

            slider.addEventListener('touchend', function(e) {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
            });

            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = startX - endX;

                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        // Swipe left - next slide
                        currentSlide = currentSlide === gallerySlides.length - 1 ? 0 : currentSlide + 1;
                    } else {
                        // Swipe right - previous slide
                        currentSlide = currentSlide === 0 ? gallerySlides.length - 1 : currentSlide - 1;
                    }
                    updateSlider();
                }
            }
        }
    }
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    // Update slides
    gallerySlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    // Update dots
    const dots = document.querySelectorAll('#sliderDots .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// ===== TESTIMONIAL SLIDER =====
function initTestimonialSlider() {
    const testimonialSlider = document.getElementById('testimonialSlider');
    const prevBtn = document.getElementById('testimonialPrevBtn');
    const nextBtn = document.getElementById('testimonialNextBtn');
    const dotsContainer = document.getElementById('testimonialDots');

    if (testimonialSlider) {
        testimonialSlides = testimonialSlider.querySelectorAll('.testimonial-slide');
        
        if (testimonialSlides.length > 0) {
            // Create dots
            if (dotsContainer) {
                testimonialSlides.forEach((_, index) => {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    if (index === 0) dot.classList.add('active');
                    dot.addEventListener('click', () => goToTestimonialSlide(index));
                    dotsContainer.appendChild(dot);
                });
            }

            // Previous button
            if (prevBtn) {
                prevBtn.addEventListener('click', function() {
                    currentTestimonialSlide = currentTestimonialSlide === 0 ? testimonialSlides.length - 1 : currentTestimonialSlide - 1;
                    updateTestimonialSlider();
                });
            }

            // Next button
            if (nextBtn) {
                nextBtn.addEventListener('click', function() {
                    currentTestimonialSlide = currentTestimonialSlide === testimonialSlides.length - 1 ? 0 : currentTestimonialSlide + 1;
                    updateTestimonialSlider();
                });
            }

            // Auto-play testimonial slider
            setInterval(function() {
                if (testimonialSlides.length > 1) {
                    currentTestimonialSlide = currentTestimonialSlide === testimonialSlides.length - 1 ? 0 : currentTestimonialSlide + 1;
                    updateTestimonialSlider();
                }
            }, 7000);

            // Touch/swipe support for testimonials
            let startX = 0;
            let endX = 0;

            testimonialSlider.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
            });

            testimonialSlider.addEventListener('touchend', function(e) {
                endX = e.changedTouches[0].clientX;
                handleTestimonialSwipe();
            });

            function handleTestimonialSwipe() {
                const swipeThreshold = 50;
                const diff = startX - endX;

                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        // Swipe left - next slide
                        currentTestimonialSlide = currentTestimonialSlide === testimonialSlides.length - 1 ? 0 : currentTestimonialSlide + 1;
                    } else {
                        // Swipe right - previous slide
                        currentTestimonialSlide = currentTestimonialSlide === 0 ? testimonialSlides.length - 1 : currentTestimonialSlide - 1;
                    }
                    updateTestimonialSlider();
                }
            }
        }
    }
}

function goToTestimonialSlide(index) {
    currentTestimonialSlide = index;
    updateTestimonialSlider();
}

function updateTestimonialSlider() {
    // Update slides
    testimonialSlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentTestimonialSlide);
    });

    // Update dots
    const dots = document.querySelectorAll('#testimonialDots .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialSlide);
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !message) {
                showNotification('Mohon lengkapi semua field yang wajib diisi.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Format email tidak valid.', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Pesan Anda sedang dikirim...', 'info');
            
            setTimeout(function() {
                showNotification('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.', 'success');
                contactForm.reset();
            }, 2000);
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;

    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(function() {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ===== IMAGE MODAL =====
function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    // Make openModal and closeModal global functions
    window.openModal = function(imageSrc, caption) {
        if (modal && modalImage && modalCaption) {
            modalImage.src = imageSrc;
            modalCaption.textContent = caption;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };

    // Close modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .room-card, .award-card, .promo-card, .testimonial-card, .advantage-item, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== SCROLL TO TOP =====
function initScrollToTop() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(scrollToTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== LAZY LOADING =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== RATING ANIMATION =====
function initRatingAnimation() {
    const ratingBars = document.querySelectorAll('.rating-fill');
    
    const ratingObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                ratingObserver.unobserve(bar);
            }
        });
    });

    ratingBars.forEach(bar => ratingObserver.observe(bar));
}

// ===== FORM ENHANCEMENTS =====
function initFormEnhancements() {
    // Add floating labels effect
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    formInputs.forEach(input => {
        // Add focus/blur effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
}

// ===== PROMO CODE COPY =====
function initPromoCodeCopy() {
    const promoCodes = document.querySelectorAll('.promo-code');
    
    promoCodes.forEach(code => {
        code.style.cursor = 'pointer';
        code.title = 'Klik untuk menyalin kode';
        
        code.addEventListener('click', function() {
            const text = this.textContent;
            
            // Copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showNotification(`Kode "${text}" berhasil disalin!`, 'success');
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification(`Kode "${text}" berhasil disalin!`, 'success');
            }
        });
    });
}

// ===== INITIALIZE ADDITIONAL FEATURES =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize additional features
    initScrollToTop();
    initLazyLoading();
    initRatingAnimation();
    initFormEnhancements();
    initPromoCodeCopy();
});

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance optimization
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Format currency for Indonesian Rupiah
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Format date for Indonesian locale
function formatDate(date) {
    return new Intl.DateTimeFormat('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // You could send error reports to a logging service here
});

// ===== PERFORMANCE MONITORING =====
window.addEventListener('load', function() {
    // Log page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('keydown', function(e) {
    // Enable keyboard navigation for sliders
    if (e.key === 'ArrowLeft' && document.activeElement.closest('.slider-container')) {
        e.preventDefault();
        document.getElementById('prevBtn')?.click();
    } else if (e.key === 'ArrowRight' && document.activeElement.closest('.slider-container')) {
        e.preventDefault();
        document.getElementById('nextBtn')?.click();
    }
    
    // Enable keyboard navigation for testimonial slider
    if (e.key === 'ArrowLeft' && document.activeElement.closest('.testimonial-slider-container')) {
        e.preventDefault();
        document.getElementById('testimonialPrevBtn')?.click();
    } else if (e.key === 'ArrowRight' && document.activeElement.closest('.testimonial-slider-container')) {
        e.preventDefault();
        document.getElementById('testimonialNextBtn')?.click();
    }
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatCurrency,
        formatDate,
        isValidEmail,
        isInViewport,
        debounce,
        throttle
    };
}


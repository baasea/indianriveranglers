"use strict";

let carouselIndex = 0;
let carouselTimer;


function carousel() {
    const slides = document.getElementsByClassName('main-mySlides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    carouselIndex++;
    if (carouselIndex > slides.length) {
        carouselIndex = 1;
    }
    if (slides.length > 0) {
        slides[carouselIndex - 1].style.display = 'block';
    }
    // schedule next
    carouselTimer = window.setTimeout(carousel, 4000);
}


function toggleNav() {
    const x = document.getElementById('navDemo');
    if (!x)
        return;
    if (x.className.indexOf('w3-show') === -1) {
        x.className += ' w3-show';
    }
    else {
        x.className = x.className.replace(' w3-show', '');
    }
}


function populateTestimonials() {
    const data = [
        { author: 'Alex', text: 'Great work — highly recommended!' },
        { author: 'Sam', text: 'Very professional and delightful to work with.' },
        { author: 'Jordan', text: 'An unforgettable experience.' }
    ];
    const container = document.getElementById('testimonials');
    if (!container)
        return;
    data.forEach(d => {
        const block = document.createElement('div');
        block.className = 'quote w3-padding';
        block.innerHTML = `<p>“${d.text}”</p><footer>— ${d.author}</footer>`;
        container.appendChild(block);
    });
}


function init() {
    // Start carousel if slides present
    if (document.getElementsByClassName('main-mySlides').length > 0) {
        carouselIndex = 0;
        carousel();
    }
    populateTestimonials();
}


// Attach toggleNav to window so inline onclicks can call it (keeps HTML intact)
window.toggleNav = toggleNav;
document.addEventListener('DOMContentLoaded', () => {
    init();
});
